"use client";
import SectionHeaders from "@/Components/layout/SectionHeaders";
import MenuItem from "@/Components/menu/MenuItem";
import { useEffect, useState } from "react";

export default function MenuPage() {
  const [categories, setCategories] = useState([]);
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    fetch("/api/categories").then((response) => {
      response.json().then((categories) => {
        setCategories(categories);
      });
    });

    fetch("/api/menu-items").then((response) => {
      response.json().then((menuItems) => {
        setMenuItems(menuItems);
      });
    });
  }, []);

  return (
    <section className="mt-8">
      {categories.length > 0 &&
        categories.map((category) => (
          <div key={category._id}>
            <div className="text-center">
              <SectionHeaders mainHeader={category?.name} />
            </div>
            <div className=" grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 mt-4 pb-2">
              {menuItems
                .filter((item) => item.category === category._id)
                .map((items) => (
                  <MenuItem key={items._id} {...items} />
                ))}
            </div>
          </div>
        ))}
    </section>
  );
}
