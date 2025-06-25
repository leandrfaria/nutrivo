export default function Dashboard() {
  return (
    <main className="text-forest px-4 sm:px-6 md:px-10 py-10 md:py-16 max-w-7xl mx-auto w-full space-y-16">

      {/* Título */}
      <section className="text-center md:text-start">
        <h1 className="text-4xl sm:text-5xl font-bold mb-2">Diet Dashboard</h1>
        <p className="text-base sm:text-lg text-gray-700">
          Manage and track your diet plans
        </p>
      </section>

      {/* Dieta Atual */}
      <section className="bg-white rounded-3xl px-6 sm:px-8 py-8 sm:py-10 shadow-md">
        {/* Título + Botão */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold">Current Diet</h2>
          <button className="bg-salmon text-white font-semibold px-6 py-2 rounded-full">
            New Diet
          </button>
        </div>

        {/* Imagem + Card */}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
          {/* Imagem */}
          <div className="w-[180px] sm:w-[220px] md:w-[280px]">
            <img
              src="/assets/img/comida.png"
              alt="Imagem cartoon de comida"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Card */}
          <div className="shadow-md rounded-2xl p-6 w-full max-w-md">
            <h3 className="text-lg sm:text-xl font-semibold mb-2">[Diet Name]</h3>
            <p className="text-gray-700 mb-4 text-sm sm:text-base">
              [Brief Summary of the diet goals]
            </p>
            <button className="bg-salmon text-white font-semibold px-5 py-2 rounded-full">
              View Diet
            </button>
          </div>
        </div>
      </section>

      {/* Dietas Anteriores */}
      <section>
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center sm:text-start">Previous Diets</h2>
        <div className="space-y-4">
          {[1, 2, 3].map((_, i) => (
            <div
              key={i}
              className="bg-white shadow rounded-2xl p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
            >
              <div>
                <h3 className="text-base sm:text-lg font-semibold">Diet Name</h3>
                <p className="text-gray-700 text-sm">
                  Brief summary of the diet's goals
                </p>
              </div>
              <button className="bg-salmon text-white font-semibold px-5 py-2 rounded-full">
                View Diet
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
