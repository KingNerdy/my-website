type quoteStructure = {
  quote: string;
  author: string;
};

export const getQuote = (
  setQuote: React.Dispatch<React.SetStateAction<quoteStructure[] | undefined>>
) => {
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

  // Fetch data from the API
  fetch(apiUrlWithParams)
    .then((response) => {
      // Check if the response status is OK (status code 200-299)
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // Parse the response JSON
      return response.json();
    })
    .then((data) => {
      // Handle the data returned from the API
      const quotes: quoteStructure[] = [];
      data.map((value: any) => {
        quotes.push({
          quote: value.content,
          author: value.author,
        });
      });
      setQuote(quotes);
    })
    .catch((error) => {
      // Handle any errors that occurred during the fetch
      console.error("Error fetching data:", error.message);
    });
};
