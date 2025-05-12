import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AuthForm } from "@/components/forms/auth";

export default function Page() {
  return (
    <div className="h-screen flex items-center justify-center">
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-xl">Personalize your experience</CardTitle>
          <CardDescription>Sign in below</CardDescription>
        </CardHeader>
        <CardContent>
          <AuthForm />
        </CardContent>
        <CardFooter className="flex justify-end -mt-3">
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
        </CardFooter>
      </Card>
    </div>
  );
}
