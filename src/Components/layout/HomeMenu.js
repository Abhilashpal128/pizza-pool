"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import MenuItem from "../menu/MenuItem";
import SectionHeaders from "./SectionHeaders";

export default function HomeMenu() {
  const [bestSellers, setBestSellers] = useState();

  useEffect(() => {
    fetch("/api/menu-items").then((response) => {
      response.json().then((data) => {
        setBestSellers(data?.slice(-3));
      });
    });
  }, []);
  return (
    <>
      <section>
        <div className="absolute left-0 right-0 w-full justify-start">
          <div className="-z-10 absolute left-0 -top-[70px]  text-left ">
            <Image
              src={"/sallad1.png"}
              alt={"sallad"}
              width={109}
              height={189}
            />
          </div>
          <div className="h-48 w-48 absolute -top-[100px] right-0 -z-10">
            <Image
              src={"/sallad2.png"}
              alt={"sallad"}
              width={107}
              height={195}
            />
          </div>
        </div>
        <div className="text-center mb-4">
          <SectionHeaders
            subHeader={"Check Out"}
            mainHeader={"Our Best Sellers"}
          />
        </div>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {bestSellers?.length > 0 &&
            bestSellers.map((items) => <MenuItem key={items._id} {...items} />)}
        </div>
      </section>
    </>
  );
}
