import BlogCard from "@/components/shared/blog-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

const BlogLandingHome = () => {
  return (
    <>
      <div className=" relative z-30 container py-14 xl:py-28 items-center grid lg:grid-cols-2 gap-8">
        <div className="flex xl:max-w-[560px] flex-col justify-between">
          <div className="  space-y-4">
            <h2 className="title">Latest Articles</h2>
            <p className=" text-base xl:text-xl font-normal tracking-wide">
              Office ipsum you must be muted. Domains low would define nobody
              socialize idea.
            </p>
          </div>
          <div className="  pt-12 space-y-5 xl:space-y-7">
            <div className="  space-y-2">
              <h4 className=" text-base xl:text-xl font-bold tracking-wide">
                Join the Mindgrasp AI Newsletter!
              </h4>
              <p className="text-sm xl:text-base font-normal">
                Stay ahead of the curve with Mindgrasp AI’s cutting-edge
                insights, study tips, and educational resources.
              </p>
            </div>
            <form className=" flex items-center gap-3">
              <input
                type="text"
                className="  w-full focus:outline-none  h-12 px-5 bg-white shadow-smoothness rounded-full text-sm xl:text-base  font-normal text-skin-dark-70"
                placeholder="Enter email"
                required
              />
              <Button className=" h-12">Subscribe</Button>
            </form>
            <div className="flex items-center gap-4">
              <h3 className=" text-base xl:text-xl font-medium  tracking-wide">
                Follow us on:{" "}
              </h3>
              <ul className=" inline-flex items-center gap-4">
                <Link href={"/"} target="_blank">
                  <FaTwitter className=" w-6 h-6 text-skin-blue" />
                </Link>
                <Link href={"/"} target="_blank">
                  <FaYoutube className=" w-6 h-6 text-skin-blue" />
                </Link>{" "}
                <Link href={"/"} target="_blank">
                  <FaInstagram className=" w-6 h-6 text-skin-blue" />
                </Link>{" "}
                <Link href={"/"} target="_blank">
                  <FaLinkedin className=" w-6 h-6 text-skin-blue" />
                </Link>
              </ul>
            </div>
          </div>
        </div>
        <BlogCard
          imageSrc="/images/blog.png"
          imageAlt="Blog Post"
          categories={["Secretary Training", "Meetings"]}
          title="Is Legal Administration Assistant Training Worth It?"
          authorName="Sarah Matlack"
          authorAvatarSrc="https://github.com/shadcn.png"
          authorAvatarAlt="Author Avatar"
          date="Nov 26, 2023"
        />
      </div>
      <div
        style={{
          background: "rgba(67, 187, 248, 0.15)",
        }}
        className=" z-20 absolute left-0 xl:-left-[10%] rounded-full blur-[250px] 
         top-[35%] xl:top-[18%] bg-[]  xl:w-[950px] xl:h-[950px] w-[400px] h-[400px]"
      />
      <div
        style={{
          background: "rgba(157, 97, 255, 0.15)",
        }}
        className=" z-20 absolute  right-0 rounded-full blur-[250px]  top-[0%] bg-[]  xl:w-[950px] xl:h-[950px] w-[400px] h-[400px]"
      ></div>
    </>
  );
};

export default BlogLandingHome;
