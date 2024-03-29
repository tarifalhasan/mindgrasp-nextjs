"use client";
import BlogCard from "@/components/shared/blog-card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const BlogPosts = ({ posts }: { posts: any[] }) => {
  const initialVisiblePosts = 4; // Initial number of posts to display
  const [visiblePosts, setVisiblePosts] = useState(initialVisiblePosts);
  const [showAllPosts, setShowAllPosts] = useState(false); // Track whether all posts are currently displayed

  const loadMorePosts = () => {
    setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + 5); // Increase the number of visible posts by 5
  };

  const showLessPosts = () => {
    setVisiblePosts(initialVisiblePosts); // Reset the number of visible posts to the initial value
    setShowAllPosts(false); // Set showAllPosts back to false
  };

  return (
    <div className="space-y-6 relative ">
      <div className="container relative z-40 py-4 grid sm:grid-cols-2 xl:grid-cols-3 gap-12">
        {posts.slice(0, visiblePosts).map((post) => (
          <BlogCard
            key={post.id}
            imageSrc={post.imageSrc}
            imageAlt={post.imageAlt}
            categories={post.categories}
            title={post.title}
            authorName={post.authorName}
            authorAvatarSrc={post.authorAvatarSrc}
            authorAvatarAlt={post.authorAvatarAlt}
            date={post.date}
          />
        ))}
      </div>

      <div className="flex relative z-40 justify-center pb-9">
        {!showAllPosts && visiblePosts < posts.length ? (
          <Button className="h-12 font-bold" onClick={loadMorePosts}>
            Load More
          </Button>
        ) : (
          visiblePosts > initialVisiblePosts && (
            <Button className="h-12 font-bold" onClick={showLessPosts}>
              Show Less
            </Button>
          )
        )}
      </div>
      <div
        style={{
          background: "rgba(67, 187, 248, 0.15)",
        }}
        className=" z-20 absolute left-0 xl:-left-[15%] rounded-full  
         top-[35%] xl:top-[18%]  blur-[249.99px]  xl:w-[850px] xl:h-[850px] w-[400px] h-[400px]"
      />
      <div
        style={{
          background: "rgba(157, 97, 255, 0.15)",
        }}
        className=" z-20 absolute  right-[-15%] rounded-full   top-[12%]  blur-[249.99px]  xl:w-[950px] xl:h-[950px] w-[400px] h-[400px]"
      ></div>
    </div>
  );
};

export default BlogPosts;
