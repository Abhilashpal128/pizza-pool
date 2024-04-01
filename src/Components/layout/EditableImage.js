import Image from "next/image";
import toast from "react-hot-toast";

export default function EditableImage({ link, setLink }) {
  async function handlefilechange(e) {
    e.preventDefault();
    const files = e.target.files;
    if (files?.length === 1) {
      const data = new FormData();
      data.set("file", files[0]);

      const uploadPromise = new Promise(async (resolve, reject) => {
        const response = await fetch("/api/upload", {
          method: "POST",
          body: data,
        });
        if (response.ok) {
          const link = await response.json();
          setLink(link);
          resolve();
        } else {
          reject();
        }
      });

      await toast.promise(uploadPromise, {
        loading: "Uploading...",
        success: "Upload Complete",
        error: "Error uploading",
      });
    }
  }

  return (
    <>
      {link && (
        <Image
          className="rounded-lg w-full h-full mb-1"
          src={link}
          width={250}
          height={250}
          alt={"Avtar"}
        />
      )}
      {!link && (
        <div className="bg-gray-200 p-4 text-center text-gray-500">
          No Image :(
        </div>
      )}

      <label>
        <input type="file" className="hidden" onChange={handlefilechange} />
        <span className="block border border-gray-300 rounded-lg p-2 text-center cursor-pointer">
          Change Image
        </span>
      </label>
    </>
  );
}
