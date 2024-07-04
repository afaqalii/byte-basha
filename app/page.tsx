import Image from "next/image";

export default function Home() {
  return (
    <Image
      src="/assets/logo.jpg"
      alt="Logo"
      width={400}
      height={400}
      priority
    />
  );
}
