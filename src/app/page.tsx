"use client";
import { useState, useEffect } from "react";
import IntroPage from "../components/IntroPage";
import HomePage from "./Home/page";

const Page = () => {
  const [showIntroPage, setShowIntroPage] = useState(true);
  useEffect(() => {
    function disableScroll() {
      document.body.style.overflow = "hidden";
    }
    disableScroll();
  }, []);
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
