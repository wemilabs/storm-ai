import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

import { PRICING_PLANS } from "@/lib/data";

export function Pricing() {
  return (
    <section className="w-full py-12 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Simple, Transparent Pricing
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              One-time payment. No subscriptions. Unlock your creative potential
              today.
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "flex flex-col rounded-lg border p-6",
                plan.popular ? "border-primary shadow-lg" : "border-border"
              )}
            >
              {plan.popular && (
                <div className="-mt-2 mb-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground w-fit mx-auto">
                  Most Popular
                </div>
              )}

              <div className="mb-5">
                <h3 className="text-xl font-bold">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mt-1">
                  {plan.description}
                </p>
              </div>

              <div className="mb-5">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground ml-1">one-time</span>
              </div>

              <ul className="mb-6 space-y-2 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="mr-2 size-4 text-primary" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.popular ? "default" : "outline"}
                className="w-full mt-auto"
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
