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
    <div className="h-screen overflow-y-scroll bg-bgGrey snap-y snap-mandatory scrollbar-none">
      <Header />
      {/* first text box */}
      <div className="h-screen sm:h-auto text-center flex flex-col justify-center font-serif text-lg sm:text-2xl p-[10%] sm:p-[20%] font-normal text-textBlack gap-20 tracking-wide leading-loose snap-start">
        <p>
          Hi, I&apos;m Ernest Tan. Life can be overwhelming, and we often forget
          to give ourselves a break.
        </p>
        <p>
          This website is here to remind you to
          <span className="text-textLightBlue"> slow down</span>,{" "}
          <span className="text-textOrange">take a breath</span>, and
          <span className="text-textPink"> appreciate </span> the world around
          you.
        </p>
      </div>
      {/* Second text box */}
      <div className=" h-screen sm:h-auto text-center flex flex-col justify-center font-serif text-lg sm:text-2xl p-[10%] sm:p-[20%] font-normal text-textBlack sm:gap-20 tracking-wide leading-loose snap-center">
        <p>Explore daily quotes curated to inspire and uplift.</p>
        <p className="mt-10 md:mt-auto">
          {" "}
          Here&#39;s a glimpse: &#34;Believe you can and you are halfway
          there&#34;
        </p>
        <p className="text-right">-Theodore Roosevelt</p>
      </div>
      {/* Third text box */}
      <div className=" h-screen sm:h-auto text-center flex flex-col justify-center font-serif text-lg sm:text-2xl p-[10%] sm:p-[20%] font-normal text-textBlack gap-20 tracking-wide leading-loose snap-center">
        <p>
          Ready to be inspired? Scroll down for more or refresh for a new quote
          every day.
        </p>
      </div>
      {/* Quote 1 */}
      <div className="h-screen sm:h-auto text-center flex flex-col justify-center font-serif text-lg sm:text-2xl p-[10%] sm:p-[20%] font-normal text-textLightBlue tracking-wide leading-loose snap-center">
        <p>{quotes[0].quote}</p>
        <p className="text-right">{`~${quotes[0].author}`}</p>
      </div>
      {/* Quote 2 */}
      <div className="h-screen sm:h-auto text-center flex flex-col justify-center font-serif text-lg sm:text-2xl p-[10%] sm:p-[20%] font-normal text-textOrange tracking-wide leading-loose snap-center">
        <p>{quotes[1].quote}</p>
        <p className="text-right">{`~${quotes[1].author}`}</p>
      </div>
      {/* Quote 3 */}
      <div className="h-screen sm:h-auto text-center flex flex-col justify-center font-serif text-lg sm:text-2xl p-[10%] sm:p-[20%] font-normal text-textPink tracking-wide leading-loose snap-center">
        <p>{quotes[2].quote}</p>
        <p className="text-right">{`~${quotes[2].author}`}</p>
      </div>
      {/* Carpe Diem page */}
      <div className="h-screen sm:h-auto text-center flex flex-col justify-center font-serif text-xl sm:text-2xl p-[5%] sm:p-[20%] sm:px-[25%] font-normal text-textDarkBlue tracking-wide gap-0 leading-loose snap-center">
        <p>Sieze The Day</p>
        <p className="font-semibold text-5xl sm:text-8xl">CARPE DIEM</p>
        <p className="text-textBlack text-base sm:text-2xl mt-5">
          Embrace the present moment and make the most of every opportunity.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
