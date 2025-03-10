import React from "react";
import { FaInstagram, FaEnvelope } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Navigation */}
        <div>
          <h3 className="text-xl font-semibold text-[#e7ff6a]">Navigation</h3>
          <ul className="mt-4 space-y-2 text-gray-400">
            <li>
              <Link href="/" className="hover:text-white">
                Accueil
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white">
                À propos
              </Link>
            </li>
            <li>
              <Link href="/plans" className="hover:text-white">
                Plans
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold text-[#e7ff6a]">Contact</h3>
          <p className="mt-4 text-gray-400">Besoin d’aide ? Une question ?</p>
          <div className="mt-4 flex justify-center md:justify-start space-x-4">
            <a
              href="mailto:contact@coachapp.com"
              className="text-gray-400 hover:text-white"
            >
              <FaEnvelope size={24} />
            </a>
            <a
              href="https://instagram.com/coachapp"
              target="_blank"
              className="text-gray-400 hover:text-white"
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </div>

        {/* Mentions légales & CGU */}
        <div>
          <h3 className="text-xl font-semibold text-[#e7ff6a]">Informations</h3>
          <ul className="mt-4 space-y-2 text-gray-400">
            <li>
              <Link href="/mentions-legales" className="hover:text-white">
                Mentions légales
              </Link>
            </li>
            <li>
              <Link href="/cgu" className="hover:text-white">
                Conditions générales d’utilisation
              </Link>
            </li>
            <li>
              <Link href="/confidentialite" className="hover:text-white">
                Politique de confidentialité
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Coach App - Tous droits réservés.
      </div>
    </footer>
  );
};

export default Footer;
