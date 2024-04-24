"use client";
import DeleteButton from "@/Components/DeleteButton";
import {MdOutlineArrowCircleLeft} from 'react-icons/md'
import { useProfile } from "@/Components/UserProfile";
import MenuItemForm from "@/Components/layout/MenuItemForm";
import UserTabs from "@/Components/layout/UserTabs";
import Link from "next/link";
import { redirect, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function EditMenuItemPage() {
  const { id } = useParams();
  const [menuItem, setMenuItem] = useState(null);
  const [reditectToItems, setRedirectToItems] = useState(false);

  const { loading, data } = useProfile();

  useEffect(() => {
    fetch("/api/menu-items").then((response) => {
      response.json().then((items) => {
        const item = items.find((i) => i._id === id);
        setMenuItem(item);
      });
    });
  }, []);

  async function handleFormSubmit(e, data) {
    e.preventDefault();

    const savingPromise = new Promise(async (resolve, reject) => {
      const response = await fetch("/api/menu-items", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data, _id: id }),
      });

      if (response.ok) {
        resolve();
      } else {
        reject();
      }
    });

    await toast.promise(savingPromise, {
      loading: "Saving menu-item",
      success: "Saved menu-item",
      error: "Failed to save menu-item",
    });

    setRedirectToItems(true);
  }

  async function handleDeleteClick() {
    const DeletePromise = new Promise(async (resolve, reject) => {
      const response = await fetch("/api/menu-items?_id=" + id, {
        method: "DELETE",
      });
      if (response.ok) {
        resolve();
      } else {
        reject();
      }
    });

    await toast.promise(DeletePromise, {
      loading: "Deleting menu item..",
      success: "Deleted menu item",
      error: "failed to delete menu item",
    });

    setRedirectToItems(true);
  }

  if (reditectToItems) {
    redirect("/menu-items");
  }

  if (loading) {
    return "Loding User Info...";
  }
  if (!data?.admin) {
    return "You are not an admin";
  }
  return (
    <section className="mt-8">
      <UserTabs isAdmin={true} />
      <div className="max-w-2xl mx-auto mt-8">
        <Link className="button" href={"/menu-items"}>
          <MdOutlineArrowCircleLeft className="w-6 h-6" />
          <span>Show all menu items</span>
        </Link>
      </div>
      <MenuItemForm menuItem={menuItem} onSubmit={handleFormSubmit} />
      <div className="max-w-md mx-auto mt-2">
        <div className="max-w-xs ml-auto pl-4">
          <DeleteButton
            label={"Delete this menu item"}
            onDelete={handleDeleteClick}
          />
        </div>
      </div>
    </section>
  );
}
