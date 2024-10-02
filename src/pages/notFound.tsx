import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className=" flex justify-center items-center h-[88vh] ">
      <div className=" space-y-5 text-center border-primary border-4 px-28 py-16 rounded-xl">
        <h2 className=" text-3xl">oops!</h2>
              <h2 className=" text-2xl">Page not found</h2>
              
        <button className=" btn btn-primary btn-outline">
          <Link to={"/"}>Back to home</Link>
        </button>
      </div>
    </div>
  );
}
export default NotFound;
