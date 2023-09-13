import Image from "next/image";

const Services = () => {
  return (
    <div className=" mt-[20vw] mb-[20vw]">
      <div className="grid grid-services">
        <div className="bg-[url('/assets/images/1.jpeg')] bg-cover bg-no-repeat rounded-[60px] h-[450px] relative">
          <div className="bg-bgClr relative z-20 w-fit px-10 py-5 rounded-full top-[82%] left-6">
            <h2 className="text-white font-medium">Home Insurance</h2>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="bg-[url('/assets/images/2.jpeg')] bg-right bg-cover bg-no-repeat rounded-full h-[450px] w-[75%] "></div>
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
      <div className="grid grid-cols-3 gap-8 mt-14">
        <div className="bg-[url('/assets/images/3.jpeg')] bg-cover bg-center  bg-no-repeat rounded-[50px]  h-[300px] relative">
          <div className="bg-bgClr relative z-20 w-fit px-10 py-5 rounded-full top-[72%] left-6">
            <h2 className="text-white font-medium">Vehicle damage</h2>
          </div>
        </div>
        <div className="bg-[url('/assets/images/4.jpeg')] bg-cover  bg-no-repeat rounded-[50px]  h-[300px] relative">
          <div className="bg-bgClr relative z-20 w-fit px-10 py-5 rounded-full top-[72%] left-6">
            <h2 className="text-white font-medium">Vehicle damage</h2>
          </div>
        </div>
        <div className="bg-[url('/assets/images/5.jpeg')] bg-cover bg-no-repeat rounded-[50px]  h-[300px] relative">
          <div className="bg-bgClr relative z-20 w-fit px-10 py-5 rounded-full top-[72%] left-6">
            <h2 className="text-white font-medium">Vehicle damage</h2>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Services;
