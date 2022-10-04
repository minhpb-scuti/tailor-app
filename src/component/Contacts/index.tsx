import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";

const Index = () => {
  const location = useLocation();
  return (
    <div>
      <Header children={<></>} pathname={location.pathname} />
      <Footer />
    </div>
  );
};

export default Index;
