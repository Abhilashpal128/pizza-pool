"use client";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { headers } from "../../../next.config.js";

import toast from "react-hot-toast";
import Link from "next/link";
import UserTabs from "@/Components/layout/UserTabs";
import EditableImage from "@/Components/layout/EditableImage";
import UserForm from "@/Components/layout/UserForm";

export default function ProfilePAge() {
  const session = useSession();
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [profileFetched, setProfileFetched] = useState(false);
  const { status } = session;

  useEffect(() => {
    if (status === "authenticated") {
      fetch("/api/profile").then((response) => {
        response.json().then((data) => {
          setUser(data);
          setIsAdmin(data?.admin);
          setProfileFetched(true);
        });
      });
    }
  }, [session, status]);

  if (status === "loading" || !profileFetched) {
    return "loading....?";
  }
  if (status === "unauthenticated") {
    return redirect("/login");
  }

  const handleProfileUpdate = async (e, data) => {
    e.preventDefault();
    const savingPromise = new Promise(async (resolve, reject) => {
      const response = await fetch("/api/profile", {
        method: "PUT",
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
      loading: "Saving...",
      success: "Profile Saved!",
      error: "Error saving profile",
    });
  };

  return (
    <section className="mt-8">
      <UserTabs isAdmin={isAdmin} />

      <div className="max-w-2xl mx-auto mt-8 ">
        <UserForm user={user} onSave={handleProfileUpdate} />
      </div>
    </section>
  );
}
