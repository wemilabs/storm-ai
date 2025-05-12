"use client";

import { Button } from "@/components/ui/button";
import { signOut } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export function LogoutAction() {
  const router = useRouter();
  const handleSignOut = async () => {
    try {
      await signOut({
        fetchOptions: {
          onSuccess: () => {
            router.push("/");
            toast.success("Successfully logged out");
          },
        },
      });
    } catch (error) {
      console.error("Sign out error:", error);
      toast.error("Failed to sign out");
    }
  };
  return <Button onClick={handleSignOut}>Sign out</Button>;
}
