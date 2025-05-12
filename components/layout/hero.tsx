"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Icons } from "@/components/icons";
import { AREAS } from "@/lib/data";
import { Textarea } from "../ui/textarea";

export function Hero() {
  const [area, setArea] = useState("");
  const [description, setDescription] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);

    // This would be where you'd call your AI model
    // For now, we're just simulating a delay
    setTimeout(() => {
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <section className="w-full py-14 lg:py-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-8">
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
            Generate Brilliant <span className="text-primary">Ideas</span> with
            AI
          </h1>
          <p className="text-muted-foreground text-base/relaxed">
            Storm is an AI-native brainstorming tool that turns your concepts
            into innovative solutions.
          </p>
        </div>

        <div className="px-4">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Idea Generator</CardTitle>
              <CardDescription>
                Select an area and describe what you're looking for to get
                AI-generated ideas.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Area of Interest
                  </label>
                  <Select value={area} onValueChange={setArea}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select an area" />
                    </SelectTrigger>
                    <SelectContent>
                      {AREAS.map((area) => (
                        <SelectItem key={area.value} value={area.value}>
                          {area.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* <div className="space-y-2">
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Country context
								</label>
								<Select value={area} onValueChange={setArea}>
                <SelectTrigger className="w-full">
								<SelectValue placeholder="Select an area" />
                </SelectTrigger>
                <SelectContent>
								{AREAS.map((area) => (
									<SelectItem key={area.value} value={area.value}>
                      {area.label}
											</SelectItem>
                  ))}
									</SelectContent>
              </Select>
            </div> */}

                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Brief Description
                  </label>
                  <Textarea
                    placeholder="Describe what you're looking for..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="min-h-[100px] resize-y"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  disabled={!area || !description || isGenerating}
                >
                  {isGenerating ? (
                    <>
                      <Icons.spinner className="mr-2 size-4 animate-spin" />
                      Brainstorming...
                    </>
                  ) : (
                    <>
                      <Icons.sparkles className="mr-2 size-4" />
                      Generate Ideas
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
