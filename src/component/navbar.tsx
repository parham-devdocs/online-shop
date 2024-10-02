import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar bg-violet-700 rounded-lg mt-5 sticky ">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
          ></div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>products</a>
            </li>

            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <Link to={"/"} className="btn btn-ghost text-xl text-stone-50">
          shopify
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-stone-50 ">
          <li>
            <Link to="/testimonials">testimonials</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/contact">contact</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn bg-stone-50 text-black">Sign up</a>
      </div>
    </div>
  );
}
