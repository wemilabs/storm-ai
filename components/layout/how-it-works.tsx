export function HowItWorks() {
  return (
    <section className="w-full py-12 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              How It Works
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our AI-powered idea generator helps you brainstorm innovative
              solutions in minutes
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2">
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border bg-background">
              <span className="text-lg font-bold">1</span>
            </div>
            <h3 className="text-xl font-bold">Select Degree Level</h3>
            <p className="text-center text-muted-foreground">
              Choose the level of your degree.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border bg-background">
              <span className="text-lg font-bold">2</span>
            </div>
            <h3 className="text-xl font-bold">Select Area of Interest</h3>
            <p className="text-center text-muted-foreground">
              The field of study you are interested in.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border bg-background">
              <span className="text-lg font-bold">3</span>
            </div>
            <h3 className="text-xl font-bold">Select Country Context</h3>
            <p className="text-center text-muted-foreground">
              The country where you are studying. This provides relevant context
              to the AI agent.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border bg-background">
              <span className="text-lg font-bold">4</span>
            </div>
            <h3 className="text-xl font-bold">Select Complexity Level</h3>
            <p className="text-center text-muted-foreground">
              Choose the complexity level of your work.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border bg-background">
              <span className="text-lg font-bold">5</span>
            </div>
            <h3 className="text-xl font-bold">Generate Ideas</h3>
            <p className="text-center text-muted-foreground">
              Receive AI-generated innovative concepts tailored to your needs.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border bg-background">
              <span className="text-lg font-bold">6</span>
            </div>
            <h3 className="text-xl font-bold">Review. Refine. Export.</h3>
            <p className="text-center text-muted-foreground">
              Review and refine your ideas to make them even better. Export as
              PDF.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
