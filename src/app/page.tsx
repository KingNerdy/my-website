"use client"
import styles from "./page.module.css";
import cx from "classnames";
import Image from "next/image";
import { useState } from "react";

interface DefaultPageProps {
  setShowDefaultPage: (arg: boolean) => void;
}

const DefaultPage = ({ setShowDefaultPage }: DefaultPageProps) => {
  const rectArr = [1, 2, 3, 4, 5, 6, 7];
  const [swipe, setSwipe] = useState<boolean>(false);

  const toggleButton = () => {
    setSwipe(true);
    setTimeout(() => {
      setShowDefaultPage(false);
    }, 1000);
  };

  return (
    <div className={cx(styles.bigBox)}>
      {rectArr.map((num, index) => {
        let swipeLeft: boolean = false;
        let swipeRight: boolean = false;
        if (num % 2 === 0) {
          swipeLeft = swipe;
          swipeRight = false;
        } else {
          swipeRight = swipe;
          swipeLeft = false;
        }

        if (num === 3) {
          return (
            <div
              className={cx({
                [styles.rectangle]: true,
                [styles.swipeLeft]: swipeLeft,
                [styles.swipeRight]: swipeRight,
              })}
              key={index}
            >
              <span className={cx(styles.header)}>Hello World!</span>
            </div>
          );
        }
        if (num === 4) {
          return (
            <div
              className={cx({
                [styles.rectangle]: true,
                [styles.swipeLeft]: swipeLeft,
                [styles.swipeRight]: swipeRight,
              })}
              key={index}
            >
              <div className={cx(styles.description)}>
                <div>Ernest here...</div>
              </div>
            </div>
          );
        }
        if (num === 5) {
          return (
            <div
              className={cx({
                [styles.rectangle]: true,
                [styles.swipeLeft]: swipeLeft,
                [styles.swipeRight]: swipeRight,
              })}
              key={index}
            >
              <button onClick={() => toggleButton()}>
                <span>View Docs</span>
                <Image src="/docsIcn.svg" alt="View Docs" width={74} height={74}/>
              </button>
            </div>
          );
        }
        return (
          <div
            className={cx({
              [styles.rectangle]: true,
              [styles.swipeLeft]: swipeLeft,
              [styles.swipeRight]: swipeRight,
            })}
            key={index}
          ></div>
        );
      })}
    </div>
  );
};

export default DefaultPage;
