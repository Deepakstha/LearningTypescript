"use client";
import Link from "next/link";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const page = () => {
  const router = useRouter();
  const [userDetails, setUserDetails] = useState<any>("");
  const logout = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.get("/api/users/logout");
      toast.success(response.data.message);
      router.push("/");
      console.log("clicked");
    } catch (error: any) {
      toast.error(error.message);
      console.log(error);
    }
  };

  const getUserDetails = async () => {
    try {
      const response = await axios.get("/api/users/me");
      console.log(response.data);
      setUserDetails(response.data.user._id);
    } catch (error: any) {
      return toast.error(error.message);
    }
  };
  useEffect(() => {
    getUserDetails();
  }, []);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Toaster />
      <h1>Profile</h1>
      <hr />
      <p>profile Page</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default page;
