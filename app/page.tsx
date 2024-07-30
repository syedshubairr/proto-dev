import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Heading from "@/components/Heading";
import Navbar from "@/components/Navbar";
import Packages from "@/components/Packages";
import PerfectSolution from "@/components/PerfectSolution";
import RecentWork from "@/components/RecentWork";
import Results from "@/components/Results";
import SimplifyDesign from "@/components/SimplifyDesign";
import Slider from "@/components/Slider";
import { register } from "swiper/element/bundle";
export default function Home() {
  register();
  return (
    <div className="flex flex-col justify-center mx-4">
      <Navbar />
      <Heading />
      <RecentWork />
      <Slider />
      <SimplifyDesign />
      <PerfectSolution />
      <Packages />
      <Results />
      <FAQ />
      <Footer />
    </div>
  );
}
