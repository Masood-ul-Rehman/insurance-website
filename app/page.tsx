"use client";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import { Poppins } from "next/font/google";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
const poppins = Poppins({
  weight: ["400", "500", "700", "600", "800"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <ReactLenis root>
      <main
        className={`bg-[#0B0F17] h-full flex justify-center ${poppins.className}`}
      >
        <div className="gradient md:max-w-[95vw] max-w-[98vw] mt-[4vw] rounded-[4vw] w-full lg:px-14 px-4">
          <div className="max-w-[1440px] mx-auto">
            <Header />
            <Hero />
            <Services />
          </div>
        </div>
      </main>
    </ReactLenis>
  );
}
