"use client";

import Image from "next/image";
import { useState } from "react";


type VadaItem = {
  name: string;
  price: string;
  spice: number;
  desc: string;
  image: string;
  highlight?: boolean;
};

type VadaCategory = {
  category: string;
  note: string;
  items: VadaItem[];
};

/* ============================================================
   FULL MENU
============================================================ */

const MENU: VadaCategory[] = [
  /* ============================================================
     1. VIDARBHA'S SPECIAL
  ============================================================ */

  {
    category: "Vidarbha's Special",
    note: "Authentic flavours and regional favourites inspired by the taste of Vidarbha.",

    items: [
      {
        name: "Gila Vada",
        price: "₹40",
        spice: 2,
        image: "/gila-vada.jpg",
        desc: "A soft and flavourful Vidarbha speciality made with authentic local taste.",
        highlight: true,
      },

      {
        name: "Dahi Vada",
        price: "₹45",
        spice: 1,
        image: "/dahi-vadass.jpg",
        desc: "Soft urad-dal vadas soaked in chilled spiced curd, tamarind and mint chutney.",
      },

      {
        name: "Rassa Vada",
        price: "₹50",
        spice: 5,
        image: "/rassa-vada.jpg",
        desc: "Crispy vada soaked in fiery Vidarbha-style tambda rassa.",
        highlight: true,
      },

      {
        name: "Palak Vada",
        price: "₹40",
        spice: 1,
        image: "/palak-vada.jpg",
        desc: "Crispy spinach and gram-flour fritters with a fresh, earthy flavour.",
      },

      {
        name: "Moong Vada",
        price: "₹40",
        spice: 2,
        image: "/moong-vada.jpg",
        desc: "Golden moong dal fritters with a crisp outside and delicious spiced centre.",
      },

      {
        name: "Barbati Vada",
        price: "₹40",
        spice: 2,
        image: "/barbati-vada.jpg",
        desc: "A traditional-style vada with a deliciously crisp texture and bold flavour.",
      },

      {
        name: "Batata Vada",
        price: "₹30",
        spice: 3,
        image: "/batata-vada.jpg",
        desc: "Spiced potato fritters with a bold Vidarbha-style flavour.",
      },

      {
        name: "Methi Vada",
        price: "₹40",
        spice: 2,
        image: "/methi-vada.jpg",
        desc: "Crispy methi fritters made with aromatic herbs and traditional spices.",
      },

      {
        name: "Sambar Vada",
        price: "₹45",
        spice: 3,
        image: "/sambar-vada.jpg",
        desc: "Soft and crispy vada served with flavourful, hot and comforting sambar.",
      },

      {
        name: "Vegetable Vada",
        price: "₹40",
        spice: 2,
        image: "/mixed-vegetable-vada.jpg",
        desc: "Crispy vegetable-packed fritters loaded with fresh flavours and spices.",
      },

      {
        name: "Sabudana Vada",
        price: "₹35",
        spice: 2,
        image: "/shabudanas-vada.jpg",
        desc: "Crisp sago and peanut fritters, a Vidarbha favourite with every bite.",
      },

      {
        name: "Vada Pav",
        price: "₹25",
        spice: 3,
        image: "/vada-pav.jpg",
        desc: "Classic batata vada tucked into pav with garlic chutney and green chilli.",
      },
    ],
  },

  /* ============================================================
     2. CLASSIC VADAS
  ============================================================ */

  {
    category: "Classic Vadas",
    note: "Timeless favourites — crispy, comforting and loved across generations.",

    items: [
      {
        name: "Medu Vada",
        price: "₹40",
        spice: 1,
        image: "/medu-vadass.jpg",
        desc: "Crispy outside, soft inside — a timeless traditional favourite.",
        highlight: true,
      },

      {
        name: "Dal Vada",
        price: "₹35",
        spice: 3,
        image: "/dal-vada.jpg",
        desc: "Crunchy lentil fritters packed with herbs, spices and traditional flavour.",
      },

      {
        name: "Masala Vada",
        price: "₹35",
        spice: 3,
        image: "/masala-vada.jpg",
        desc: "Crispy masala-packed fritters with a satisfying crunch in every bite.",
      },

      {
        name: "Onion Vada",
        price: "₹35",
        spice: 3,
        image: "/onion-vada.jpg",
        desc: "Golden crispy vadas loaded with onions, herbs and aromatic spices.",
      },

      {
        name: "Aloo Bonda",
        price: "₹35",
        spice: 2,
        image: "/aloo-bonda.jpg",
        desc: "Soft spiced potato filling wrapped in a crispy golden gram-flour coating.",
      },

      {
        name: "Bread Vada",
        price: "₹35",
        spice: 2,
        image: "/bread-vada.jpg",
        desc: "Crispy vada made with spiced potato filling and a golden bread coating.",
      },

      {
        name: "Mix Dal Vada",
        price: "₹40",
        spice: 3,
        image: "/mix-dal-vada.jpg",
        desc: "A crunchy combination of lentils, herbs and traditional Indian spices.",
      },

      {
        name: "Chana Dal Vada",
        price: "₹35",
        spice: 3,
        image: "/chana-dal-vada.jpg",
        desc: "Crispy chana dal fritters with a deliciously crunchy texture.",
      },

      {
        name: "Dahi Vada",
        price: "₹45",
        spice: 1,
        image: "/dahi-vadass.jpg",
        desc: "Soft vadas served with chilled curd, chutneys and aromatic spices.",
      },

      {
        name: "Sabudana Vada",
        price: "₹35",
        spice: 2,
        image: "/shabudanas-vada.jpg",
        desc: "Crispy sago and peanut fritters with a traditional Maharashtrian taste.",
      },

      {
        name: "Vada Pav",
        price: "₹25",
        spice: 3,
        image: "/vada-pav.jpg",
        desc: "Classic batata vada tucked into soft pav with chutneys and green chilli.",
      },

      {
        name: "Batata Vada",
        price: "₹30",
        spice: 3,
        image: "/batata-vada.jpg",
        desc: "Golden potato fritters filled with a delicious spiced potato mixture.",
      },
    ],
  },

  /* ============================================================
     3. VIDARBHA'S 2.0
  ============================================================ */

  {
    category: "Vidarbha's 2.0",
    note: "Traditional vada meets new-generation flavours — bold, creative and fun.",

    items: [
      {
        name: "Cheese Vada",
        price: "₹55",
        spice: 2,
        image: "/cheese-vada.jpg",
        desc: "Crispy vada with a rich cheesy twist created for the new generation.",
        highlight: true,
      },

      {
        name: "Peri Peri Vada",
        price: "₹50",
        spice: 4,
        image: "/peri-peri-vada.jpg",
        desc: "Crispy vada tossed with bold peri peri flavour and a spicy kick.",
      },

      {
        name: "Schezwan Vada",
        price: "₹50",
        spice: 5,
        image: "/schezwan-vada.jpg",
        desc: "A fiery fusion of crispy vada and bold Schezwan flavours.",
      },

      {
        name: "Loaded Vada Pav",
        price: "₹60",
        spice: 4,
        image: "/loaded-vada-pav.jpg",
        desc: "The classic vada pav reimagined with a loaded modern twist.",
      },

      {
        name: "Cheese Vada Pav",
        price: "₹55",
        spice: 3,
        image: "/cheese-vada-pav.jpg",
        desc: "Classic vada pav upgraded with a delicious cheesy layer.",
      },

      {
        name: "Tandoori Vada",
        price: "₹55",
        spice: 3,
        image: "/tandoori-vada.jpg",
        desc: "Crispy vada with bold tandoori-inspired spices and smoky flavour.",
      },

      {
        name: "Cheesy Rassa Vada",
        price: "₹65",
        spice: 5,
        image: "/cheesy-rassa-vada.jpg",
        desc: "Fiery rassa vada finished with a rich and creamy cheesy twist.",
      },

      {
        name: "Masala Crunch Vada",
        price: "₹50",
        spice: 4,
        image: "/masala-crunch-vada.jpg",
        desc: "Extra-crispy vada packed with bold masala and an irresistible crunch.",
      },
    ],
  },
];

/* ============================================================
   MENU CLIENT
============================================================ */

export default function MenuClient() {
  const [activeCategory, setActiveCategory] =
    useState("Vidarbha's Special");

  const selectedCategory = MENU.find(
    (section) => section.category === activeCategory
  );

  return (
    <>
      {/* =====================================================
          MENU HEADER
      ====================================================== */}

      <section
        className="
          relative
          overflow-hidden
          px-5
          pb-14
          pt-16
          sm:pb-16
          sm:pt-20
        "
      >
        {/* Background glow */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-[radial-gradient(circle_at_50%_0%,rgba(196,30,42,0.22),transparent_60%)]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-0
            h-[300px]
            w-[600px]
            -translate-x-1/2
            rounded-full
            bg-vada-red/10
            blur-[100px]
          "
        />

        <div className="relative z-10 mx-auto max-w-6xl text-center">
          {/* Small heading */}

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
              tracking-[0.18em]
              text-turmeric
            "
          >
            All Menu
          </span>

          {/* Main heading */}

          <h1
            className="
              mt-4
              font-display
              text-3xl
              font-black
              leading-tight
              tracking-wide
              text-white
              sm:text-3xl
              lg:text-4xl
            "
          >
            The Authentic Taste of Vidarbha.
          </h1>

          {/* Subtitle */}

          <p
            className="
              mx-auto
              mt-3
              max-w-2xl
              font-body
              text-sm
              leading-6
              text-white/60
              sm:text-base
            "
          >
            Authentic flavours, freshly fried vadas, and traditional
            favourites made with care.
          </p>

          {/* =================================================
              CATEGORY BUTTONS
          ================================================== */}

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {MENU.map((section) => {
              const isActive =
                activeCategory === section.category;

              return (
                <button
                  key={section.category}
                  type="button"
                  onClick={() =>
                    setActiveCategory(section.category)
                  }
                  className={`
                    rounded-full
                    border
                    px-6
                    py-2.5
                    font-body
                    text-xs
                    font-black
                    uppercase
                    tracking-wider
                    transition-all
                    duration-300

                    ${
                      isActive
                        ? `
                          border-turmeric
                          bg-turmeric
                          text-ink
                          shadow-lg
                        `
                        : `
                          border-turmeric/40
                          bg-white/5
                          text-white/80
                          hover:border-turmeric
                          hover:bg-turmeric/10
                          hover:text-turmeric
                        `
                    }
                  `}
                >
                  {section.category}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          SELECTED CATEGORY MENU
      ====================================================== */}

      <section className="px-5 pb-20">
        <div className="mx-auto max-w-6xl">
          {selectedCategory && (
            <div>
              

              {/* =================================================
                  FULL MENU CARDS
              ================================================== */}

              <div
                className="
                  grid
                  grid-cols-1
                  gap-5
                  sm:grid-cols-2
                  lg:grid-cols-4
                "
              >
                {selectedCategory.items.map((item) => (
                  <article
                    key={item.name}
                    className={`
                      group
                      relative
                      flex
                      h-full
                      flex-col
                      overflow-hidden
                      rounded-2xl
                      border
                      transition-all
                      duration-300

                      ${
                        item.highlight
                          ? `
                            border-turmeric
                            bg-gradient-to-br
                            from-vada-red/20
                            to-charcoal
                            shadow-[0_0_0_1px_rgba(232,163,61,0.35),0_0_25px_rgba(196,30,42,0.22)]
                          `
                          : `
                            border-white/10
                            bg-charcoal
                            hover:border-turmeric/50
                            hover:shadow-[0_15px_35px_rgba(196,30,42,0.15)]
                          `
                      }
                    `}
                  >
                    
                    {/* =================================================
                        FOOD IMAGE
                    ================================================== */}

                    <div
                      className="
                        relative
                        h-60
                        w-full
                        overflow-hidden
                        bg-[#f7f5f1]
                      "
                    >
                      <Image
                        src={item.image}
                        alt={`${item.name} - Vidarbha Cha Vadewala`}
                        fill
                        priority={item.highlight}
                        className="
                          object-cover
                          transition-transform
                          duration-500
                          group-hover:scale-110
                        "
                        sizes="
                          (max-width: 640px) 100vw,
                          (max-width: 1024px) 50vw,
                          25vw
                        "
                      />
                    </div>

                    {/* =================================================
                        CARD CONTENT
                    ================================================== */}

                    <div className="flex flex-1 flex-col p-4">
                      {/* Name + Price */}

                      <div className="flex items-start justify-between gap-2">
                        <h3
                          className="
                            font-display
                            text-[17px]
                            font-bold
                            tracking-wide
                            text-papad
                          "
                        >
                          {item.name}
                        </h3>

                        <span
                          className="
                            shrink-0
                            rounded-full
                            bg-turmeric/10
                            px-2.5
                            py-1
                            font-display
                            text-sm
                            font-bold
                            text-turmeric
                          "
                        >
                          {item.price}
                        </span>
                      </div>

                     
                      {/* Spice */}

                      <div className="mt-4">
                        
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}