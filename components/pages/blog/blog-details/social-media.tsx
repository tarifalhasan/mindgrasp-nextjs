import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { FaDiscord, FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";
const BlogDetailsSocal = () => {
  return (
    <div className=" w-full bg-[#F8F8F8] border  border-[#E8E8E8] rounded-[12px] p-4 xl:p-6 flex flex-col items-center space-y-5 justify-center">
      <div className=" inline-flex items-center gap-1">
        <Image
          src={"/images/Logo.svg"}
          alt="dfdkjfdfnd"
          width={189}
          height={40}
        />
        <h4 className=" text-xl text-black  font-extrabold">Blog</h4>
      </div>
      <div className=" max-w-[70%] block mx-auto  h-[2px] w-full bg-skin-blue"></div>
      <p className=" text-center text-lg font-normal leading-[160%] tracking-[-0.36px]">
        Check out the Mindgrasp blog to learn more about our tool! Everything
        from student use-cases, to how lawyers and medical professionals use AI.
        All that and more is there as we take a deep dive into the future of AI.
      </p>
      <ul className=" pt-3 flex items-center gap-4">
        <li>
          <Link href={"/"} target="_blank">
            <FaInstagram
              size={28}
              className=" text-[#5056EE] transition-all duration-500 hover:text-pink-500"
            />
          </Link>
        </li>{" "}
        <li>
          <Link href={"/"} target="_blank">
            <FaLinkedin
              size={28}
              className=" text-[#5056EE] transition-all duration-500 hover:text-pink-500"
            />
          </Link>
        </li>
        <li>
          <Link href={"/"} target="_blank">
            <FaDiscord
              size={28}
              className=" text-[#5056EE] transition-all duration-500 hover:text-pink-500"
            />
          </Link>
        </li>
        <li>
          <Link href={"/"} target="_blank">
            <FaTiktok
              size={28}
              className=" text-[#5056EE] transition-all duration-500 hover:text-pink-500"
            />
          </Link>
        </li>
      </ul>
      <Button className=" h-12 w-full flex ">Visit Mindgrasp App</Button>
    </div>
  );
};

export default BlogDetailsSocal;
