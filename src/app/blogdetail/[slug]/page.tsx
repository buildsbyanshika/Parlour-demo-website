import { blogData } from "@/data/blogdetail";
import BlogDetail from "@/pages/BlogDetail";
import Breadcrumb from "../../../global/Breadcrumb";
import { notFound } from "next/navigation";
import React from "react";
import BackButton from "@/components/BackButton";

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = blogData.find((b) => b.slug === slug);
  if (!blog) {
    return notFound();
  }

  return (
    <>
      <Breadcrumb
        serviceTitle={blog.title}
        bgImageUrl={blog.breadcrumbBg}
      />
      <BlogDetail blog={blog} />
      <div className="mx-auto max-w-3xl px-4 md:px-8 ">
      <BackButton/>
    </div>
    </>
  );
}
