import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
export default function Frame({children}) {
  return (
    <div className="pt-14">
      <Navbar />
        {children}
      <Footer/>
    </div>
  )
}
