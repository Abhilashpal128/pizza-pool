"use client";
import { MdOutlineArrowCircleLeft } from "react-icons/md";
import { useProfile } from "@/Components/UserProfile";
import MenuItemForm from "@/Components/layout/MenuItemForm";
import UserTabs from "@/Components/layout/UserTabs";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function NewMenuItemPage() {
  const [reditectToItems, setRedirectToItems] = useState(false);

  const { loading: profileLoading, data: profileData } = useProfile();

  async function handleFormSubmit(e, data) {
    e.preventDefault();

    const savingPromise = new Promise(async (resolve, reject) => {
      const response = await fetch("/api/menu-items", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
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

  if (reditectToItems) {
    redirect("/menu-items");
  }

  if (profileLoading) {
    return "Loding User Info...";
  }
  if (!profileData?.admin) {
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
      <MenuItemForm menuItem={null} onSubmit={handleFormSubmit} />
    </section>
  );
}
