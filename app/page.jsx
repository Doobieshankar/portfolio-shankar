//import Home from "@/components/Home";
import React from "react";
import { home } from "@/data/heroData";

const Home = React.lazy(() => import("@/components/Home"));

const page = () => {
  return (
    <>
      <Home home={home} />
    </>
  );
};

export default page;
