"use client";
import { CartContext, cartProductPrice } from "@/Components/AppContext";
import Trash from "@/Components/Icons/Trash";
import { useProfile } from "@/Components/UserProfile";
import AddressInputs from "@/Components/layout/AddressInputs";
import SectionHeaders from "@/Components/layout/SectionHeaders";
import CartProduct from "@/Components/menu/CartProduct";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import uniqid from "uniqid";

export default function CartPage() {
  const { cartProducts, removeCartProduct } = useContext(CartContext);
  const [address, setAddres] = useState({});
  const [paymentPopUp, setPaymentPopUp] = useState(false);
  const [paidStatus, setPaidStatus] = useState(false);
  const { data } = useProfile();
  const uniqueId = uniqid();
  const router = useRouter();
  let orderId = "";

  useEffect(() => {
    console.log(data);
    fetch("/api/profile").then((response) => {
      response.json().then((profileData) => {
        if (profileData?.city) {
          const { phone, streetAddress, city, pinCode, country } = profileData;
          const addressFromProfile = {
            phone,
            streetAddress,
            city,
            pinCode,
            country,
          };
          setAddres(addressFromProfile);
        }
      });
    });
  }, []);

  const Delivery = 100;
  let Subtotal = 0;
  for (const p of cartProducts) {
    Subtotal += cartProductPrice(p);
  }

  const total = Subtotal + Delivery;

  function handleAddressChange(propName, value) {
    setAddres((prevAddress) => ({ ...prevAddress, [propName]: value }));
  }

  function handlePayFordelivery(e) {
    e.preventDefault();
    if (paidStatus == false) {
      return toast.error("please check the checkbox for payment");
    } else {
      const paymentPromise = new Promise(async (resolve, reject) => {
        const response = await fetch("/api/orders", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...address,
            cartProducts,
            paid: paidStatus,
          }),
        });
        if (response.ok && paidStatus) {
          resolve();
          const responnnnse = await response.json();

          console.log(`response`, responnnnse);
          setPaymentPopUp(false);
          router.push("/orders/" + responnnnse._id + "clear-cart-1");
        } else {
          reject();
        }
      });

      toast.promise(paymentPromise, {
        loading: "processing payment...",
        success: "order confirmed",
        error: paidStatus ? "failed to order" : "Payment Canceled",
      });
    }
  }

  if (cartProducts.length === 0) {
    return (
      <section className="mt-8  text-center">
        <SectionHeaders mainHeader="Cart" />
        <div className="text-center my-4">
          <p>Your shopping cart is empty 😞</p>
        </div>
      </section>
    );
  }

  return (
    <section className="mt-8 relative">
      <div className="text-center">
        <SectionHeaders mainHeader="Cart" />
      </div>
      <div className="mt-8 grid md:grid-cols-2 gap-4">
        <div>
          {cartProducts?.length === 0 && (
            <div>No Items in Your Shopping Cart</div>
          )}
          {cartProducts?.length > 0 &&
            cartProducts.map((product, index) => (
              <CartProduct
                key={index}
                product={product}
                onRemove={removeCartProduct}
              />
            ))}
          <div className="text-right py-2 pr-16">
            <div>
              <span className="text-gray-500"> Subtotal:</span>
              <span className="text-lg font-semibold"> ₹{Subtotal} /-</span>
            </div>
            <div>
              <span className="text-gray-500"> Delivery:</span>
              <span className="text-lg font-semibold"> ₹{Delivery} /-</span>
            </div>
            <div>
              <span className="text-gray-500"> Total:</span>
              <span className="text-lg font-semibold"> ₹{total} /-</span>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <h2>checkout</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setPaymentPopUp(true);
            }}
          >
            <AddressInputs
              addressProps={address}
              setAddressProps={handleAddressChange}
            />
            <button
              type="submit"
              className="bg-primary border-primary text-white"
            >
              Pay &nbsp;₹{total} /-
            </button>
          </form>
        </div>
      </div>

      {paymentPopUp && (
        <section className="fixed inset-0 h-full w-full flex items-center justify-center bg-black/80">
          {/* {<div onClick={setPaymentPopUp(false)}>hii</div>} */}
          <div className="text-white max-w-md p-4 bg-white rounded-lg flex flex-col gap-2 ">
            <div className="text-center">
              <label>
                Confirm To proceed Please Check the checkBox For confirm Payment
              </label>
            </div>
            <div className="flex justify-center gap-2">
              <input
                type="checkbox"
                onClick={(e) => {
                  setPaidStatus(e.target.checked);
                }}
                name="paid"
              />
              <label className="text-xl">Paid</label>
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                className="bg-primary rounded-full  text-white"
                onClick={handlePayFordelivery}
              >
                yes,proceed
              </button>
              <button
                type="button"
                onClick={(e) => {
                  setPaymentPopUp(false);
                }}
                className="rounded-full"
              >
                cancel
              </button>
            </div>
          </div>
        </section>
      )}
    </section>
  );
}
