"use client";

import Link from "next/link";
import Image from "next/image";

import { useSession, signOut } from "@/lib/auth-client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

import { ModeToggle } from "@/components/mode-toggle";
import { Icons } from "../icons";

export function Header() {
  const { data: session } = useSession();
  const user = session?.user;
  const userInitials = user?.name?.slice(0, 2).toUpperCase();

  return (
    <header className="sticky top-0 z-50 w-full md:w-[70%] mx-auto rounded-lg bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 md:px-6">
      <div className="flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2 text-2xl">
            🌪
          </Link>
        </div>

        <nav className="flex items-center">
          {session ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild className="">
                <Button variant="ghost" className="relative flex items-center">
                  <Avatar className="size-8">
                    {user?.image ? (
                      <div className="relative aspect-square h-full w-full">
                        <Image
                          src={user.image}
                          alt={user.name ?? ""}
                          className="rounded-full object-cover"
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          priority
                        />
                      </div>
                    ) : (
                      <AvatarFallback>{userInitials}</AvatarFallback>
                    )}
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">
                      {user?.name || "Guest"}
                    </p>
                    <p className="text-xs leading-none text-muted-foreground">
                      {user?.email || "No email"}
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/profile" className="flex items-center">
                    <Icons.user className="mr-2 size-4" />
                    <span>Profile</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => signOut()}>
                  <Icons.logout className="mr-2 size-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button variant="ghost" size="sm" className="text-sm" asChild>
              <Link href="/auth/sign-in">Sign In</Link>
            </Button>
          )}

          <ModeToggle />
        </nav>
      </div>
    </header>
  );
}
