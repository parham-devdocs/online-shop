import { MdSearch } from "react-icons/md";
import ProductCard from "../UI/productCard";
import SearchBar from "../UI/searchBar";
import FilterBar from "../UI/filterBar";

export default function ProductsPage() {
  return (
    <div className=" px-24">
      <h1 className=" text-3xl my-3">Products</h1>
      <div className=" grid grid-cols-12 gap-4 ">
        <div className=" flex flex-wrap  justify-between mt-10  col-span-10">
          <ProductCard
            img="https://m.media-amazon.com/images/I/71aDZGDOwlL._AC_SL1500_.jpg"
            price="500"
            title="i max "
            description="this is the best shoe"
          />
          <ProductCard
            img="https://dkstatics-public.digikala.com/digikala-products/3d027ddafbf0e5159cc82909d59fd3a018fc4596_1718868549.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90"
            price="500"
            title="i max "
            description="this is the best shoe"
          />
          <ProductCard
            img="https://dkstatics-public.digikala.com/digikala-products/3d027ddafbf0e5159cc82909d59fd3a018fc4596_1718868549.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90"
            price="500"
            title="i max "
            description="this is the best shoe"
          />
        </div>
        <FilterBar />
      </div>
    </div>
  );
}
