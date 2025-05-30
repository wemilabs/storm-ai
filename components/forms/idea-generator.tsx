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
import { Card, CardContent } from "@/components/ui/card";
import { Icons } from "@/components/icons";
import {
  AREAS,
  DEGREE_LEVELS,
  COUNTRY_CONTEXTS,
  COMPLEXITY_LEVELS,
  SUBMIT_LABELS,
} from "@/lib/data";
import { randomlyGenerateText } from "@/lib/utils";

export function IdeaGeneratorForm() {
  const [area, setArea] = useState("");
  const [degreeLevel, setDegreeLevel] = useState("");
  const [countryContext, setCountryContext] = useState("");
  const [complexityLevel, setComplexityLevel] = useState("");
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
    <Card className="w-full">
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Degree Level
            </label>
            <Select value={degreeLevel} onValueChange={setDegreeLevel}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a degree level" />
              </SelectTrigger>
              <SelectContent>
                {DEGREE_LEVELS.map((degreeLevel) => (
                  <SelectItem key={degreeLevel.value} value={degreeLevel.value}>
                    {degreeLevel.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

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

          <div className="space-y-2">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Country context
            </label>
            <Select value={countryContext} onValueChange={setCountryContext}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a country context" />
              </SelectTrigger>
              <SelectContent>
                {COUNTRY_CONTEXTS.map((countryContext) => (
                  <SelectItem
                    key={countryContext.value}
                    value={countryContext.value}
                  >
                    {countryContext.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Complexity level
            </label>
            <Select value={complexityLevel} onValueChange={setComplexityLevel}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a complexity level" />
              </SelectTrigger>
              <SelectContent>
                {COMPLEXITY_LEVELS.map((complexityLevel) => (
                  <SelectItem
                    key={complexityLevel.value}
                    value={complexityLevel.value}
                  >
                    {complexityLevel.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Button
            type="submit"
            className="w-full"
            disabled={
              !area ||
              !degreeLevel ||
              !countryContext ||
              !complexityLevel ||
              isGenerating
            }
          >
            {isGenerating ? (
              <>
                <Icons.spinner className="mr-2 size-4 animate-spin" />
                {randomlyGenerateText(SUBMIT_LABELS)}
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
  );
}
