"use client";
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getQuote } from "./getQuote";
import { useEffect, useState } from "react";

const Home = () => {
  type quoteStructure = {
    quote: string;
    author: string;
  };

  const [quotes, setQuotes] = useState<quoteStructure[]>([
    {
      quote: "Trouble is only opportunity in work clothes",
      author: "Henry J. Kaiser",
    },
    {
      quote: "You are never a loser until you quit trying",
      author: "Mike Ditka",
    },
    {
      quote:
        "Chance is always powerful. Let your hook be always cast; in the pool where you least expect it, there will be a fish.",
      author: "Ovid",
    },
  ]);

  useEffect(() => {
    // Replace 'https://api.example.com/endpoint' with the actual API endpoint URL
    const apiUrl = "https://api.quotable.io/quotes/random";

    // Define query parameters
    const queryParams = {
      tags: "Famous Quotes|Wisdom",
      limit: "3",
    };

    // Construct the query string from the parameters
    const queryString = new URLSearchParams(queryParams).toString();

    // Append the query string to the API URL
    const apiUrlWithParams = `${apiUrl}?${queryString}`;

    const fetchData = async () => {
      try {
        const response = await fetch(apiUrlWithParams);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        const quotesData: quoteStructure[] = [];
        data.map((value: any) => {
          quotesData.push({
            quote: value.content,
            author: value.author,
          });
        });
        console.log(quotesData);
        setQuotes(quotesData);
      } catch (error) {
        // setError(`Error fetching data: ${error.message}`);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="bg-bgGrey ">
      <Header />
      {/* first text box */}
      <div className="h-screen text-center flex flex-col justify-center font-serif text-2xl p-[20%] font-normal text-textBlack gap-20 tracking-wide leading-loose">
        <p>
          Hi there, I am Ernest Tan. I feel that a lot of us people are too
          caught up with life.
        </p>
        <p>
          Therefore, I have created this website for you: I hope that by sharing
          snippets of the wonderful adventures I have had experienced so far, I
          am able to remind you to{" "}
          <span className="text-textLightBlue">slow down</span>,{" "}
          <span className="text-textOrange">take a break </span> and
          <span className="text-textPink"> enjoy </span> what is around you!
        </p>
      </div>
      {/* Second text box */}
      <div className="h-screen text-center flex flex-col justify-center font-serif text-2xl p-[20%] font-normal text-textBlack gap-20 tracking-wide leading-loose">
        <p>
          I have personally picked quotes for you and you only. (Refresh for
          more!)
        </p>
        <p>Scroll slowly...</p>
      </div>
      {/* Quote 1 */}
      <div className="h-screen text-center flex flex-col justify-center font-serif text-2xl p-[20%] px-[30%] font-normal text-textLightBlue tracking-wide leading-loose">
        <p>{quotes[0].quote}</p>
        <p className="text-right">{`~${quotes[0].author}`}</p>
      </div>
      {/* Quote 2 */}
      <div className="h-screen text-center flex flex-col justify-center font-serif text-2xl p-[20%] px-[30%] font-normal text-textOrange tracking-wide leading-loose">
        <p>{quotes[1].quote}</p>
        <p className="text-right">{`~${quotes[1].author}`}</p>
      </div>
      {/* Quote 3 */}
      <div className="h-screen text-center flex flex-col justify-center font-serif text-2xl p-[20%] px-[25%] font-normal text-textPink tracking-wide leading-loose">
        <p>{quotes[2].quote}</p>
        <p className="text-right">{`~${quotes[2].author}`}</p>
      </div>
      {/* Carpe Diem page */}
      <div className="h-screen text-center flex flex-col justify-center font-serif text-2xl p-[20%] px-[25%]font-normal text-textDarkBlue tracking-wide gap-5 leading-loose">
        <p>Remember:</p>
        <p className="font-semibold text-8xl">CARPE DIEM</p>
        <p className="text-textBlack">
          Enjoy yourself while you still have the chance
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
