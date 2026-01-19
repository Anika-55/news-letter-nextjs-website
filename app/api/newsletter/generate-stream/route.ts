import { openai } from "@ai-sdk/openai";
import { streamObject } from "ai";
import { z } from "zod";
import type { NextRequest } from "next/server";
import { getUserSettingsByUserId } from "@/actions/user-settings";
import { getCurrentUser } from "@/lib/auth/helpers";
import {
  buildArticleSummaries,
  buildNewsletterPrompt,
} from "@/lib/newsletter/prompt-builder";
import { prepareFeedsAndArticles } from "@/lib/rss/feed-refresh";

export const maxDuration = 300; // 5 minutes

// ===============================
// Zod schema for newsletter
// ===============================

const newsletterSchema = z.object({
  suggestedTitles: z.array(z.string()).length(5),
  suggestedSubjectLines: z.array(z.string()).length(5),
  body: z.string(),
  topAnnouncements: z.array(z.string()).length(5),
  additionalInfo: z.string(), // required for AI SDK
});

export type GeneratedNewsletter = z.infer<typeof newsletterSchema>;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { feedIds, startDate, endDate, userInput } = body;

    // Validate inputs
    if (!feedIds || !Array.isArray(feedIds) || feedIds.length === 0) {
      return Response.json(
        { error: "feedIds is required and must be a non-empty array" },
        { status: 400 }
      );
    }

    if (!startDate || !endDate) {
      return Response.json(
        { error: "startDate and endDate are required" },
        { status: 400 }
      );
    }

    // Get current user and settings
    const user = await getCurrentUser();
    const settings = await getUserSettingsByUserId(user.id);

    // Prepare articles from feeds
    const articles = await prepareFeedsAndArticles({
      feedIds,
      startDate: new Date(startDate),
      endDate: new Date(endDate),
    });

    // Build AI prompt
    const articleSummaries = buildArticleSummaries(articles);
    const prompt = buildNewsletterPrompt({
      startDate: new Date(startDate),
      endDate: new Date(endDate),
      articleSummaries,
      articleCount: articles.length,
      userInput,
      settings,
    });

    // Stream newsletter generation using AI SDK
    const { partialObjectStream } = await streamObject({
      model: openai("gpt-4o"), // or "gpt-4.1" if unavailable
      schema: newsletterSchema,
      prompt,
      onFinish: async () => {
        console.log("Newsletter generation finished!");
      },
    });

    // Return streaming response
    return new Response(partialObjectStream, {
  headers: { "Content-Type": "text/event-stream" },
});

  } catch (error) {
    console.error("Error in generate-stream:", error);

    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";

    return Response.json(
      { error: `Failed to generate newsletter: ${errorMessage}` },
      { status: 500 }
    );
  }
}
