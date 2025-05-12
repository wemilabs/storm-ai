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
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border bg-background">
              <span className="text-lg font-bold">1</span>
            </div>
            <h3 className="text-xl font-bold">Select Area</h3>
            <p className="text-center text-muted-foreground">
              Choose the domain where you need innovative ideas
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border bg-background">
              <span className="text-lg font-bold">2</span>
            </div>
            <h3 className="text-xl font-bold">Describe Need</h3>
            <p className="text-center text-muted-foreground">
              Briefly explain what you're looking for
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border bg-background">
              <span className="text-lg font-bold">3</span>
            </div>
            <h3 className="text-xl font-bold">Get Ideas</h3>
            <p className="text-center text-muted-foreground">
              Receive AI-generated innovative concepts tailored to your needs
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
