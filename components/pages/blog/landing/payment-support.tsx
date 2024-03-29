import { Button } from "@/components/ui/button";

const PaymentSupport = () => {
  return (
    <div className=" my-11 container relative z-40 py-10 flex  flex-col lg:flex-row lg:items-center lg:justify-between bg-white rounded-[40px] shadow-sm gap-y-8 lg:gap-y-0 lg:gap-x-10">
      <div className=" basis-full lg:basis-1/2 space-y-2">
        <h2 className=" text-xl lg:text-3xl font-bold leading-[100%]">
          Join the Mindgrasp AI Newsletter!
        </h2>
        <p className=" text-sm lg:text-base font-noraml text-black leading-[180%] tracking-[0.027px]">
          Stay ahead of the curve with Mindgrasp AI’s cutting-edge insights,
          study tips, and educational resources.
        </p>
      </div>
      <form className=" basis-full lg:basis-1/2 flex items-center gap-x-2">
        <div className=" bg-white py-3  flex-1 w-full border boder-[#CCC] h-12 flex items-center gap-x-2 px-3  rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M20 5H4C3.44772 5 3 5.44772 3 6V18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18V6C21 5.44772 20.5523 5 20 5Z"
              stroke="black"
              strokeWidth={2}
              strokeLinecap="round"
            />
            <path
              d="M3 6.5L12 12L21 6.5"
              stroke="black"
              strokeWidth={2}
              strokeLinecap="round"
            />
          </svg>

          <input
            required
            type="text"
            className="  flex-1 w-full focus:outline-none"
          />
        </div>
        <Button className=" h-12">Subscribe</Button>
      </form>
    </div>
  );
};

export default PaymentSupport;
