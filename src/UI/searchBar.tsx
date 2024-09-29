import { MdSearch } from "react-icons/md";

export default function SearchBar() {
    return (
      <div className=" flex border-2 border-gray-500 rounded-xl px-2 bg-white ">
        <input
          type="text"
          placeholder="Search"
          id="input"
          className=" outline-none"
        />
        <button className=" btn btn-circle btn-ghost">
          <MdSearch />
        </button>
      </div>
    );
}