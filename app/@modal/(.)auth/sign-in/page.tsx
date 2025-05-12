"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";

import { AuthForm } from "@/components/forms/auth";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function SignInModal() {
  const router = useRouter();
  return (
    <Dialog defaultOpen onOpenChange={() => router.back()}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Personalize your experience</DialogTitle>
          <DialogDescription>Sign in below</DialogDescription>
        </DialogHeader>
        <AuthForm />
        <DialogFooter>
          <p className="sm:px-0 px-8 text-center text-xs text-muted-foreground">
            By continuing, you agree to our{" "}
            <Link
              href="/legal/terms-of-service"
              className="underline underline-offset-4 hover:text-primary"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              href="/legal/privacy-policy"
              className="underline underline-offset-4 hover:text-primary"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
