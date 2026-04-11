import React from "react";
import Breadcrumb from "@/global/Breadcrumb";
import ServicesList from "@/components/pages/ServiceList";

export default function ServicesPage() {
  return (
    <>
      <Breadcrumb serviceTitle="Services"
        bgImageUrl="/images/services_bredcrumb.jpg" />
      <ServicesList />
    </>
  );
}
