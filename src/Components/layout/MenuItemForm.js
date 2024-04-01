import { useEffect, useState } from "react";
import EditableImage from "./EditableImage";

import MenuItemPriceProps from "./MenuItemPriceProps";

export default function MenuItemForm({ onSubmit, menuItem }) {
  const [image, setImage] = useState(menuItem?.image || "");
  const [name, setName] = useState(menuItem?.name || "");
  const [description, setDescription] = useState(menuItem?.description || "");
  const [basePrice, setBasePrice] = useState(menuItem?.basePrice || "");
  const [sizes, setSizes] = useState(menuItem?.sizes || []);
  const [category, setCategory] = useState(menuItem?.category || "");
  const [categories, setCategories] = useState([]);
  const [extrsIngredientPrices, setExtrsIngredientPrices] = useState(
    menuItem?.extrsIngredientPrices || []
  );

  useEffect(() => {
    fetch("/api/categories").then((response) => {
      response.json().then((categories) => {
        setCategories(categories);
      });
    });
  }, []);

  return (
    <form
      onSubmit={(e) =>
        onSubmit(e, {
          image,
          name,
          description,
          basePrice,
          sizes,
          extrsIngredientPrices,
          category,
        })
      }
      className="mt-8 max-w-2xl mx-auto"
    >
      <div
        className="md:grid gap-4 items-start"
        style={{ gridTemplateColumns: ".3fr .7fr" }}
      >
        <div>
          <EditableImage link={image} setLink={setImage} />
        </div>
        <div className="grow">
          <label> Item name</label>
          <input
            type="text"
            placeholder="new Menu-item"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <label> Description</label>
          <input
            type="textArea"
            placeholder="new Menu-item"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <label>Categories</label>
          <select
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          >
            <option>Select Category</option>
            {categories.length > 0 &&
              categories.map((c) => (
                <option key={c._id} value={c?._id}>
                  {c?.name}
                </option>
              ))}
          </select>
          <label> Base price</label>
          <input
            type="text"
            placeholder="new Menu-item"
            value={basePrice}
            onChange={(e) => {
              setBasePrice(e.target.value);
            }}
          />
          <MenuItemPriceProps
            name={"Sizes"}
            addlabel={"Add item size "}
            props={sizes}
            setProps={setSizes}
          />
          <MenuItemPriceProps
            name={"Extra ingredients"}
            addlabel={"Add ingredients prices"}
            props={extrsIngredientPrices}
            setProps={setExtrsIngredientPrices}
          />

          <button className="mb-2" type="submit">
            Save
          </button>
        </div>
      </div>
    </form>
  );
}
