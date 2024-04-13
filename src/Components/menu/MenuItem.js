import React, { useContext, useState } from "react";
import { CartContext } from "../AppContext";
import toast from "react-hot-toast";
import MenuItemTIle from "./MenuItemTile";
import Image from "next/image";
import FlyingButton from "react-flying-item";

export default function MenuItem(MenuItems) {
  const {
    image,
    name,
    description,
    basePrice,
    sizes,
    extrsIngredientPrices,
    category,
  } = MenuItems;
  const { addToCart } = useContext(CartContext);
  const [showPopUp, setShowPopUp] = useState(false);
  const [selectesSize, setSelectedSize] = useState(sizes?.[0] || null);
  const [selectedExtras, setSelectedExtras] = useState([]);

  async function handleAddToCartButtonClick() {
    const hasOptions = sizes.length > 0 || extrsIngredientPrices.length > 0;
    if (hasOptions && !showPopUp) {
      setShowPopUp(true);
      return;
    }

    addToCart(MenuItems, selectesSize, selectedExtras);
    await new Promise((resolve) => setTimeout(resolve, 600));
    setShowPopUp(false);
  }

  function handleExtraThingClick(e, extraThing) {
    const checked = e.target.checked;
    if (checked) {
      setSelectedExtras((prev) => [...prev, extraThing]);
    } else {
      setSelectedExtras((prev) => {
        return prev.filter((extra) => extra.name !== extraThing.name);
      });
    }
  }

  let selectePrice = parseInt(basePrice);
  if (selectesSize) {
    selectePrice += parseInt(selectesSize.price);
  }
  if (selectedExtras) {
    for (const extra of selectedExtras) {
      selectePrice += parseInt(extra.price);
    }
  }
  return (
    <>
      {showPopUp && (
        <div
          onClick={() => {
            setShowPopUp(false);
          }}
          className="fixed inset-0 bg-black/80 flex items-center justify-center"
        >
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="my-8 bg-white p-2 rounded-lg max-w-md"
          >
            <div
              className="overflow-y-scroll p-2"
              style={{ maxHeight: "calc(100vh - 80px)" }}
            >
              <Image
                src={image}
                alt={name}
                width={300}
                height={200}
                className="mx-auto"
              />
              <h2 className="text-lg font-bold text-center mb-2">{name}</h2>
              <p className="text-center text-gray-500 text-sm mb-2">
                {description}
              </p>

              {sizes.length > 0 && (
                <div className="p-2">
                  <h1 className="text-center text-gray-700">pick your size</h1>
                  {sizes.map((size) => (
                    <label
                      key={size._id}
                      className="flex items-center gap-2 p-4 border rounded-md mb-1"
                    >
                      <input
                        type="radio"
                        onChange={() => {
                          setSelectedSize(size);
                        }}
                        checked={selectesSize?.name === size.name}
                        name="size"
                      />
                      {size.name} ₹ {parseInt(basePrice) + parseInt(size.price)}
                    </label>
                  ))}
                </div>
              )}
              {extrsIngredientPrices.length > 0 && (
                <div className="p-2">
                  <h1 className="text-center text-gray-700">Any extras ?</h1>
                  {extrsIngredientPrices.map((extraThing) => (
                    <label
                      key={extraThing._id}
                      className="flex items-center gap-2 p-4 border rounded-md mb-1"
                    >
                      <input
                        type="checkbox"
                        name={extraThing.name}
                        onChange={(e) => {
                          handleExtraThingClick(e, extraThing);
                        }}
                        checked={selectedExtras
                          .map((e) => e._id)
                          .includes(extraThing._id)}
                      />
                      {extraThing.name} ₹ {parseInt(extraThing.price)}
                    </label>
                  ))}
                </div>
              )}
              <div className="flying-button-parent mt-4 primary sticky bottom-2">
                <FlyingButton targetTop={"5%"} targetLeft={"95%"} src={image}>
                  <div onClick={handleAddToCartButtonClick} className="  ">
                    Add to cart ₹{selectePrice}
                  </div>
                </FlyingButton>
              </div>

              <button
                onClick={() => {
                  setShowPopUp(false);
                }}
                className="mt-2"
                type="button"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      <MenuItemTIle onAddTOCart={handleAddToCartButtonClick} {...MenuItems} />
    </>
  );
}
