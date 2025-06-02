export default function Login() {
  return (
    <section className="flex items-center justify-center bg-sand mt-10">
      <div className="bg-white border border-[#e5dccb] rounded-2xl shadow-xl w-full max-w-3xl flex overflow-hidden">
        {/* Lado da imagem */}
        <div className="w-1/2 flex items-center justify-center bg-sand ">
          <img
            src="/assets/img/login.png"
            alt="Imagem cartoon de comida"
            className="w-[90%] h-auto object-contain"
          />
        </div>

        {/* Lado do formulário */}
        <div className="w-1/2 flex items-center justify-center p-8">
          <div className="flex flex-col items-center w-full max-w-xs gap-6">
            {/* Botões Sign In / Sign Up */}
            <div className="flex border border-[#e0c6a8] rounded-full overflow-hidden">
              <button className="px-6 py-2 bg-salmon text-white font-semibold">
                Sign In
              </button>
              <button className="px-6 py-2 font-semibold">Sign Up</button>
            </div>

            {/* Formulário */}
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

              <button
                type="submit"
                className="bg-salmon text-white font-semibold py-3 rounded-lg hover:bg-[#dd8d74] transition"
              >
                Login
              </button>

              <a
                href="#"
                className="text-sm text-forest underline underline-offset-2 hover:text-[#163328] transition"
              >
                Esqueceu sua senha? Clique aqui
              </a>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
