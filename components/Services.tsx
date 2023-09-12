import Image from "next/image";

const Services = () => {
  return (
    <div className=" mt-16">
      <div className="grid grid-cols-3">
        <div className="w-full">
          <Image
            src={"/assets/images/1.png"}
            width={200}
            height={0}
            alt="img1"
            style={{ width: "100%" }}
          />
        </div>

        <Image
          src={"/assets/images/2.png"}
          width={100}
          height={100}
          alt="img1"
        />
        <div></div>
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
