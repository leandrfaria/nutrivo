"use client";

import { useState } from "react";
import Link from "next/link";
import clsx from "clsx";

export default function Login() {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <section className="flex items-center justify-center bg-sand min-h-[90vh] pt-6 sm:pt-10 px-4 sm:px-6">
      <div className="bg-white border border-[#e5dccb] rounded-2xl shadow-xl w-full max-w-3xl flex flex-col md:flex-row overflow-hidden">

        {/* Imagem lateral (visível apenas em telas md ou maiores) */}
        <div className="hidden md:flex w-full md:w-1/2 items-center justify-center bg-sand p-8">
          <img
            src="/assets/img/login.png"
            alt="Imagem cartoon de comida"
            className="w-[90%] h-auto object-contain"
          />
        </div>

        {/* Formulário */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-6 sm:p-8">
          <div className="flex flex-col items-center w-full max-w-[280px] sm:max-w-sm gap-6">

            {/* Botões com fundo animado */}
            <div className="relative w-full flex border border-[#e0c6a8] rounded-full overflow-hidden">
              <div
                className={clsx(
                  "absolute top-0 h-full w-1/2 bg-salmon rounded-full transition-all duration-300",
                  isSignIn ? "left-0" : "left-1/2"
                )}
              />
              <button
                onClick={() => setIsSignIn(true)}
                className={clsx(
                  "px-6 py-2 w-1/2 z-10 font-semibold transition-colors duration-300",
                  isSignIn ? "text-white" : "text-forest"
                )}
              >
                Sign In
              </button>
              <button
                onClick={() => setIsSignIn(false)}
                className={clsx(
                  "px-6 py-2 w-1/2 z-10 font-semibold transition-colors duration-300",
                  !isSignIn ? "text-white" : "text-forest"
                )}
              >
                Sign Up
              </button>
            </div>

            {/* Formulário de login */}
            {isSignIn ? (
              <form className="flex flex-col gap-4 w-full">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#dd8d74]"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#dd8d74]"
                />

                <Link
                  href="/dashboard"
                  className="inline-block bg-salmon text-white font-semibold rounded-full px-6 py-3 text-base text-center hover:bg-[#dd8d74] transition"
                >
                  Login
                </Link>

                <a
                  href="#"
                  className="text-sm text-forest underline underline-offset-2 hover:text-[#163328] transition text-center"
                >
                  Esqueceu sua senha? Clique aqui
                </a>
              </form>
            ) : (
              // Formulário de cadastro
              <form className="flex flex-col gap-4 w-full">
                <input
                  type="text"
                  placeholder="Nome"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#dd8d74]"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#dd8d74]"
                />
                <input
                  type="password"
                  placeholder="Senha"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#dd8d74]"
                />

                <button
                  type="submit"
                  className="bg-salmon text-white font-semibold rounded-full px-6 py-3 text-base text-center hover:bg-[#dd8d74] transition"
                >
                  Criar conta
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
