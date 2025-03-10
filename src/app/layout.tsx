import "../styles/globals.css";

import React from "react";
import Header from "@/components/Header"; // Import du composant

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <Header /> {/* Ajout du Header */}
        <main>{children}</main>
      </body>
    </html>
  );
}
