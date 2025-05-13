import Link from "next/link";

import { ModeToggle } from "@/components/mode-toggle";
import { AuthAccess } from "@/components/layout/auth-access";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full md:w-[70%] mx-auto rounded-lg bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 md:px-6">
      <div className="flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2 text-2xl">
            🌪
          </Link>
        </div>

        <nav className="flex items-center">
          <AuthAccess />
          <ModeToggle />
        </nav>
      </div>
    </header>
  );
}
