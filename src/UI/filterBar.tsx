import Checkbox from "./checkbox";
import SearchBar from "./searchBar";

export default function FilterBar() {
  return (
    <div className="h-screen flex flex-col w-64   p-2  rounded-lg shadow-2xl space-y-4">
      <SearchBar />

      <h1 className=" text-2xl">Filters</h1>
      <div>
        <h1 className=" text-2xl">according to brand</h1>
        <div className=" flex flex-wrap">
         <Checkbox label="nike"/>
        </div>
      </div>
      <div>
        <h1 className=" text-2xl">according to category</h1>
      </div>
      <div>
        <h1 className=" text-2xl">according to price</h1>
      </div>
    </div>
  );
}
