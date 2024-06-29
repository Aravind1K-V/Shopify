import React from "react";
import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import useCartStore from "../zustand/store.js";  // import your Zustand store

const Navbar = () => {
  const { cartItems } = useCartStore();

  return (
    <div className="navbar bg-base-100">
  <div className="flex-1">
    <Link to = {"/"} className="btn btn-ghost text-xl">Shopify</Link>
  </div>
  <Link to={"/cart"}>
  <div className="flex-none">
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span className="badge badge-sm indicator-item">{cartItems.length}</span>
        </div>
      </div> 
    </div>
  </div>
  </Link>
</div>
  );
};

export default Navbar;
