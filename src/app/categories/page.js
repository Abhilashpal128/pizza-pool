"use client";
import DeleteButton from "@/Components/DeleteButton";
import { useProfile } from "@/Components/UserProfile";
import UserTabs from "@/Components/layout/UserTabs";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { resolve } from "styled-jsx/css";

export default function CategoriesPage() {
  const [categoryName, setCategoryName] = useState("");
  const [categories, setCategories] = useState([]);
  const [editedCategory, setEditedCategory] = useState(null);

  const { loading: profileLoading, data: profileData } = useProfile();

  useEffect(() => {
    fetchCategories();
  }, []);

  function fetchCategories() {
    fetch("/api/categories").then((response) => {
      response.json().then((categories) => {
        setCategories(categories);
      });
    });
  }

  async function handleCategorySubmit(e) {
    e.preventDefault();

    const CreationPromise = new Promise(async (resolve, reject) => {
      const data = { name: categoryName };
      if (editedCategory) {
        data._id = editedCategory._id;
      }
      const response = await fetch("/api/categories", {
        method: editedCategory ? "PUT" : "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      setCategoryName("");
      fetchCategories();
      setEditedCategory(null);
      if (response.ok) {
        resolve();
      } else {
        reject();
      }
    });

    await toast.promise(CreationPromise, {
      loading: editedCategory
        ? "Updating category"
        : "Creating your new category",
      success: editedCategory ? "Category updated" : "Category created",
      error: editedCategory
        ? "Error Updating Category"
        : "Error creating category",
    });
  }

  async function handleDeleteClick(id) {
    const DeletePromise = new Promise(async (resolve, reject) => {
      const response = await fetch("/api/categories?_id=" + id, {
        method: "DELETE",
      });
      if (response.ok) {
        resolve();
      } else {
        reject();
      }
    });

    await toast.promise(DeletePromise, {
      loading: "Deteting category...",
      success: "Category deleted",
      error: "Failed to delete category",
    });

    fetchCategories();
  }

  if (profileLoading) {
    return "Loading user Info...";
  }

  if (!profileData?.admin) {
    return "you are not an admin";
  }

  return (
    <section className="mt-8 max-w-2xl mx-auto">
      <UserTabs isAdmin={true} />
      <form onSubmit={handleCategorySubmit} className="mt-8">
        <div className="  flex gap-2 items-end">
          <div className="grow">
            <label>
              {editedCategory ? "Update category" : "New category name"}
              {editedCategory && (
                <>
                  <b>:{editedCategory.name}</b>
                </>
              )}
            </label>
            <input
              type="text"
              value={categoryName}
              onChange={(e) => {
                setCategoryName(e.target.value);
              }}
              placeholder={
                editedCategory ? "Update category name" : "New category name"
              }
            />
          </div>
          <div className="pb-2 flex gap-2">
            <button type="submit">
              {editedCategory ? "Update" : "Create"}
            </button>
            <button
              type="button"
              onClick={() => {
                setEditedCategory(null);
                setCategoryName("");
              }}
            >
              {" "}
              cancel{" "}
            </button>
          </div>
        </div>
      </form>
      <ul>
        <h2 className="mt-8 text-sm text-gray-500">Existing category :</h2>
        {categories.length > 0 &&
          categories.map((category, index) => (
            <div
              key={index}
              className=" bg-gray-100  items-center rounded-xl p-2 px-4 flex gap-1 mb-2 "
            >
              <div className="grow ">{category.name}</div>
              <div className="flex gap-1">
                <button
                  onClick={() => {
                    setEditedCategory(category);
                    setCategoryName(category?.name);
                  }}
                  type="button"
                >
                  Edit
                </button>
                <DeleteButton
                  label={"Delete"}
                  onDelete={() => handleDeleteClick(category?._id)}
                />
              </div>
            </div>
          ))}
      </ul>
    </section>
  );
}
