"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/Button";
import Input from "@/components/Input";
import CustomLink from "@/components/CustomLink";

const LoginPage = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    server: "",
  });

  const [loading, setLoading] = useState(false);

  const validateEmail = (email: string) => /\S+@\S+\.\S+/.test(email);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "", server: "" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    let newErrors = { email: "", password: "", server: "" };
    let isValid = true;

    if (!formData.email) {
      newErrors.email = "L'email est requis.";
      isValid = false;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "L'email n'est pas valide.";
      isValid = false;
    }

    if (!formData.password) {
      newErrors.password = "Le mot de passe est requis.";
      isValid = false;
    }

    setErrors(newErrors);
    if (!isValid) return;

    setLoading(true);

    try {
      const response = await fetch("https://api.example.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Identifiants incorrects.");
      }

      // Stocker le token JWT en localStorage
      localStorage.setItem("token", data.token);

      // Rediriger vers la page d’accueil après connexion réussie
      router.push("/");
    } catch (error: any) {
      setErrors({ ...errors, server: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-6">
      <div className="w-full max-w-md bg-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-[var(--color-fitness)]">
          Connexion
        </h2>

        {errors.server && (
          <p className="text-red-500 text-sm mt-2 text-center">
            {errors.server}
          </p>
        )}

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <Input
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            placeholder="email@example.com"
          />
          <Input
            label="Mot de passe"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            error={errors.password}
            placeholder="••••••••"
          />

          <Button
            text="Se connecter"
            type="submit"
            isLoading={loading}
            className="w-full rounded-lg"
          />
        </form>

        <div className="mt-6 text-center text-gray-400">
          <p>
            Pas encore de compte ?{" "}
            <CustomLink href="/register" text="Créer un compte" />
          </p>
          <p className="mt-2">
            <CustomLink href="/forgot-password" text="Mot de passe oublié ?" />
          </p>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
