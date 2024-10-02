import ProductCard from "../component/productCard";
import FilterBar from "../component/filterBar";
import NoProduct from "/no product.png";
import { useEffect, useState } from "react";
import usePaginate from "../hooks/usePaginate";
import Pagination from "../component/pagination";
import { Product } from "../type";
import { baseUrl } from "../utils";
export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const { nextPage, prevPage, currentItems, pageNumber } =
    usePaginate(products);

  useEffect(() => {
    async function fetchProducts() {
      const fetchedProducts = await baseUrl.get("products")
      setProducts(fetchedProducts.data);
    }
    fetchProducts();
  }, []);

  return (
    <div className=" px-24">
      <h1 className=" text-3xl my-3">Products</h1>
      <h2 className=" text-xl">
        {" "}
        Number of products found :{" "}
        <span className=" text-blue-700">{products.length}</span>
      </h2>

      <div className=" grid grid-cols-12 gap-4 ">
        <div className=" flex flex-wrap  justify-between mt-10  col-span-10 gap-12">
          {currentItems.map((product) => {
            return (
              <ProductCard
                key={product.id}
                img={product.img || NoProduct}
                title={product.title}
                description={product.description}
                price={product.price}
              />
            );
          })}
          <Pagination nextPage={nextPage} prevPage={prevPage} pageNumber={pageNumber} />
        </div>
        <FilterBar
          productUpdater={(filteredProducts) => {
            setProducts(filteredProducts);
            console.log(filteredProducts);
          }}
        />
      </div>
    </div>
  );
}
