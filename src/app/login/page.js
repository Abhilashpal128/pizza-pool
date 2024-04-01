"use client";
import Image from "next/image";
import Link from "next/link";
import { signIn } from "next-auth/react";
import React, { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginInProgress, setLoginInProgress] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    setLoginInProgress(true);

    await signIn("credentials", { email, password, callbackUrl: "/" });
    setLoginInProgress(false);
  };

  return (
    <section>
      <h1 className="text-center text-primary text-4xl mb-4 font-semibold">
        {" "}
        Login
      </h1>
      <form className="block max-w-xs mx-auto" onSubmit={handleFormSubmit}>
        <input
          type="email"
          placeholder="email"
          value={email}
          disabled={loginInProgress}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          disabled={loginInProgress}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button type="submit" disabled={loginInProgress}>
          Login
        </button>
        <div className="my-4 text-center text-gray-500">
          or Login with provider
        </div>
        <button
          type="button"
          className="flex gap-4 justify-center"
          onClick={(e) => {
            signIn("google", { callbackUrl: "/" });
          }}
        >
          <Image src={"/google.png"} alt={""} width={24} height={24} />
          Login With Google
        </button>

        <div className="text-center my-4 border-t pt-4 text-gray-500">
          Not have an account?{"  "}
          <Link className="underline" href={"/register"}>
            Register here &raquo;
          </Link>
        </div>
      </form>
    </section>
  );
}
