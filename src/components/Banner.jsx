import Image from "next/image";

export default function Banner() {
  return (
    <Image
      src="/minibanner.png"
      alt="Banner"
      width={1920}
      height={1080}
      priority
      className="w-screen h-auto object-cover"
    />
  );
}
