import Link from "next/link";
import React from "react";

function AboutPage() {
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <div>
        <h1>About page</h1>
        <Link href={"/"}>
          <button>Go back</button>
        </Link>
      </div>
    </div>
  );
}

export default AboutPage;
