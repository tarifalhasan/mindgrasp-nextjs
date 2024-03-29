import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const TopVideos = () => {
  const videos = [
    {
      title: "Is Legal Administration Assistant Training Worth It?",
      id: 1,
      imgSrc: "/images/v1.png",
    },
    {
      title: "Entry Level Resume Summary & The Disadvantages",
      id: 2,
      imgSrc: "/images/v2.png",
    },
    {
      title: "Entry Level Professional Summary & The Advantages",
      id: 3,
      imgSrc: "/images/v3.png",
    },
  ];
  return (
    <>
      <div className=" z-40  pt-5 pb-12 container relative">
        <h2 className=" title py-8">Top Videos</h2>
        <div className=" pt-8 gap-y-12 lg:gap-x-10 grid grid-cols-12">
          <div className=" col-span-12 lg:col-span-8">
            <Image
              width={863}
              height={484}
              className=" w-full h-auto"
              src={"/images/video.png"}
              alt="video"
            />
          </div>
          <div className=" flex flex-col justify-between col-span-12 lg:col-span-4 space-y-4">
            {videos.map((v) => (
              <Link href={"/"} key={v.id} className=" flex items-start gap-4">
                <div className=" h-[85px] lg:h-[110px] basis-[40%]">
                  <Image
                    src={v.imgSrc}
                    className=" w-full h-full"
                    alt={v.title}
                    width={200}
                    height={120}
                  />
                </div>
                <div className=" basis-[60%]">
                  <h2 className=" text-sm lg:text-lg font-bold leading-[140%] tracking-[0.027px] text-black">
                    {v.title}
                  </h2>
                </div>
              </Link>
            ))}

            <Button className=" flex w-full h-12">Watch more</Button>
          </div>
        </div>
      </div>
      <div
        style={{
          background: "rgba(67, 187, 248, 0.15)",
        }}
        className=" z-20 absolute left-0 xl:-left-[10%] rounded-full  
      top-[80%] lg:top-[68%] bg-[]  xl:w-[950px] xl:h-[950px] w-[400px] blur-[250px]  h-[400px]"
      />
      <div
        style={{
          background: "rgba(157, 97, 255, 0.19)",
        }}
        className=" z-20 absolute  right-0 rounded-full  top-[88%] blur-[250px] lg:top-[66%] bg-[]  xl:w-[950px] xl:h-[950px] w-[400px] h-[400px]"
      ></div>
    </>
  );
};

export default TopVideos;
