"use client";
import { useState } from "react";
import IntroPage from "../components/IntroPage";
import HomePage from "./Home/page";

const Page = () => {
  const [showIntroPage, setShowIntroPage] = useState(true);
  return (
    <>
      <div className="-z-10 absolute">
        <HomePage />
      </div>
      {showIntroPage && <IntroPage setShowIntroPage={setShowIntroPage} />}
    </>
  );
};

export default Page;
