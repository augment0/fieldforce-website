import { Hero } from "@/components/sections/hero";
import { Manifesto } from "@/components/sections/manifesto";
import { TrustBar } from "@/components/sections/trust-bar";
import { Platform } from "@/components/sections/platform";
import { Agents } from "@/components/sections/agents";
import { UseCases } from "@/components/sections/use-cases";
import { CustomerStory } from "@/components/sections/customer-story";
import { Comparison } from "@/components/sections/comparison";
import { Finale } from "@/components/sections/finale";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Manifesto />
      <TrustBar />
      <Platform />
      <Agents />
      <UseCases />
      <CustomerStory />
      <Comparison />
      <Finale />
    </>
  );
}
