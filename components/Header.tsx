"use client";
import Image from "next/image";
import gsap from "gsap";
import { useEffect } from "react";

const Header = () => {
  useEffect(() => {
    gsap.fromTo(".increment", { width: 0 }, { width: 40, duration: 2 });

    gsap.fromTo(
      ".scale-anim",
      {
        scale: 0,
      },
      {
        scale: 1,
        duration: 1,
        stagger: 0.2,
      }
    );
  }, []);

  return (
    <div>
      <div
        className={`l:flex hidden items-center justify-between text-white pt-14 `}
        style={{ fontWeight: "600" }}
      >
        <Image
          src={"/assets/images/logo.png"}
          width={40}
          height={40}
          alt="logo"
          className="increment"
        />
        <ul className="flex ">
          <div className="scale-anim">
            <li className="px-6 ">Home</li>
          </div>
          <li className="inline px-6 scale-anim">
            Services
            <Image
              src={"/assets/images/more.png"}
              width={16}
              height={16}
              alt="more"
              className="inline ml-3"
            />
          </li>
          <li className="px-6 scale-anim">About us</li>
          <li className="px-6 scale-anim">Blog</li>
          <li className="px-6 scale-anim">Career</li>
        </ul>
        <div className="flex items-center">
          <button className="bg-blue text-black  px-[3.12vw] py-[1vw] rounded-full text-base scale-anim">
            Contact us
          </button>
          <div className="flex items-center ml-14 scale-anim">
            <Image
              src={"/assets/images/login.png"}
              width={24}
              height={24}
              alt="login"
            />
            <h4 className="ml-4">Login</h4>
          </div>
        </div>
      </div>
      <div className="l:hidden pt-10">
        <div className="flex justify-between ">
          <Image
            src={"/assets/images/logo.png"}
            width={40}
            height={40}
            alt="logo"
          />
          <Image
            src={"/assets/images/menu.png"}
            width={40}
            height={40}
            alt="more"
          />
        </div>
      </div>
    </div>
  );
};
export default Header;
