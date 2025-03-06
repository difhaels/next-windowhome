import Banner from "@/components/Banner";
import Intro from "@/components/Intro";
import Superiority from "@/components/Superiority";
import Service from "@/components/service";
import Product from "@/components/product";

import Frame from "@/components/Frame";

export default function Home() {
  return (
    <Frame>
      <Banner />
      <Intro />
      <Superiority />
      <Service />
      <Product />
    </Frame>
  );
}
