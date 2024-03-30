import BlogPageDetailsHero from "@/components/pages/blog/blog-details/hero";
import BlogDetailsSocal from "@/components/pages/blog/blog-details/social-media";
import Image from "next/image";
import { IoBook } from "react-icons/io5";

const BlogPageDetails = () => {
  return (
    <div className=" space-y-10 pb-20">
      <BlogPageDetailsHero />
      <div className=" container flex flex-col lg:flex-row gap-6   xl:gap-24 justify-between">
        <div className=" space-y-6 basis-full order-last lg:order-first lg:basis-[70%]">
          <div className=" space-y-8">
            <Image
              src={"/images/post/1.png"}
              alt="blog post"
              width={783}
              height={394}
              className=" w-full h-[394px] object-cover mx-auto block"
            />
            <p className=" text-base lg:text-xl font-normal leading-[160%]">
              Getting good grades can be challenging, especially if you have
              ADHD. But, with the right tools, it’s more than possible! AI
              technology, like Mindgrasp, is here to help you excel. Whether
              you’re a student or a professional, this article will show you how
              AI can turn your ADHD into an advantage for achieving top grades.
            </p>
          </div>
          <div className=" mt-10 text-white bg-hoverMain text-center py-5  space-x-3 rounded-[12px]">
            <p className=" text-sm lg:text-xl font-normal text-center">
              Supercharge your learning and teaching with AI!
            </p>
            <p className=" text-sm lg:text-xl font-normal text-center">
              Click here to experience to check out Mindgrap&apos;s free trial
            </p>
          </div>
          <div>
            <div>
              <h3 className="text-base lg:text-xl font-normal">
                Here’s what we’ll cover:
              </h3>
            </div>
            <ul className="list-decimal list-inside pt-3 space-y-2">
              <li className=" text-base  lg:text-xl font-normal leading-[160%]">
                <b>ADHD Good Grades:</b> Discover how AI tools adapt to your
                unique learning style, making studying more effective.
              </li>
              <li className=" text-base  lg:text-xl font-normal leading-[160%]">
                <b>How to Get Good Grades Essay:</b>  Tips on using AI to
                outline, draft, and refine essays, turning a daunting task into
                a breeze.
              </li>
              <li className=" text-base  lg:text-xl font-normal leading-[160%]">
                <b>ADHD Good Grades:</b> Real-life success stories of
                individuals with ADHD who used AI to boost their grades.
              </li>
              <li className=" text-base  lg:text-xl font-normal leading-[160%]">
                <b>ADHD Good Grades:</b> Strategies to overcome common ADHD
                challenges in academics, using AI support.
              </li>
              <li className=" text-base  lg:text-xl font-normal leading-[160%]">
                <b>Conclusion:</b> Get Good Grades With AI Today! Embrace your
                uniqueness and see how AI can unlock your full potential in the
                classroom.
              </li>
            </ul>
            <p className=" pt-6">
              With AI by your side, ADHD doesn’t have to be a barrier to
              academic success. Let’s dive into how you can achieve the grades
              you’ve always wanted! 
            </p>
            <div className=" pt-12">
              <Image
                src={"/images/post/2.png"}
                alt="blog post"
                width={783}
                height={700}
                className=" w-full h-[594px] object-cover mx-auto block"
              />
              <i className=" text-sm xl:text-xl text-center block pt-1">
                how to get good grades
              </i>
            </div>
            <div className=" pt-5">
              <div className=" bg-[#F3FBFF] shadow-s3 rounded-[16px] px-6 py-4">
                <div className="flex items-start gap-4">
                  <IoBook size={32} />
                  <div>
                    <p className=" text-xl font-semibold max-w-[625px]">
                      To know more about our suite of resources for students,
                      read our other articles:
                    </p>
                    <ul className=" list-item list-inside">
                      <li>Best Reading Tools for ADHD</li>
                      <li>
                        Bionic Reading for ADHD, Dyslexia, and Other
                        Neurodivergents
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" basis-full lg:basis-[30%]">
          <BlogDetailsSocal />
        </div>
      </div>
    </div>
  );
};

export default BlogPageDetails;
