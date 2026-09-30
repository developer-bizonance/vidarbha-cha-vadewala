"use client";

import Image from "next/image";
import Link from "next/link";

const STATS = [
  { n: "8+", l: "Vada varieties" },
  { n: "100%", l: "Freshly prepared" },
  { n: "5/5", l: "Spice, if you dare" },
];

export default function Hero() {
  return (
    <section id="home" className="relative isolate min-h-[520px] scroll-mt-20 overflow-hidden sm:min-h-[570px]">

      {/* =====================================================
          OUTLET BACKGROUND IMAGE
      ===================================================== */}
      <Image
        src="/franchise-hero.jpg"
        alt="Vidarbha Cha Vadewala outlet"
        fill
        priority
        quality={90}
        sizes="100vw"
        className="object-center"
      />

      {/* =====================================================
          LIGHT OVERLAY
      ===================================================== */}

      <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/30 to-black/10" />

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[520px]
          max-w-7xl
          items-start
          px-6
          py-12
          sm:min-h-[570px]
          sm:px-10
          sm:py-14
          lg:px-16
        "
      >

        <div className="max-w-5xl">

          {/* =================================================
              SMALL HEADING
          ================================================= */}

          <span
            className="
            
              inline-block
              rounded-full
              border
              border-turmeric/40
              bg-turmeric/10
              px-5
              py-1.5
              font-body
              text-xs
              font-bold
              uppercase
              tracking-widest
              text-turmeric
              backdrop-blur-sm
            "
          >
            EST. ON THE STREETS OF VIDARBHA
          </span>

          {/* =================================================
              MAIN HEADING
          ================================================= */}

          <h1
            className="
              mt-25
              whitespace-nowrap
              font-display
              text-[clamp(1.8rem,5vw,5.5rem)]
              font-black
              leading-none
              tracking-wide
              text-papad
              drop-shadow-[0_3px_8px_rgba(0,0,0,0.75)]
            "
          >
            THE TASTE OF{" "}
            <br/>
            <span className="text-vada-red text-outline-papad">
              VIDARBHA
            </span>
          </h1>

          {/* =================================================
              DESCRIPTION
          ================================================= */}

          <p
            className="
              mt-8
              max-w-xl
              font-body
              text-base
              leading-7
              text-white
              drop-shadow-[0_2px_5px_rgba(0,0,0,0.8)]
              sm:text-lg
              sm:leading-8
            "
          >
            Bringing the authentic taste of Vidarbha to your
            plate — fresh vadas, traditional masala, and
            flavours that feel like home.
          </p>

          {/* =================================================
              BUTTONS
          ================================================= */}

          <div className="mt-22 flex flex-wrap gap-4">
            <Link
              href="/#menu"
              className="
                rounded-full
                bg-vada-red
                px-7
                py-3.5
                font-body
                text-sm
                font-bold
                text-white
                shadow-lg
                transition-all
                duration-300
                hover:-translate-y-1
                hover:scale-105
                hover:shadow-xl
              "
            >
              Explore the Menu
            </Link>

            <Link
              href="/#franchise"
              className="
                rounded-full
                border
                border-white/20
                bg-ink/60
                px-7
                py-3.5
                font-body
                text-sm
                font-bold
                text-papad
                backdrop-blur-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-turmeric/60
                hover:bg-turmeric/15
                hover:text-turmeric
              "
            >
              Get a Franchise
            </Link>
          </div>

          
        </div>

      </div>

    </section>
  );
}