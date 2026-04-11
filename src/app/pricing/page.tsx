import React from "react";
import Breadcrumb from "@/global/Breadcrumb";
import Pricing from "../../components/pages/Pricing";

export default function AboutPage() {
  return (
    <>
      <Breadcrumb serviceTitle="Pricing Plan"
        bgImageUrl="/images/services_bredcrumb.jpg" />
      <Pricing />

    </>
  );
}

