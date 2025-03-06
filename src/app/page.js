import Banner from "@/components/Banner";
import Navbar from "../components/Navbar"
import Intro from "@/components/Intro";
import Superiority from "@/components/Superiority";
import Service from "@/components/service";
import Product from "@/components/product";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="pt-14">
      <Navbar />
      <Banner />
      <Intro />
      <Superiority />
      <Service/> 
      <Product/>
      <Footer/>
    </div>
  );
}
