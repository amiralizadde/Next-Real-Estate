import React from "react";
import Features from "@/components/templates/Features";
import Story from "@/components/templates/Story";
import Card from "@/components/templates/Card";
import Gallery from "@/components/templates/Gallery";
import Footer from "@/components/modules/footer/Footer";
import db from "../data/db.json";
import Home from "@/components/modules/Home";

function index() {
  return (
    <>
      <Features />
      <Story />
      <div className="grid mx-auto  bg-white px-12 mt-12  sm:grid-cols-2 xl:grid-cols-3 gap-6 gap-y-12 child:w-[70vw] sm:child:h-auto sm:child:w-full">
        {db.homes.slice(0,6).map((item) => (
          <Home {...item} />
        ))}
      </div>
      <Gallery />
      <Footer />
    </>
  );
}

export default index;
