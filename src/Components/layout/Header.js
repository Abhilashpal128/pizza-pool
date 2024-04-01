"use client";
import React, { useContext, useState } from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { CartContext } from "../AppContext";
import ShoppingCart from "../Icons/ShoppingCart";
import Bars2 from "../Icons/Bars2";

function AuthLinks({ status, userName }) {
  if (status === "authenticated") {
    return (
      <>
        <Link href={"/profile"} className="whitespace-nowrap">
          Hello,{userName}
        </Link>

        <button
          className="bg-primary text-white rounded-full px-6 py-2"
          href={"/register"}
          onClick={() => {
            signOut();
          }}
        >
          Logout
        </button>
      </>
    );
  }

  if (status === "unauthenticated") {
    return (
      <>
        <Link href={"/login"}>Login</Link>
        <Link
          className="bg-primary text-white rounded-full px-6 py-2"
          href={"/register"}
        >
          Register
        </Link>
      </>
    );
  }
}

export default function Header() {
  const session = useSession();
  const status = session.status;
  const userData = session.data?.user;

  const { cartProducts } = useContext(CartContext);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  let userName = userData?.name || userData?.email;
  if (userName && userName.includes(" ")) {
    userName = userName.split(" ")[0];
  }
  return (
    <>
      <header className="">
        <div className="md:hidden flex justify-between items-center">
          <Link className="text-primary text-2xl font-semibold" href="/">
            PIZZA POOL
          </Link>
          <div className="flex gap-8 items-center">
            <Link href={"/cart"} className="relative">
              <ShoppingCart />
              {cartProducts?.length > 0 && (
                <span className="absolute p-1 px-1 -top-2 -right-4  bg-primary text-sm text-white rounded-full leading-3">
                  {cartProducts.length}
                </span>
              )}
            </Link>
            <button
              className="p-1 "
              onClick={() => {
                setMobileNavOpen((prev) => !prev);
              }}
            >
              <Bars2 />
            </button>
          </div>
        </div>
        {mobileNavOpen && (
          <div
            className="md:hidden p-4 bg-gray-200 rounded-lg mt-2 flex flex-col gap-2 text-center"
            onClick={() => {
              setMobileNavOpen(false);
            }}
          >
            <Link href={"/"}>Home</Link>
            <Link href={"/menu"}>Menu</Link>
            <Link href={"/#about"}>About</Link>
            <Link href={"/#contact"}>Contact</Link>
            <AuthLinks status={status} userName={userName} />
          </div>
        )}
        <div className="hidden md:flex justify-between items-center  ">
          <nav className="flex gap-8 font-semibold items-center text-gray-500">
            <Link className="text-primary text-2xl font-semibold" href="/">
              PIZZA POOL
            </Link>
            <Link href={"/"}>Home</Link>
            <Link href={"/menu"}>Menu</Link>
            <Link href={"/#about"}>About</Link>
            <Link href={"/#contact"}>Contact</Link>
          </nav>
          <nav className="flex items-center gap-4 text-gray-500 font-semibold">
            <AuthLinks status={status} userName={userName} />
            <Link href={"/cart"} className="relative">
              <ShoppingCart />
              {cartProducts?.length > 0 && (
                <span className="absolute p-1 px-1 -top-2 -right-4  bg-primary text-sm text-white rounded-full leading-3">
                  {cartProducts.length}
                </span>
              )}
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}
