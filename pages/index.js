import React from "react";
import Features from "@/components/templates/Features";
import Story from "@/components/templates/Story";
import Card from "@/components/templates/Card";
import Gallery from "@/components/templates/Gallery";
import Footer from "@/components/modules/footer/Footer";

function index() {
  return (
    <>

      <Features />
      <Story />
      <Card />
      <Gallery/>
      <Footer/>
    </>
  );
}

export default index;
