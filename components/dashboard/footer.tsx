import Link from "next/link";
import {
  Github,
  Twitter,
  Linkedin,
  Mail,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold">
              AI<span className="text-blue-600">Newsletter</span>
            </h2>
            <p className="text-sm text-muted-foreground">
              AI-powered newsletters that summarize the web, save time,
              and keep you informed every day.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide">
              Product
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#">Features</Link></li>
              <li><Link href="#">Pricing</Link></li>
              <li><Link href="#">Integrations</Link></li>
              <li><Link href="#">Roadmap</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide">
              Resources
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#">Blog</Link></li>
              <li><Link href="#">Docs</Link></li>
              <li><Link href="#">Changelog</Link></li>
              <li><Link href="#">Support</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide">
              Connect
            </h3>
            <div className="flex items-center gap-4">
              <Link href="#" aria-label="GitHub">
                <Github className="h-5 w-5 text-muted-foreground hover:text-foreground" />
              </Link>
              <Link href="#" aria-label="Twitter">
                <Twitter className="h-5 w-5 text-muted-foreground hover:text-foreground" />
              </Link>
              <Link href="#" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5 text-muted-foreground hover:text-foreground" />
              </Link>
              <Link href="#" aria-label="Email">
                <Mail className="h-5 w-5 text-muted-foreground hover:text-foreground" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t pt-6 text-sm text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} AI Newsletter. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
