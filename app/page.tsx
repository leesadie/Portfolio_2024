import Image from "next/image";
import Hero from "./components/Hero";
import HeroSm from "./components/HeroSm";
import HeroFinal from "./components/hero/HeroFinal";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="hidden lg:block">
        <HeroFinal />
      </div>
      <div className="lg:hidden">
        <HeroSm />
      </div>
    </div>
  );
}
