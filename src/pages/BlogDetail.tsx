"use client"

import React from "react";
import { BlogItem } from "@/data/blogdetail";
import Image from "next/image";

interface BlogDetailProps {
  blog: BlogItem;
  onSetBreadcrumb?: (data: { title: string; image: string }) => void;
}

export default function BlogDetail({ blog, onSetBreadcrumb }: BlogDetailProps) {
  React.useEffect(() => {
    if (onSetBreadcrumb) {
      onSetBreadcrumb({ title: blog.title, image: blog.breadcrumbBg });
    }
  }, [blog, onSetBreadcrumb]);

  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-8 py-10">
      <div className="w-full aspect-[16/9] mb-8 rounded-3xl overflow-hidden bg-gray-100">
        <Image
          src={blog.image}
          alt={blog.title}
          className="object-cover w-full h-full"
        />
      </div>
      <h1 className="text-3xl sm:text-4xl font-bold text-pink-600 mb-6">
        {blog.title}
      </h1>
      <article className="prose prose-pink prose-lg text-gray-700 mb-8">
        <p>{blog.content}</p>
      </article>
    </section>
  );
}
