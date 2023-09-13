import Image from "next/image";

const Services = () => {
  return (
    <div className=" mt-[20vw]">
      <div className="grid grid-services">
        <div>
          <Image
            src={"/assets/images/1.png"}
            width={700}
            height={100}
            alt="img1"
          />
          {/* <img src="/assets/images/1.png" alt="" /> */}
        </div>
        <div>
          {/* <Image
            src={"/assets/images/2.png"}
            width={320}
            height={0}
            alt="img1"
          /> */}
          <img src="/assets/images/2.png" alt="" />
        </div>

        <div className="bg-bgClr px-10 pt-8 pb-10 rounded-[80px] flex flex-col justify-between ">
          <div>
            <h5 className="text-white text-[70px]">Best choice</h5>
            <p className="font-semibold text-white pt-3">
              {`Not all insurance are the same. That's why agency knows that your
            insurance should be customized to fit your situation.`}
            </p>
          </div>

          <button
            className={`text-textClr bg-accent font-semibold w-full rounded-full py-5 text-xl`}
          >
            View all services
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3">
        <Image
          src={"/assets/images/3.png"}
          width={100}
          height={100}
          alt="img1"
        />{" "}
        <Image
          src={"/assets/images/4.png"}
          width={100}
          height={100}
          alt="img1"
        />
        <Image
          src={"/assets/images/5.png"}
          width={100}
          height={100}
          alt="img1"
        />
      </div>
    </div>
  );
};
export default Services;
