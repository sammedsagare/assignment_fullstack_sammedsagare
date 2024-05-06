"use client";
import { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
import { useRouter } from "next/navigation";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const router = useRouter();

  const handleSignIn = async () => {
    try {
      const res = await signInWithEmailAndPassword(email, password);
      console.log({ res });
      sessionStorage.setItem("user", true);

      setTimeout(() => {
        setEmail("");
        setPassword("");
        router.push("/home");
      }, 1999);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-[#071829]">
      <div className="border border-[#FFFFFF33] bg-black p-10 rounded-lg shadow-xl w-96">
        <h1 className="text-white text-2xl mb-5">Sign In</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-4 bg-[#071829] rounded outline-none text-white placeholder-gray-500"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-4 bg-[#071829] rounded outline-none text-white placeholder-gray-500"
          required
        />
        <button
          onClick={handleSignIn}
          className="w-full p-3 bg-[#071829] hover:bg-[#00B2FF] rounded-md text-white"
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default SignIn;
