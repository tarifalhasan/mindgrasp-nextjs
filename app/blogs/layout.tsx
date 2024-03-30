import MainHeader from "@/components/common/header";
import { ReactNode } from "react";

const BlogLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <MainHeader />
      {children}
    </>
  );
};

export default BlogLayout;
