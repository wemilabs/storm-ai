import { auth } from "@/lib/auth";
import { headers } from "next/headers";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export default async function ProfilePage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session) {
    return <div>Not authenticated</div>;
  }

  const { name, email, createdAt, image } = session.user;
  const userInitials = name.slice(0, 2).toUpperCase();
  const joinedDate = createdAt
    ? new Date(createdAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "Unknown";

  return (
    <section className="w-full max-w-4xl mx-auto py-14 lg:py-24">
      <Card className="text-center w-fit mx-auto">
        <CardHeader>
          <div className="flex justify-center mb-4">
            <Avatar className="size-24">
              <AvatarImage src={image || ""} alt={name} />
              <AvatarFallback className="text-xl">
                {userInitials}
              </AvatarFallback>
            </Avatar>
          </div>
          <CardTitle>{name}</CardTitle>
          <CardDescription>{email}</CardDescription>
        </CardHeader>
        <CardContent>
          <Badge>Authenticated</Badge>
          <p className="mt-4 text-sm text-muted-foreground">
            Joined {joinedDate}
          </p>
        </CardContent>
      </Card>
    </section>
  );
}
