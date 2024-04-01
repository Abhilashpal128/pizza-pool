"use client";
import { useProfile } from "@/Components/UserProfile";
import SectionHeaders from "@/Components/layout/SectionHeaders";
import UserTabs from "@/Components/layout/UserTabs";
import { dbTimeForHuman } from "@/libs/datetime";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function OrdersPage() {
  const [orders, setOrders] = useState();
  const [loadingOrders, setLoadingOrders] = useState(true);

  const { loading, data: Profile } = useProfile();

  useEffect(() => {
    fetchOrders();
  }, []);

  function fetchOrders() {
    setLoadingOrders(true);
    fetch("/api/orders").then((res) => {
      res.json().then((data) => {
        setOrders(data.reverse());
        setLoadingOrders(false);
      });
    });
  }

  return (
    <section className="max-w-2xl mt-8 mx-auto">
      <UserTabs isAdmin={Profile?.admin} />
      {loadingOrders && <div>Loading orders...</div>}
      <div className="mt-8">
        {orders?.length > 0 &&
          orders?.map((order) => (
            <div
              key={order._id}
              className="bg-gray-100 mb-2 p-4 rounded-lg flex flex-col md:flex-row items-center gap-6"
            >
              <div className="grow flex flex-col md:flex-row items-center gap-6">
                <div>
                  <div
                    className={
                      order?.paid
                        ? "bg-green-500 p-2 rounded-md text-white w-24 text-center"
                        : "bg-red-500 p-2 rounded-md text-white w-24 text-center"
                    }
                  >
                    {order?.paid ? "paid" : "Not paid"}
                  </div>
                </div>
                <div className="grow">
                  <div className="flex gap-2 items-center mb-1">
                    <div className="grow">{order?.userEmail}</div>
                    <div className="text-gray-500 text-sm">
                      {dbTimeForHuman(order?.createdAt)}
                    </div>
                  </div>
                  <div className="text-gray-500 text-xs">
                    {order?.cartProducts?.map((p) => p.name).join(",")}
                  </div>
                </div>
              </div>

              <div className="justify-end text-right flex gap-2 items-center whitespace-nowrap">
                {" "}
                <Link href={"/orders/" + order?._id} className="button">
                  Show order
                </Link>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
