import ProductCard from "../UI/productCard";
import FilterBar from "../UI/filterBar";
import NoProduct from "/no product.png";
import { useEffect, useState } from "react";
import axios from "axios";
type Product = {
  id: string;
  img?: string;
  title: string;
  description: string;
  price: string;
  brand: string;
  category: string;
};
export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    async function fetchProducts() {
      const fetchedProducts = await axios.get("http://localhost:3000/products");
      setProducts(fetchedProducts.data);
    }
    fetchProducts();
  }, []);

  return (
    <div className=" px-24">
      <h1 className=" text-3xl my-3">Products</h1>
      <div className=" grid grid-cols-12 gap-4 ">
        <div className=" flex flex-wrap  justify-between mt-10  col-span-10 gap-12">
          {products.map((product) => {
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
        </div>
        <FilterBar />
      </div>
    </div>
  );
}
