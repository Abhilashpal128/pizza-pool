import Image from "next/image";
import React from "react";
import Right from "../Icons/Right";
import { MdOutlineArrowCircleLeft } from "react-icons/md";

export default function Hero() {
  return (
    <section className="hero md:mt-4">
      <div className="py-8 md:py-12">
        <h1 className="text-4xl font-semibold">
          Everything <br /> is better
          <br /> with a&nbsp;
          <span className="text-primary">Pizza</span>{" "}
        </h1>
        <p className="my-6 text-gray-500  text-sm">
          Pizza Is the missing Thing that makes everyday complete, A simple yet
          delicious hoy in life
        </p>

        <div className="flex gap-4 text-sm">
          <button className="bg-primary flex  justify-center gap-2 items-center uppercase  text-white py-2 px-8 rounded-full">
            Order Now
            <Right />
          </button>
          <button className="flex  items-center border-0 gap-2 py-2 text-gray-600 font-semibold">
            Learn More
            <MdOutlineArrowCircleLeft className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div className="relative md:block hidden">
        <Image
          src={"/pizza.png"}
          layout={"fill"}
          objectFit={"contain"}
          alt={"Pizza"}
        />
      </div>
    </section>
  );
}
