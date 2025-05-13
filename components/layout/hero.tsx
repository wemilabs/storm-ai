import { IdeaGeneratorForm } from "../forms/idea-generator";

export function Hero() {
  return (
    <section className="w-full py-10">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[600px] bg-gradient-to-br from-primary/50 via-secondary/20 to-background" />
        <div
          className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-primary/20 blur-xs animate-pulse"
          style={{ animationDuration: "8s" }}
        />
        <div
          className="absolute top-20 right-20 h-80 w-80 rounded-full bg-secondary/20 blur-xs animate-pulse"
          style={{ animationDuration: "10s" }}
        />
        <div
          className="absolute bottom-40 left-1/4 h-72 w-72 rounded-full bg-indigo-500/10 blur-xs animate-pulse"
          style={{ animationDuration: "12s" }}
        />
        <div
          className="absolute top-1/3 right-1/3 h-64 w-64 rounded-full bg-rose-500/10 blur-xs animate-pulse"
          style={{ animationDuration: "9s" }}
        />
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-8">
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
            Generate Brilliant <span className="text-primary">Ideas</span> with
            AI
          </h1>
          <p className="text-muted-foreground md:text-lg/relaxed">
            Storm is an AI-native brainstorming tool that helps you come up with
            innovative solutions for your next academic work.
          </p>
        </div>

        <div className="px-4">
          <IdeaGeneratorForm />
        </div>
      </div>
    </section>
  );
}
