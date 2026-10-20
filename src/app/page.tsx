import { Hero } from "@/components/sections/Hero";
import { HomeAbout } from "@/components/sections/home/HomeAbout";
import { SelectedWorkPreview } from "@/components/sections/home/SelectedWorkPreview";
import { ClosingCta } from "@/components/sections/home/ClosingCta";

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <HomeAbout />
      <SelectedWorkPreview />
      <ClosingCta />
    </main>
  );
}
