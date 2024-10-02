import  { useState } from "react";


type Product = {
  id: string;
  img?: string;
  title: string;
  description: string;
  price: number;
  brand: string;
  category: string;
};

const usePaginate = (initialProducts: Product[]) => {
  const itemsPerPage = 10;
  const [pageNumber, setPageNumber] = useState(1);

  // Calculate the total number of pages
  const totalPages = Math.ceil(initialProducts.length / itemsPerPage);

  // Calculate the index of the first and last item on the current page
  const startIndex = (pageNumber - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Slice the products array to get the items for the current page
  const currentItems = initialProducts.slice(startIndex, endIndex);

  // Function to go to the next page
  const nextPage = () => {
    if (pageNumber < totalPages) {
      setPageNumber((prev) => prev + 1);
    }
  };

  // Function to go to the previous page
  const prevPage = () => {
    if (pageNumber > 1) {
      setPageNumber((prev) => prev - 1);
    }
  };

  return {
    currentItems,
    totalPages,
    pageNumber,
    nextPage,
    prevPage,
  };
};

export default usePaginate;
