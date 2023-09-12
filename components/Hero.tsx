"use client";

import Image from "next/image";
import { useEffect } from "react";
import gsap from "gsap";

const Hero = () => {
  useEffect(() => {
    const timeline = gsap.timeline();

    timeline.fromTo(
      ".scale-text-anim",
      {
        fontSize: 3,
      },
      {
        fontSize: "14vw",
        duration: 2,
        stagger: 0.2,
      }
    );
    timeline.addLabel("secondAnimation", "-=2");
    timeline.fromTo(
      ".hero-scal-anim",
      {
        scale: 0,
      },
      {
        scale: 1,
        duration: 1,
        stagger: 0.1,
      },
      "secondAnimation"
    );
    timeline.addLabel("lastAnimation", "-=2");

    timeline.fromTo(
      ".img-incre",
      { duration: 3, height: 620, borderRadius: 140 },
      { height: 0, borderRadius: 0 },
      "lastAnimation"
    );
  }, []);
  const TitleArr = [`Darcy's`, "insurance", "products"];
  const title = `Darcy's insurance products`;
  return (
    <div className="text-white l:grid  grid-hero l:mt-24 mt-10 l:h-[70vh]">
      <div>
        {TitleArr.map((text, index) => {
          return (
            <h1
              key={index}
              className="w-fit xl:text-[220px] text-[13vw] l:block hidden scale-text-anim"
            >
              {text}
            </h1>
          );
        })}
        <h1 className="w-fit xl:text-[220px] text-[13vw] l:hidden block">
          {title}
        </h1>
      </div>
      <div className="mt-[3vw] sm:flex l:flex-col justify-between flex-wrap">
        <div className="l:w-auto sm:w-[48%] mr-[2%] sm:mt-0 mt-10 ">
          <Image
            src={"/assets/images/img.svg"}
            width={40}
            height={40}
            alt="more"
            className="inline hero-scal-anim"
          />
          <h4 className="font-semibold sm:text-base text-xl  mt-3 l:w-[75%] hero-scal-anim">
            Our plans are saving policyholders 30% - 60% on premiums
          </h4>
        </div>
        <div className="l:w-auto sm:w-[48%] sm:mt-0 mt-10">
          <Image
            src={"/assets/images/img.svg"}
            width={40}
            height={40}
            alt="more"
            className="inline hero-scal-anim"
          />
          <h4 className="font-semibold sm:text-base text-xl  mt-3 xl:w-[75%] w-[100%] hero-scal-anim">
            We offer a choice of low dedactibles and include no cost value-added
            services
          </h4>
        </div>
        <div className="gradient-sm w-fit px-5 py-8 rounded-full l:block hidden ">
          <Image
            src={"/assets/images/arrow.svg"}
            width={20}
            height={20}
            alt="arrow "
            className="hero-scal-anim "
          />
        </div>
      </div>
      <div className="">
        <div className="w-[310px] bg-[#0B0F17] z-50 absolute  rounded-[160px] img-incre"></div>
        <Image
          src={"/assets/images/main.png"}
          width={160}
          height={0}
          style={{ width: "100%" }}
          alt="more"
          className="inline  "
        />
      </div>
    </div>
  );
};
export default Hero;
