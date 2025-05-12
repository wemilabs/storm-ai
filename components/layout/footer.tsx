export function Footer() {
  return (
    <footer className="w-full py-6 bg-background border-t">
      <div className="container flex flex-col items-center justify-center gap-4 md:flex-row md:gap-8">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Aha! AI Project Idea Generator. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
}
