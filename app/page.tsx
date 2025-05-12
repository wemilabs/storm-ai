import { Hero } from "@/components/layout/hero";
import { HowItWorks } from "@/components/layout/how-it-works";
import { Pricing } from "@/components/layout/pricing";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <HowItWorks />
      <Pricing />
      <Footer />
    </main>
  );
}
