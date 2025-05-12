"use client";

import { useState } from "react";

import { signIn } from "@/lib/auth-client";

import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { toast } from "sonner";

export function AuthForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <div className="grid gap-6">
      <Button
        variant="outline"
        type="button"
        disabled={isLoading}
        onClick={async () => {
          await signIn.social(
            {
              provider: "google",
              callbackURL: "/",
              errorCallbackURL: "/error",
            },

            {
              onRequest: (ctx) => {
                setIsLoading(true);
              },

              onResponse: (ctx) => {
                setIsLoading(false);
              },

              onError: (ctx) => {
                setIsLoading(false);
                toast.error("Failed to sign in");
              },
            }
          );
        }}
        className="w-full"
      >
        {isLoading ? (
          <Icons.spinner className="mr-2 size-4 animate-spin" />
        ) : (
          <Icons.google className="mr-2 size-4" />
        )}{" "}
        Continue with Google
      </Button>
    </div>
  );
}
