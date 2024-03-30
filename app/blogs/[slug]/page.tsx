import BlogPageDetailsHero from "@/components/pages/blog/blog-details/hero";
import BlogDetailsSocal from "@/components/pages/blog/blog-details/social-media";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { IoBook } from "react-icons/io5";

const BlogPageDetails = () => {
  return (
    <div className=" space-y-10 pb-20">
      <BlogPageDetailsHero />
      <div className=" container flex flex-col lg:flex-row gap-6   xl:gap-24 justify-between">
        <div className=" space-y-6 basis-full order-last lg:order-first lg:max-w-[785px] lg:basis-[70%]">
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
                className=" w-full  object-cover mx-auto block"
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
                    <ul className=" pt-2 list-disc list-inside">
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
          <div className=" pt-6">
            <div>
              <h3 className="">
                ADHD Good Grades: Unlocking Academic Success with Mindgrasp AI
              </h3>
              <p className=" pt-[26px]">
                Students with ADHD face unique challenges in the academic world.
                However, Mindgrasp AI offers several features that specifically
                cater to these needs, ensuring that good grades are within
                reach. Here’s how:
              </p>
            </div>
            <ul className=" space-y-2 list-disc  list-outside pt-8">
              <li>
                <b>Customized Summaries and Notes</b>
              </li>
              <li>
                Mindgrasp AI generates concise summaries and detailed notes from
                various materials like textbooks, lecture slides, and videos.
              </li>
              <li>
                For students with ADHD, this means less time spent sifting
                through dense material and more focus on key concepts. 
              </li>
              <li>
                It’s like having a personalized study guide that highlights
                what’s most important.
              </li>
              <li>
                <b>Interactive Flashcards</b>
              </li>
              <li>Turn any topic into engaging, interactive flashcards.</li>
              <li>
                These flashcards help in retaining information through active
                recall and spaced repetition, essential techniques for ADHD
                learners. 
              </li>
              <li>They make studying less overwhelming and more manageable.</li>
              <li>
                <b>Focus-Enhancing Study Guides</b>
              </li>
              <li>
                Create tailored study guides that match your learning style and
                needs.
              </li>
              <li>
                Whether you’re a visual learner or need things broken down into
                smaller chunks, Mindgrasp’s AI adapts to your preferences,
                helping maintain focus and understanding.
              </li>
              <li>
                <b>Document-Specific Q&A Feature</b>
              </li>
              <li>
                Ask any question and get answers based on your submitted
                documents.
              </li>
              <li>
                This feature acts like a private tutor, clarifying doubts and
                reinforcing learning, especially useful for ADHD students who
                may need extra help understanding complex topics.
              </li>
            </ul>
            <div className=" pt-9">
              <>
                <Image
                  className=" w-full"
                  src={"/images/post/3.png"}
                  alt="dfkjvndkjfdnkfj"
                  height={337}
                  width={700}
                />
              </>
            </div>
            <p className=" pt-10">
              Mindgrasp AI’s unique approach to learning is particularly
              beneficial for students with ADHD. The platform’s ability to break
              down complex information into digestible parts, offer engaging
              study methods, and provide personalized support makes it an
              invaluable tool for achieving academic success. With Mindgrasp,
              ADHD doesn’t have to be an obstacle to good grades; it’s an
              opportunity to learn in a way that suits your unique brain.
            </p>
            <div className=" py-16">
              <div className=" bg-[#F9F8FF] relative overflow-hidden rounded-[12px]">
                <div className=" space-y-4 py-4 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={49}
                    height={38}
                    className=" block mx-auto"
                    viewBox="0 0 49 38"
                    fill="none"
                  >
                    <path
                      d="M22.808 9.41633C22.808 14.9092 20.8953 20.2059 17.0699 25.3065C13.1464 30.5051 7.80063 34.7228 1.03261 37.9597L0.296955 35.7528C4.80897 33.2025 8.48724 30.2108 11.3318 26.7778C14.1763 23.4428 15.7457 19.9607 16.04 16.3315C14.7648 17.5085 13.4406 18.4404 12.0674 19.127C10.6942 19.8136 9.27194 20.1569 7.80063 20.1569C5.93698 20.1569 4.56376 19.6174 3.68097 18.5384C2.7001 17.4595 2.20966 15.9882 2.20966 14.1245C2.20966 11.8685 2.84723 9.66155 4.12236 7.50363C5.29941 5.34571 6.86881 3.5311 8.83055 2.05979C10.7923 0.68657 12.9012 -3.74622e-05 15.1572 -3.72649e-05C17.7074 -3.7042e-05 19.6201 0.784658 20.8953 2.35405C22.1704 4.02153 22.808 6.37563 22.808 9.41633ZM48.703 9.41634C48.703 14.9092 46.7903 20.2059 42.9649 25.3065C39.0414 30.5051 33.6957 34.7228 26.9276 37.9597L26.192 35.7528C30.704 33.2025 34.3823 30.2108 37.2268 26.7778C40.0713 23.4428 41.6407 19.9607 41.935 16.3315C40.7579 17.5085 39.4828 18.4404 38.1096 19.127C36.6383 19.8136 35.167 20.1569 33.6957 20.1569C31.9301 20.1569 30.5569 19.6174 29.576 18.5385C28.5951 17.4595 28.1047 15.9882 28.1047 14.1245C28.1047 11.8685 28.7423 9.66155 30.0174 7.50363C31.1944 5.34572 32.7638 3.5311 34.7256 2.05979C36.6873 0.686572 38.7962 -3.51984e-05 41.0522 -3.50011e-05C43.6025 -3.47782e-05 45.5152 0.78466 46.7903 2.35406C48.0654 4.02153 48.703 6.37563 48.703 9.41634Z"
                      fill="url(#paint0_linear_0_1299)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_0_1299"
                        x1="1.12739"
                        y1="37.9597"
                        x2="36.4338"
                        y2="-8.66247"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#AB57FF" />
                        <stop offset="0.4823" stopColor="#7180FE" />
                        <stop offset={1} stopColor="#2ED5F6" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <q>
                    Upload everything from powerpoint&apos;s to books or videos
                    and generate anything from summaries to notes, flash cards
                    and quizzes.
                  </q>
                </div>
                <div
                  className=" h-[15px] "
                  style={{
                    backgroundImage:
                      "linear-gradient(196deg, #AB57FF -59.3%, #7180FE 17.77%, #2ED5F6 100.51%)",
                  }}
                ></div>
              </div>
            </div>
            <div className="">
              <Image
                src={"/images/post/4.png"}
                alt="blog post"
                width={783}
                height={700}
                className=" w-full  object-cover mx-auto block"
              />
              <i className=" text-sm xl:text-xl text-center block pt-1">
                how to get good grades
              </i>
            </div>
          </div>
          <div className="">
            <div className=" space-y-7">
              <h3>
                ADHD Good Grades: Unlocking Academic Success with Mindgrasp AI
              </h3>
              <p>
                Essays can be daunting, but Mindgrasp AI transforms them into
                opportunities for success. Here’s how it helps you ace your
                essays:
              </p>
            </div>
            <ul className=" space-y-2 list-disc  list-outside pt-8">
              <li>
                <b>Efficient Research and Organization </b>
              </li>
              <li>
                Mindgrasp AI quickly analyzes and summarizes key information
                from a wide range of sources.
              </li>
              <li>
                It organizes these insights, helping you build a strong
                foundation for your essay. This means you spend less time on
                research and more on crafting your argument.
              </li>

              <li>
                <b>Idea Generation and Outline Creation </b>
              </li>
              <li>
                Generate creative ideas and structured outlines for your essay.
              </li>
              <li>
                Mindgrasp AI helps you develop compelling thesis statements and
                logically organized outlines, ensuring your essay has a clear
                and persuasive structure.
              </li>

              <li>
                <b>Drafting Assistance and Language Improvement</b>
              </li>
              <li>Enhance your writing style and grammar.</li>
              <li>
                The AI suggests improvements in language, style, and grammar,
                making your essay more coherent and engaging. It’s like having
                an expert editor guiding your writing process.
              </li>
              <li>
                <b>Citation and Plagiarism Checker</b>
              </li>
              <li>Ensure academic integrity and proper referencing.</li>
              <li>
                The tool checks your essay for plagiarism and assists with
                accurate citation, crucial for maintaining credibility and
                avoiding academic misconduct.
              </li>
            </ul>
            <p className=" pt-9">
              Mindgrasp AI is more than just a tool; it’s a partner in your
              academic journey. By assisting in research, organization, writing,
              and ensuring academic integrity, it paves the way for you to excel
              in essay writing, turning a challenging task into a showcase of
              your knowledge and skills.
            </p>
            <div className="">
              <Image
                src={"/images/post/5.png"}
                alt="blog post"
                width={783}
                height={700}
                className=" w-full  object-cover mx-auto block"
              />
              <i className=" text-sm xl:text-xl text-center block pt-1">
                how to get good grades
              </i>
            </div>
          </div>
          <div className="">
            <div className=" space-y-7">
              <h3>
                ADHD with Good Grades: Focusing Better with Mindgrasp&apos;s
                Bionic Reader Feature
              </h3>
              <p>
                Mindgrasp AI introduces an innovative feature – the Bionic
                Reader – specifically designed to aid individuals with ADHD in
                maintaining focus and comprehension while reading. Here’s how
                this feature enhances the learning experience:
              </p>
            </div>
            <ul className=" space-y-2 list-disc  list-outside pt-8">
              <li>
                <b>Enhanced Focus on Keywords </b>
              </li>
              <li>
                Bionic Reader strategically bolds the first part of words.
              </li>
              <li>
                This unique approach helps the brain to focus better, guiding
                the eyes through the text. 
              </li>
              <li>
                For ADHD students, this means less distraction and more
                efficient reading.
              </li>
              <li>
                <b>Improved Reading Comprehension </b>
              </li>
              <li>
                By emphasizing critical parts of words, comprehension is
                enhanced.
              </li>
              <li>
                The Bionic Reader makes it easier to understand and retain the
                information, especially beneficial for those who struggle with
                maintaining attention on dense or lengthy texts.
              </li>

              <li>
                <b>Customizable Reading Experience</b>
              </li>
              <li>Adjust the level of bolding to suit individual needs.</li>
              <li>
                Mindgrasp AI allows users to customize the intensity of the
                Bionic Reader feature, making it a flexible tool for different
                reading preferences and requirements.
              </li>
              <li>
                <b>Integration with Summaries and Notes</b>
              </li>
              <li>Apply the Bionic Reader to all generated materials.</li>
              <li>
                Whether it’s a summary, detailed notes, or a study guide, the
                Bionic Reader feature can be applied, ensuring a consistent and
                focused reading experience across all study materials.
              </li>
            </ul>
            <p className=" pt-9">
              The Bionic Reader feature in Mindgrasp AI is a game-changer for
              students with ADHD. It not only assists in maintaining focus while
              reading but also significantly improves the comprehension and
              retention of information, paving the way for academic success and
              good grades.
            </p>
            <div className="">
              <Image
                src={"/images/post/7.png"}
                alt="blog post"
                width={783}
                height={700}
                className=" w-full  object-cover mx-auto block"
              />
              <i className=" text-sm xl:text-xl text-center block pt-1">
                adhd with good grades
              </i>
            </div>
          </div>
          <div className="">
            <div className=" space-y-7">
              <h3>
                ADHD But Good Grades: Mindgrasp&apos;s Universal Learning
                Support for Neurodiversity
              </h3>
              <p>
                Mindgrasp AI is designed to cater to the diverse needs of
                neurodiverse individuals, ensuring that everyone, including
                those with ADHD, can achieve academic excellence. Here’s how it
                supports varied learning styles and needs:
              </p>
            </div>
            <ul className=" space-y-2 list-disc  list-outside pt-8">
              <li>
                <b>Adaptive Learning Paths </b>
              </li>
              <li>
                Personalized learning based on individual strengths and
                challenges.
              </li>
              <li>
                Mindgrasp AI assesses your learning style and tailors its
                approach accordingly. 
              </li>
              <li>
                Whether you need visual aids, simplified explanations, or
                step-by-step guidance, it adapts to fit your unique way of
                learning.
              </li>
              <li>
                <b>Engaging, Multi-Sensory Content </b>
              </li>
              <li>
                Offers a variety of content formats to suit different sensory
                preferences.
              </li>
              <li>
                From audio summaries to visually rich flashcards, Mindgrasp
                ensures that learning is not just textual but engages multiple
                senses. 
              </li>
              <li>
                This multisensory approach is key for neurodiverse learners,
                making material more accessible and memorable.
              </li>
              <li>
                <b>Interactive Learning Tools</b>
              </li>
              <li>Facilitates active engagement with the material.</li>
              <li>
                Interactive quizzes, flashcards, and practice questions help
                maintain focus and reinforce learning. 
              </li>
              <li>
                These tools are particularly beneficial for ADHD learners, who
                often thrive with hands-on, interactive learning experiences.
              </li>
              <li>
                <b>Pacing and Time Management Features</b>
              </li>
              <li>Assists in managing study time effectively.</li>
              <li>
                Mindgrasp AI includes features that help break down study
                sessions into manageable chunks, allowing for breaks and varied
                activities. 
              </li>
              <li>
                This is crucial for ADHD learners, who may struggle with
                attention span and time management.
              </li>
            </ul>
            <p className=" pt-9">
              Mindgrasp AI’s inclusive design makes it a potent tool for
              neurodiverse learners. By offering adaptive learning paths,
              multi-sensory content, interactive tools, and pacing features, it
              ensures that individuals with ADHD can not only learn effectively
              but excel academically, turning potential challenges into
              opportunities for success.
            </p>
            <div className="">
              <Image
                src={"/images/post/8.png"}
                alt="blog post"
                width={783}
                height={700}
                className=" w-full  object-cover mx-auto block"
              />
              <i className=" text-sm xl:text-xl text-center block pt-1">
                adhd but good grades
              </i>
            </div>
          </div>
          <div className="">
            <div className=" space-y-7">
              <h3>
                Don&apos;t Let Your Neurodiversity Hold You Back - Get Good
                Grades With AI Today!
              </h3>
              <p>
                Mindgrasp AI is designed to cater to the diverse needs of
                neurodiverse individuals, ensuring that everyone, including
                those with ADHD, can achieve academic excellence. Here’s how it
                supports varied learning styles and needs:
              </p>
            </div>
            <ul className=" space-y-2 list-disc  list-outside pt-8">
              <li>
                Mindgrasp AI’s <b>Customized Summaries and Notes</b> streamline
                learning for ADHD students.
              </li>
              <li>
                <b>Interactive Flashcards</b> and 
                <b>Focus-Enhancing Study Guides </b>adapt to individual learning
                styles.
              </li>
              <li>
                The <b>Document-Specific Q&A</b> Feature acts as a personalized
                tutor for complex topics.
              </li>
              <li>
                <b>Efficient Research and Organization</b> tools simplify essay
                writing.
              </li>
              <li>
                The <b>Bionic Reader</b> feature enhances focus and
                comprehension in reading.
              </li>
              <li>
                <b>Adaptive Learning Paths</b> and <b>Interactive Learning</b>
                Tools support diverse learning needs.
              </li>
            </ul>
            <p className=" pt-9">
              Mindgrasp AI is more than just a study aid; it’s a comprehensive
              solution for academic challenges, especially for those with ADHD
              and other neurodiverse conditions. Its features, from tailored
              summaries to engaging learning tools, are designed to ensure that
              every student can grasp and retain information effectively.
              Whether it’s acing essays, enhancing reading comprehension, or
              adapting to individual learning styles, Mindgrasp AI has got you
              covered.
            </p>
            <p className=" pt-4">
              Embrace the power of AI to transform your academic journey. With
              Mindgrasp, you’re not just overcoming the barriers posed by
              neurodiversity; you’re turning them into stepping stones for
              success. So why wait? Unlock your true academic potential with
              Mindgrasp AI today!
            </p>
            <div className=" pt-6">
              <Button className=" h-12 w-full flex rounded">Student</Button>
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
