import MainHeader from "@/components/common/header";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <MainHeader />
      <Link href={"/blogs"}>Go Blogs</Link>
    </div>
  );
};

export default page;
