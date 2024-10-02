import { ChangeEvent, useEffect, useState } from "react";
import Checkbox from "./checkbox";
import SearchBar from "./searchBar";
import axios from "axios";
import { Product } from "../type";
import { baseUrl } from "../utils";
const brands = [
  "nike",
  "adidas",
  "zara",
  "H&M",
  "Stepup",
  "Chickstyle",
  "EliteTailors",
  "DenimDream",
  "SuiteSavy",
  "BasicWear",
];

const categories = ["shoe", "T-shirt", "skirt", "suit"];



type Filter = {
  price: number;
  brand: string[];
  category: string[];
};

export default function FilterBar({
  productUpdater,
}: {
  productUpdater: (filteredProduct: Product[]) => void;
}) {
  const [filter, setFilter] = useState<Filter>({
    price: 0,
    brand: [],
    category: [],
  });

  const [products, setProducts] = useState<Product[]>([]);
  const resetFilterHandler = () => {
    setFilter({ brand: [], category: [], price: 0 });
    productUpdater(products)
  };

  useEffect(() => {
    async function fetchProducts() {
      try {
        const fetchedProducts = await baseUrl.get('/products')

        setProducts(fetchedProducts.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    fetchProducts();
  }, [filter]);

  function handlePriceChange(e: ChangeEvent<HTMLInputElement>) {
    setFilter({ ...filter, price: +e.target.value });
  }

  function handleBrandChange(e: ChangeEvent<HTMLInputElement>) {
    const selectedBrand = e.target.value;
    const newBrands = filter.brand.includes(selectedBrand)
      ? filter.brand.filter((brand) => brand !== selectedBrand)
      : [...filter.brand, selectedBrand];

    setFilter({ ...filter, brand: newBrands });
  }

  function handleCategoryChange(e: ChangeEvent<HTMLInputElement>) {
    const selectedCat = e.target.value;
    const newCats = filter.category.includes(selectedCat)
      ? filter.category.filter((cat) => cat !== selectedCat)
      : [...filter.category, selectedCat];

    setFilter({ ...filter, category: newCats });
  }

  function filterHandler() {
    const filteredProducts = products.filter((product) => {
      const isBrandMatch =
        filter.brand.length === 0 || filter.brand.includes(product.brand);
      const isCatMatched =
        filter.category.length === 0 ||
        filter.category.includes(product.category);
      const isPriceMatched =
        filter.price === 0 || filter.price >= product.price; // Adjust this logic as needed
      return isBrandMatch && isCatMatched && isPriceMatched;
    });
    productUpdater(filteredProducts);
  }

  return (
    <div className="h-screen flex flex-col w-64 p-2 rounded-lg shadow-2xl space-y-4 ">
      <SearchBar />

      <h2 className="text-2xl">Filters</h2>
      <div className="space-y-4">
        <h3 className="text-2xl">According to Brand</h3>
        <div className="flex flex-wrap gap-4">
          {brands.map((brand) => (
            <Checkbox
              key={brand}
              label={brand}
              value={brand}
              checked={filter.brand.includes(brand)}
              onChange={handleBrandChange}
            />
          ))}
        </div>
      </div>
      <div className="space-y-4">
        <h3 className="text-2xl">According to Category</h3>
        <div className="flex flex-wrap gap-4">
          {categories.map((cat) => (
            <Checkbox
              key={cat}
              label={cat}
              value={cat}
              checked={filter.category.includes(cat)}
              onChange={handleCategoryChange}
            />
          ))}
        </div>
      </div>
      <div className="space-y-4">
        <h3 className="text-2xl">According to Price</h3>
        <div className="flex flex-col">
          <input
            type="range"
            value={filter.price}
            min={10}
            max={1000}
            onChange={handlePriceChange}
          />
          <label className="text-blue-700 font-medium text-xl">
            {filter.price}$
          </label>
        </div>
        <div className="flex gap-5 w-full">
          <button
            className="btn btn-outline btn-primary"
            onClick={resetFilterHandler}
          >
            Reset Filters
          </button>
          <button className="btn btn-primary" onClick={filterHandler}>
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}
