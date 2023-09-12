import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main className="bg-[#0B0F17] h-full flex justify-center">
      <div className="gradient md:max-w-[95vw] max-w-[98vw] mt-[4vw] rounded-[4vw] w-full lg:px-14 px-4">
        <div className="max-w-[1440px] mx-auto">
          <Header />
          <Hero />
          <Services />
        </div>
      </div>
    </main>
  );
}
