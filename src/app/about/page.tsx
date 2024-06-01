import PostsList from "@/components/PostsList";
import Link from "next/link";
import React, { Suspense } from "react";

function AboutPage() {
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <div>
        <h1>About page</h1>
        <Suspense fallback={<div>Loading....</div>}>
          <PostsList />
        </Suspense>
        <Link href={"/"}>
          <button>Go back</button>
        </Link>
      </div>
    </div>
  );
}
export const revalidate = 5000;
export default AboutPage;
