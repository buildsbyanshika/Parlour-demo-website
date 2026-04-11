import React from "react";
import Breadcrumb from "@/global/Breadcrumb";
import ServicesList from "../../components/pages/ServiceList";
import ChooseUs from "@/components/ChooseUs";
import OurStory from "@/components/OurStory";

export default function AboutPage() {
  return (
    <div >
          <Breadcrumb serviceTitle="About"
            bgImageUrl="/images/services_bredcrumb.jpg" />
            <OurStory/>
          <ServicesList />
          <ChooseUs/>
        </div>
  );
}

