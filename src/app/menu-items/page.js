"use client";
import Right from "@/Components/Icons/Right";
import { useProfile } from "@/Components/UserProfile";
import UserTabs from "@/Components/layout/UserTabs";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function MenuItemPage() {
  const { loading, data } = useProfile();
  const [menuItem, setMenuItem] = useState([]);

  useEffect(() => {
    fetch("/api/menu-items").then((response) => {
      response.json().then((menuItem) => {
        setMenuItem(menuItem);
      });
    });
  }, []);

  if (loading) {
    return "Loading User Info...";
  }

  if (!data.admin) {
    return "you are not an admin";
  }

  return (
    <section className=" mt-8 max-w-2xl mx-auto">
      <UserTabs isAdmin={true} />
      <div className="mt-8">
        <Link className="button flex" href={"/menu-items/new"}>
          <span>Create new menu item</span>
          <Right />
        </Link>
      </div>
      <div>
        <h2 className="text-sm text-gray-500 mt-8">Edit menu item :</h2>
        <div className="grid grid-cols-3 gap-2">
          {menuItem.length > 0 &&
            menuItem.map((item, index) => (
              <Link
                key={index}
                href={"/menu-items/edit/" + item._id}
                className=" bg-gray-200 rounded-lg p-4"
              >
                {item.image && (
                  <div className="relative">
                    <Image
                      className="rounded-md"
                      src={item.image}
                      alt="image"
                      height={200}
                      width={200}
                    />
                  </div>
                )}
                <div className="text-center">{item.name}</div>
              </Link>
            ))}
        </div>
      </div>
    </section>
  );
}
