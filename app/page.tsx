import Heading from "@/components/Heading";
import Navbar from "@/components/Navbar";
import Packages from "@/components/Packages";
import PerfectSolution from "@/components/PerfectSolution";
import RecentWork from "@/components/RecentWork";
import SimplifyDesign from "@/components/SimplifyDesign";
import Slider from "@/components/Slider";
import { register } from "swiper/element/bundle";
export default function Home() {
  register();
  return (
    <main className="flex flex-col">
      <Navbar />
      <Heading />
      <RecentWork />
      <Slider />
      <SimplifyDesign />
      <PerfectSolution />
      <Packages />
    </main>
  );
}
