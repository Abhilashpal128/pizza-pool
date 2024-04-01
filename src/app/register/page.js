"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userCreating, setUserCreating] = useState(false);
  const [userCreated, setUserCreated] = useState(false);
  const [error, setError] = useState(false);

  async function handleFormSubmit(e) {
    e.preventDefault();
    setUserCreating(true);
    setUserCreated(false);
    setError(false);

    const response = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      setUserCreated(true);
    } else {
      setError(true);
    }
    setUserCreating(false);
  }

  return (
    <section className="mt-8">
      <h1 className="text-center text-primary text-4xl mb-4 font-semibold">
        {" "}
        Register
      </h1>
      {userCreated && (
        <div className="my-4 text-center">
          User Created.
          <br /> Now You Can{" "}
          <Link className="underline" href={"/login"}>
            Login &raquo;
          </Link>
        </div>
      )}
      {error && (
        <div className="my-4 text-center">
          An error has occurred.
          <br /> please try again later
        </div>
      )}
      <form className="block max-w-xs mx-auto" onSubmit={handleFormSubmit}>
        <input
          type="email"
          placeholder="email"
          value={email}
          disabled={userCreating}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          disabled={userCreating}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button type="submit" disabled={userCreating}>
          Register
        </button>
        <div className="my-4 text-center text-gray-500">
          or Login with provider
        </div>
        <button
          className="flex gap-4 justify-center"
          onClick={() => {
            signIn("google", { callbackUrl: "/" });
          }}
        >
          <Image src={"/google.png"} alt={""} width={24} height={24} />
          Login With Google
        </button>
        <div className="text-center my-4 border-t pt-4 text-gray-500">
          Existing account?{"  "}
          <Link className="underline" href={"/login"}>
            Login here &raquo;
          </Link>
        </div>
      </form>
    </section>
  );
}
