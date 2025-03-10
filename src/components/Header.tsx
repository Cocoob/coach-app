"use client";

import Link from "next/link";
import Button from "./Button";
import React from "react";
import { useRouter } from "next/navigation";
import { isAuthenticated } from "@/utils/useAuth";
import { FaUserPlus } from "react-icons/fa"; // Icône pour "S'inscrire"

const Header = () => {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };
  return (
    <header className="fixed top-0 left-0 w-full text-white p-4 z-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold">Coach App</h1>

        {/* Navigation centrée */}
        <nav className="absolute left-1/2 transform -translate-x-1/2">
          <ul className="flex gap-6">
            <li>
              <Link href="/" className="hover:underline">
                Accueil
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">
                À propos
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Auth Buttons */}
        {isAuthenticated() ? (
          <Button text="Se déconnecter" onClick={handleLogout} />
        ) : (
          <div className="flex space-x-4">
            <Link
              href="/register"
              className="flex items-center space-x-1 text-[var(--color-fitness)] hover:underline"
            >
              <FaUserPlus size={18} />
              <span>S'inscrire</span>
            </Link>
            <Link href="/login">
              <Button text="Connexion" />
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
