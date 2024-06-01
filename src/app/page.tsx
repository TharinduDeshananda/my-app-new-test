import Image from "next/image";

export default function Home() {
  const date = new Date();
  return (
    <div className="w-full">Hello Tharindu Deshananda {date.toISOString()}</div>
  );
}

export const revalidate = 0;
