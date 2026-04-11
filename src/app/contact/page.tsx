import Contact from "../../components/pages/Contact";
import Breadcrumb from "@/global/Breadcrumb";
import React from "react";

export default function ContactPage() {
  return (
    <>
      <div className="min-h-screen bg-pink-200 overflow-x-hidden">
        <Breadcrumb serviceTitle="Contact Us"
          bgImageUrl="/images/contact_bg.jpeg" />
        <div className=" py-6">
          <Contact />
        </div>
      </div>
    </>
  );
}
