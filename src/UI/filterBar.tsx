import { ChangeEvent, useState } from "react";
import Checkbox from "./checkbox";
import SearchBar from "./searchBar";

export default function FilterBar() {
  const [price, SetPrice] = useState<number>(5);
  function handlePriceChange(e: ChangeEvent<HTMLInputElement>) {
    SetPrice(+e.target.value);
    console.log(price);
  }
  return (
    <div className="h-screen flex flex-col w-64   p-2  rounded-lg shadow-2xl space-y-4">
      <SearchBar />

      <h1 className=" text-2xl">Filters</h1>
      <div className=" space-y-4">
        <h1 className=" text-2xl">according to brand</h1>
        <div className=" flex flex-wrap gap-4  ">
          <Checkbox label="nike" />
          <Checkbox label="adidas" />
          <Checkbox label="zara" />
          <Checkbox label="H&M" />
        </div>
      </div>
      <div className=" space-y-4">
        <h1 className=" text-2xl">according to category</h1>
        <div className=" flex flex-wrap gap-4 ">
          <Checkbox label="shoe" />
          <Checkbox label="T-shirt" />
          <Checkbox label="skirt" />
          <Checkbox label="suite" />
        </div>
      </div>
      <div className=" space-y-4">
        <h1 className=" text-2xl">according to price</h1>
        <div className=" flex flex-col">
          <input
            type="range"
            value={price}
            min={0}
            max="5000"
            step={100}
            onChange={handlePriceChange}
          />
          <label className=" text-blue-700 font-medium text-xl">{price}$</label>
        </div>
        <div className="flex gap-5 w-full ">
          <button className=" btn btn-outline btn-primary">
            reset filters
          </button>
          <button className=" btn btn-primary">apply</button>
        </div>
      </div>
    </div>
  );
}
