import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const date = new Date();
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <div>
        <h1>Hello Tharindu Deshananda {date.toISOString()}</h1>
        <Link href={"/about"}>
          <button>to about</button>
        </Link>
      </div>
    </div>
  );
}

// export const revalidate = 0;
