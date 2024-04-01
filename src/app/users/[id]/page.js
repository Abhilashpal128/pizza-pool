"use client";
import { useProfile } from "@/Components/UserProfile";
import UserForm from "@/Components/layout/UserForm";
import UserTabs from "@/Components/layout/UserTabs";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function EditUserPage() {
  const { id } = useParams();
  const [user, setUser] = useState();
  const { loading, data } = useProfile();

  useEffect(() => {
    fetch("/api/profile?_id=" + id).then((response) => {
      response.json().then((data) => {
        setUser(data);
      });
    });
  }, []);

  async function handleSaveButtonClick(e, data) {
    e.preventDefault();

    const promise = new Promise(async (resolve, reject) => {
      const res = await fetch("/api/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data, _id: id }),
      });

      if (res.ok) {
        resolve();
      } else {
        reject();
      }
    });

    await toast.promise(promise, {
      loading: "Saving user...",
      success: "user Saved",
      error: "failed to save user",
    });
  }

  if (loading) {
    return "loading user info";
  }
  if (!data.admin) {
    return "you are not an admin";
  }

  return (
    <section className="mt-8 max- auto max-w-2xl">
      <UserTabs isAdmin={true} />
      <div className="mt-8">
        <UserForm user={user} onSave={handleSaveButtonClick} />
      </div>
    </section>
  );
}
