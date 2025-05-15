export function LandingPage () {
  return (
    <section
      id="container"
      className="max-w-7xl mx-auto w-full flex items-center justify-between px-16 py-24"
    >
      {/* Texto */}
      <div id="text" className="text-forest max-w-xl">
        <h1 className="font-bold text-6xl leading-tight mb-6">
          Get Personalized <br />
          Nutrition Plans <br />
        </h1>
        <p className="text-lg text-gray-700 max-w-md">
          Achieve your health goals with custom meal plans tailored to your preferences and needs.
        </p>
        <button className="bg-salmon text-white font-semibold rounded-full mt-8 px-6 py-3 text-base">
          Get Started
        </button>
      </div>

      {/* Imagem */}
      <div id="image" className="w-[350px]">
        <img
          src="/assets/img/comida.png"
          alt="Imagem cartoon de comida"
          className="w-full h-auto object-contain"
        />
      </div>
    </section>
  )
}
