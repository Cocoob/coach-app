import Link from "next/link";
import Button from "./Button";
import React from "react";

const Header = () => {
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

        {/* Bouton de redirection à droite */}
        <Link href="/login">
          <Button text="Connexion" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
