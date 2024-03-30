import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import {
  FaDiscord,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const BlogPageDetailsHero = () => {
  return (
    <div className=" py-16 sm:py-28 bg-primary flex items-center justify-center">
      <div className="container grid xl:grid-cols-2 xl:gap-x-10 gap-y-10 xl:gap-y-0">
        <div className="  space-y-6">
          <div className=" flex items-center gap-3">
            <Button
              variant={"secondary"}
              className=" rounded-[16px]  h-12 text-g1"
            >
              <span className="bg-clip-text text-base font-medium bg-primary">
                ADHD
              </span>
            </Button>
            <Button
              variant={"secondary"}
              className=" rounded-[16px]  h-12 text-g1"
            >
              <span className="bg-clip-text text-base font-medium bg-primary">
                Meetings
              </span>
            </Button>
          </div>
          <h2 className=" max-w-[605px] text-3xl leading-[130%] font-black text-white tracking-[-0.72px] lg:text-4xl">
            How To Get Good Grades With ADHD
          </h2>
          <div className=" space-y-1">
            <h4 className=" text-xl text-white font-semibold">Sarah Matlack</h4>
            <h6 className=" text-base text-white">Jan 5, 2024</h6>
          </div>
          <ul className=" pt-3 flex items-center gap-4">
            <li>
              <Link href={"/"} target="_blank">
                <FaTwitter className=" w-[40px] h-[40px] text-white transition-all duration-500 hover:text-skin-blue" />
              </Link>
            </li>
            <li>
              <Link href={"/"} target="_blank">
                <FaYoutube className=" w-[40px] h-[40px] text-white transition-all duration-500 hover:text-skin-blue" />
              </Link>
            </li>{" "}
            <li>
              <Link href={"/"} target="_blank">
                <FaInstagram className=" w-[40px] h-[40px] text-white transition-all duration-500 hover:text-skin-blue" />
              </Link>
            </li>{" "}
            <li>
              <Link href={"/"} target="_blank">
                <FaLinkedin className=" w-[40px] h-[40px] text-white transition-all duration-500 hover:text-skin-blue" />
              </Link>
            </li>
            <li>
              <Link href={"/"} target="_blank">
                <FaDiscord className=" w-[40px] h-[40px] text-white transition-all duration-500 hover:text-skin-blue" />
              </Link>
            </li>
          </ul>
        </div>
        <div className=" w-full h-full">
          <Image
            src={"/images/blog_details_hero.webp"}
            alt="vlodvn"
            width={690}
            height={440}
            className=" w-full h-full object-cover block mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default BlogPageDetailsHero;
