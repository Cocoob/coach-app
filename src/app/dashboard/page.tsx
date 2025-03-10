"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { isAuthenticated } from "@/utils/useAuth";

const Dashboard = () => {
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push("/login");
    }
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-6">
      <h1 className="text-3xl font-bold">Bienvenue sur le Dashboard</h1>
    </section>
  );
};

export default Dashboard;
