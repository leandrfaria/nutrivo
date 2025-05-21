import { FiArrowUpRight, FiHeart, FiCalendar } from "react-icons/fi";
import {
  BiDollarCircle,
  BiLogoInstagram,
  BiLogoGmail,
  BiPhone,
  BiLocationPlus,
} from "react-icons/bi";

export function LandingPage() {
  return (
    <>
      <section
        id="container"
        className="max-w-7xl mx-auto w-full flex items-center justify-center gap-x-16 px-10 py-16 mb-14"
      >
        <div id="text" className="text-forest max-w-lg">
          <h1 className="font-bold text-6xl leading-tight mb-6">
            Get Personalized <br />
            Nutrition Plans <br />
          </h1>
          <p className="text-lg text-gray-700 max-w-md">
            Achieve your health goals with custom meal plans tailored to your
            preferences and needs.
          </p>
          <button className="bg-salmon text-white font-semibold rounded-full mt-8 px-6 py-3 text-base">
            Get Started
          </button>
        </div>

        <div id="image" className="w-[460px]">
          <img
            src="/assets/img/comida2.png"
            alt="Imagem cartoon de comida"
            className="w-full h-auto object-contain"
          />
        </div>
      </section>

      {/* Dietary Goals Section */}
      <section className="bg-darksand text-forest">
        <div id="about" className="max-w-7xl mx-auto px-8 py-30">
          <h2 className="text-4xl font-extrabold text-center mb-20">
            Reach Your Dietary Goals
          </h2>

          <div className="grid md:grid-cols-2 gap-y-12 gap-x-24 items-start justify-items-center">
            <div className="flex items-center gap-5 w-full max-w-md">
              <FiArrowUpRight className="text-5xl font-bold text-forest flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Set Your Objective</h3>
                <p className="text-base text-gray-700">
                  Choose your desired outcome, such as weight loss, muscle gain,
                  or improved health.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5 w-full max-w-md">
              <FiHeart className="text-5xl font-bold text-forest flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Food Preferences</h3>
                <p className="text-base text-gray-700">
                  Tell us what you like to eat and any dietary restrictions.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5 w-full max-w-md">
              <FiCalendar className="text-5xl font-bold text-forest flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Daily Schedule</h3>
                <p className="text-base text-gray-700">
                  Provide your mealtime availability and routine.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5 w-full max-w-md">
              <BiDollarCircle className="text-5xl font-bold text-forest flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Budget-Friendly</h3>
                <p className="text-base text-gray-700">
                  Plans are created to match your financial budget.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="max-w-7xl mx-auto px-8 py-20 text-center text-forest"
        id="contact"
      >
        <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
        <p className="text-base max-w-2xl mx-auto mb-12">
          We'd love to hear you. Feel free to reach out through any of the
          channels below.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Email */}
          <div className="bg-white rounded-2xl p-8 min-h-[180px] shadow-sm flex flex-col items-center text-center gap-2">
            <BiLogoGmail className="text-4xl text-forest" />
            <h3 className="text-lg font-semibold">Email</h3>
            <p className="text-gray-700 text-sm">nutrivo@gmail.com</p>
          </div>

          {/* Phone */}
          <div className="bg-white rounded-2xl p-8 min-h-[180px] shadow-sm flex flex-col items-center text-center gap-2">
            <BiPhone className="text-4xl text-forest" />
            <h3 className="text-lg font-semibold">Phone</h3>
            <p className="text-gray-700 text-sm">+55 41986782114</p>
          </div>

          {/* Instagram */}
          <div className="bg-white rounded-2xl p-8 min-h-[180px] shadow-sm flex flex-col items-center text-center gap-2">
            <BiLogoInstagram className="text-4xl " />
            <h3 className="text-lg font-semibold">Instagram</h3>
            <p className="text-gray-700 text-sm">@nutrivo</p>
          </div>

          {/* Location */}
          <div className="bg-white rounded-2xl p-8 min-h-[180px] shadow-sm flex flex-col items-center text-center gap-2">
            <BiLocationPlus className="text-4xl text-forest" />
            <h3 className="text-lg font-semibold">Location</h3>
            <p className="text-gray-700 text-sm">Curitiba, Paraná</p>
          </div>
        </div>
      </section>
    </>
  );
}
