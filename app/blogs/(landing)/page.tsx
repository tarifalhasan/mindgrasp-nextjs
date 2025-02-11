import BlogPosts from "@/components/pages/blog/landing/blogs";
import BlogLandingHome from "@/components/pages/blog/landing/hero";
import PaymentSupport from "@/components/pages/blog/landing/payment-support";
import TopVideos from "@/components/pages/blog/landing/top-videos";

const blogPosts = [
  {
    id: 1,
    imageSrc: "https://source.unsplash.com/random/800x600/?nature",
    imageAlt: "Nature",
    categories: ["Travel", "Nature"],
    title: "Exploring the Beauty of Nature",
    authorName: "John Doe",
    authorAvatarSrc: "https://source.unsplash.com/random/50x50/?portrait",
    authorAvatarAlt: "John Doe Avatar",
    date: "March 28, 2024",
  },
  {
    id: 2,
    imageSrc: "https://source.unsplash.com/random/800x600/?technology",
    imageAlt: "Technology",
    categories: ["Technology", "Innovation"],
    title: "The Latest Technological Innovations",
    authorName: "Jane Smith",
    authorAvatarSrc: "https://source.unsplash.com/random/50x50/?portrait",
    authorAvatarAlt: "Jane Smith Avatar",
    date: "March 27, 2024",
  },
  {
    id: 3,
    imageSrc: "https://source.unsplash.com/random/800x600/?business",
    imageAlt: "Business",
    categories: ["Business", "Finance"],
    title: "Strategies for Business Success",
    authorName: "Alice Johnson",
    authorAvatarSrc: "https://source.unsplash.com/random/50x50/?portrait",
    authorAvatarAlt: "Alice Johnson Avatar",
    date: "March 26, 2024",
  },
  {
    id: 4,
    imageSrc: "https://source.unsplash.com/random/800x600/?food",
    imageAlt: "Food",
    categories: ["Food", "Cuisine"],
    title: "The Art of Cooking Delicious Meals",
    authorName: "Michael Brown",
    authorAvatarSrc: "https://source.unsplash.com/random/50x50/?portrait",
    authorAvatarAlt: "Michael Brown Avatar",
    date: "March 25, 2024",
  },
  {
    id: 5,
    imageSrc: "https://source.unsplash.com/random/800x600/?architecture",
    imageAlt: "Architecture",
    categories: ["Architecture", "Design"],
    title: "Discovering Architectural Marvels",
    authorName: "Emily Wilson",
    authorAvatarSrc: "https://source.unsplash.com/random/50x50/?portrait",
    authorAvatarAlt: "Emily Wilson Avatar",
    date: "March 24, 2024",
  },
];
export default function Home() {
  return (
    <>
      <div className=" relative overflow-hidden ">
        <BlogLandingHome />

        <BlogPosts posts={blogPosts} />
        <TopVideos />
        <PaymentSupport />
      </div>
    </>
  );
}
