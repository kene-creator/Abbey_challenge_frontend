import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/footer";
import bank from "../../assets/images/bank.jpeg";

export default function Homepage() {
  return (
    <div>
      <div className="sticky top-0 z-20">
        <Navbar />
      </div>
      <div className="flex items-center justify-center">
        <img src={bank} alt="bank building" />
      </div>
      <div className="bg-[#F6F7F9]"></div>
      <Footer />
    </div>
  );
}
