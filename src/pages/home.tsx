import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className=" flex justify-center items-center h-screen relative  ">
      <div className=" space-y-4 text-center">
        <h1 className=" text-3xl">Welcome to our website</h1>
        <button className="btn btn-outline border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white">
          <Link to="/products" className=" flex items-center gap-2 ">
            vist products
            <MdKeyboardDoubleArrowRight size={20} className=" animate-pulse" />
          </Link>
        </button>
      </div>
      <div className="w-[300px] h-[300px] bg-custom-radial rounded-full absolute top-0 left-0 opacity-10 animate-move blur-lg -z-10"></div>
    </div>
  );
}
