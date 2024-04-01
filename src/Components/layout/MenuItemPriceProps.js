"use client";
import { useState } from "react";
import Plus from "../Icons/Plus";
import Trash from "../Icons/Trash";
import ChevronDown from "../Icons/ChevronDown";
import ChevronUp from "../Icons/ChevronUp";

export default function MenuItemPriceProps({
  name,
  addlabel,
  props,
  setProps,
}) {
  const [isOpen, setIsOpen] = useState(false);

  function addProps() {
    setProps((oldProps) => {
      return [...oldProps, { name: "", price: 0 }];
    });
  }

  function editProp(e, index, prop) {
    const newValue = e.target.value;

    console.log(prop);

    setProps((prevProps) => {
      const newPeops = [...prevProps];
      newPeops[index][prop] = newValue;
      console.log(newPeops);
      return newPeops;
    });
  }

  function removeProps(indexToRemove) {
    setProps((prev) => prev.filter((value, index) => index !== indexToRemove));
  }

  return (
    <div className="bg-gray-200 p-2 rounded-md mb-2">
      <button
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
        className="inline-flex p-1 gap-1 border-0 justify-start"
        type="button"
      >
        {isOpen && <ChevronUp />}
        {!isOpen && <ChevronDown />}

        <span>{name}</span>
        <span>({props?.length})</span>
      </button>

      <div className={isOpen ? "block" : "hidden"}>
        {props.length > 0 &&
          props.map((size, index) => (
            <div key={index} className=" flex gap-2 items-end  ">
              <div>
                <label>Size name</label>
                <input
                  type="text"
                  placeholder="Size name"
                  value={size.name}
                  onChange={(e) => editProp(e, index, "name")}
                />
              </div>
              <div>
                <label>Extra price</label>
                <input
                  type="tel"
                  placeholder="Extra price"
                  value={size.price}
                  onChange={(e) => editProp(e, index, "price")}
                />
              </div>
              <div>
                <button
                  type="button"
                  className="bg-white mb-2 px-2"
                  onClick={() => {
                    removeProps(index);
                  }}
                >
                  <Trash />
                </button>
              </div>
            </div>
          ))}
        <button
          type="button"
          onClick={addProps}
          className="bg-white items-center"
        >
          <Plus className="w-4 h-4" />
          <span>{addlabel}</span>
        </button>
      </div>
    </div>
  );
}
