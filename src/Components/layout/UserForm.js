"use client";
import { useState } from "react";
import EditableImage from "./EditableImage";
import { useProfile } from "../UserProfile";
import AddressInputs from "./AddressInputs";

export default function UserForm({ user, onSave }) {
  const [userName, setUserName] = useState(user?.name || "");
  const [phone, setPhone] = useState(user?.phone || null);
  const [streetAddress, setStreetAddress] = useState(user?.streetAddress || "");
  const [pinCode, setPinCode] = useState(user?.pinCode || null);
  const [city, setCity] = useState(user?.city || "");
  const [country, setCountry] = useState(user?.country || "");
  const [image, setImage] = useState(user?.image || "");
  const [admin, setAdmin] = useState(user?.admin || false);
  const { data: loggedInUserData } = useProfile();

  function handleAddressChange(propName, value) {
    if (propName === "phone") setPhone(value);
    if (propName === "streetAddress") setStreetAddress(value);
    if (propName === "pinCode") setPinCode(value);
    if (propName === "city") setCity(value);
    if (propName === "country") setCountry(value);
  }

  return (
    <div className="md:flex gap-4 ">
      <div>
        <div className=" p-2 rounded-lg relative max-w-[120px] ">
          <EditableImage link={image} setLink={setImage} />
          {/* <button type="button">Edit</button> */}
        </div>
      </div>
      <form
        className="grow"
        onSubmit={(e) =>
          onSave(e, {
            name: userName,
            phone,
            admin,
            streetAddress,
            pinCode,
            city,
            country,
            image,
          })
        }
      >
        <label>First and last name</label>
        <input
          type="text"
          placeholder="Enter First And Last Name"
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <label>Email</label>
        <input type="email" disabled={true} value={user?.email} />
        <AddressInputs
          addressProps={{ phone, streetAddress, pinCode, city, country }}
          setAddressProps={handleAddressChange}
        />
        {loggedInUserData?.admin && (
          <div>
            <label
              className="p-2 inline-flex items-center gap-2 mb-2"
              htmlFor="adminCb"
            >
              <input
                id="adminCb"
                type="checkbox"
                checked={admin}
                value={"1"}
                onChange={(e) => {
                  setAdmin(e.target.checked);
                }}
              />
              <span>Admin</span>
            </label>
          </div>
        )}

        <button type="submit">save</button>
      </form>
    </div>
  );
}
