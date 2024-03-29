import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import React from "react";

interface BlogCardProps {
  imageSrc: string;
  imageAlt: string;
  categories: string[];
  title: string;
  authorName: string;
  authorAvatarSrc: string;
  authorAvatarAlt: string;
  date: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  imageSrc,
  imageAlt,
  categories,
  title,
  authorName,
  authorAvatarSrc,
  authorAvatarAlt,
  date,
}) => {
  return (
    <div className="rounded-20 relative overflow-hidden">
      <div>
        <Image
          className="h-[262px] w-full object-cover"
          src={imageSrc}
          alt={imageAlt}
          width={671}
          height={262}
          quality={80}
        />
      </div>
      <div className="bg-white p-4 space-y-4">
        <ul className="flex flex-wrap items-center gap-3">
          {categories.map((category, index) => (
            <li
              key={index}
              className="bg-[#CDE4FF] py-[6px] px-2 rounded-[6px]"
            >
              <span className="text-skin-blue text-sm font-medium tracking-wide">
                {category}
              </span>
            </li>
          ))}
        </ul>
        <h2 className="text-xl h-[80px] lg:text-2xl font-bold leading-[140%] tracking-wide">
          {title.slice(0, 34)}...
        </h2>
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center gap-2">
            <Avatar>
              <AvatarImage src={authorAvatarSrc} alt={authorAvatarAlt} />
              <AvatarFallback>{authorName.charAt(0)}</AvatarFallback>
            </Avatar>
            <h4 className="text-sm  xl:text-base font-medium text-skin-dark-70">
              {authorName}
            </h4>
          </div>
          <div>
            <h4 className="text-sm xl:text-base font-medium text-skin-dark-70">
              {date}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
