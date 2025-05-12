import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default async function Loading() {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="text-center space-y-4 mb-8">
        <Card className="h-fit">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <Skeleton className="size-24 rounded-full" />
            </div>
            <Skeleton className="h-4" />
            <Skeleton className="h-3" />
          </CardHeader>
          <CardContent className="text-center">
            <Skeleton className="h-4" />
            <Skeleton className="h-2" />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
