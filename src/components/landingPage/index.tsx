'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FiArrowUpRight, FiHeart, FiCalendar } from 'react-icons/fi'
import {
  BiDollarCircle,
  BiLogoInstagram,
  BiLogoGmail,
  BiPhone,
  BiLocationPlus,
} from 'react-icons/bi'

export function LandingPage() {
  return (
    <>

      <section
        id="container"
        className="max-w-7xl mx-auto w-full flex flex-col-reverse lg:flex-row items-center justify-center gap-y-14 lg:gap-x-16 px-6 sm:px-10 py-16 mb-14 text-center lg:text-start"
      >

        <div id="text" className="text-forest max-w-lg">
          <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6">
            Get Personalized <br />
            Nutrition Plans <br />
          </h1>
          <p className="text-base sm:text-lg text-gray-700 max-w-md mx-auto lg:mx-0">
            Achieve your health goals with custom meal plans tailored to your
            preferences and needs.
          </p>
          <Link
            href="/login"
            className="inline-block bg-salmon text-white font-semibold rounded-full mt-8 px-6 py-3 text-base"
          >
            Get Started
          </Link>
        </div>


        <div id="image" className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-[460px]">
          <Image
            src="/assets/img/comida2.png"
            alt="Imagem cartoon de comida"
            width={460}
            height={460}
            className="w-full h-auto object-contain"
          />
        </div>
      </section>


      <section className="bg-darksand text-forest">
        <div id="about" className="max-w-7xl mx-auto px-6 sm:px-8 py-20">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-16">
            Reach Your Dietary Goals
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start justify-items-center">
            {[
              {
                icon: <FiArrowUpRight />,
                title: 'Set Your Objective',
                desc: 'Choose your desired outcome, such as weight loss, muscle gain, or improved health.',
              },
              {
                icon: <FiHeart />,
                title: 'Food Preferences',
                desc: 'Tell us what you like to eat and any dietary restrictions.',
              },
              {
                icon: <FiCalendar />,
                title: 'Daily Schedule',
                desc: 'Provide your mealtime availability and routine.',
              },
              {
                icon: <BiDollarCircle />,
                title: 'Budget-Friendly',
                desc: 'Plans are created to match your financial budget.',
              },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-5 w-full max-w-md">
                <div className="text-5xl text-forest flex-shrink-0">{item.icon}</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-base text-gray-700">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="max-w-7xl mx-auto px-6 sm:px-8 py-20 text-center text-forest" id="contact">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Contact Us</h2>
        <p className="text-base max-w-2xl mx-auto mb-12 text-gray-700">
          We'd love to hear from you. Feel free to reach out through any of the
          channels below.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">

          <div className="bg-white rounded-2xl px-6 py-8 shadow-md flex flex-col items-center text-center gap-3">
            <BiLogoGmail className="text-4xl text-forest mb-2" />
            <h3 className="text-lg font-semibold text-forest">Email</h3>
            <p className="text-gray-600 text-sm">nutrivo@gmail.com</p>
          </div>


          <div className="bg-white rounded-2xl px-6 py-8 shadow-md flex flex-col items-center text-center gap-3">
            <BiPhone className="text-4xl text-forest mb-2" />
            <h3 className="text-lg font-semibold text-forest">Phone</h3>
            <p className="text-gray-600 text-sm">+55 41986782114</p>
          </div>

          <div className="bg-white rounded-2xl px-6 py-8 shadow-md flex flex-col items-center text-center gap-3">
            <BiLogoInstagram className="text-4xl text-forest mb-2" />
            <h3 className="text-lg font-semibold text-forest">Instagram</h3>
            <p className="text-gray-600 text-sm">@nutrivo</p>
          </div>

          <div className="bg-white rounded-2xl px-6 py-8 shadow-md flex flex-col items-center text-center gap-3">
            <BiLocationPlus className="text-4xl text-forest mb-2" />
            <h3 className="text-lg font-semibold text-forest">Location</h3>
            <p className="text-gray-600 text-sm">Curitiba, Paraná</p>
          </div>
        </div>
      </section>
    </>
  )
}
