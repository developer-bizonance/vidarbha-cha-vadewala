"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  CircleCheck,
  Store,
  Utensils,
  Building2,
  MapPin,
  Clock,
  Phone,
  Mail,
  ArrowRight,
  Sparkles,
  ChefHat,
  Users,
  Briefcase,
  Handshake,
} from "lucide-react";
import SectionHeading from "./components/SectionHeading";
import Hero from "./components/Hero";

import EnquiryForm from "./components/EnquiryForm";
import FranchiseWhatsAppForm from "./components/FranchiseWhatsAppForm";

type MenuItem = {
  name: string;
  price: string;
  image: string;
};

type CategoryName =
  | "All Items"
  | "Vidarbha's Special"
  | "Classic Vadas"
  | "Vidarbha's 2.0";

/* ============================================================
   MENU DATA
   ============================================================ */

const VIDARBHAS_SPECIAL: MenuItem[] = [
  { name: "Gila Vada", price: "₹40", image: "/batata-vada.jpg" },
  { name: "Dahi Vada", price: "₹45", image: "/dahi-vadass.jpg" },
  { name: "Rassa Vada", price: "₹50", image: "/rassa-vada.jpg" },
  { name: "Palak Vada", price: "₹40", image: "/palak-vada.jpg" },
  { name: "Moong Vada", price: "₹40", image: "/bread-vada.jpg" },
  { name: "Barbati Vada", price: "₹40", image: "/dahi-vadass.jpg" },
  { name: "Batata Vada", price: "₹30", image: "/batata-vada.jpg" },
  { name: "Methi Vada", price: "₹40", image: "/methi-vada.jpg" },
  { name: "Sambar Vada", price: "₹45", image: "/medu-vadass.jpg" },
  { name: "Sabudana Vada", price: "₹35", image: "/shabudanas-vada.jpg" },
  { name: "Vada Pav", price: "₹25", image: "/vada-pav.jpg" },
];

const CLASSIC_VADAS: MenuItem[] = [
  { name: "Medu Vada", price: "₹40", image: "/medu-vadass.jpg" },
  { name: "Dahi Vada", price: "₹45", image: "/dahi-vadass.jpg" },
  { name: "Dal Vada", price: "₹35", image: "/batata-vada.jpg" },
  { name: "Masala Vada", price: "₹35", image: "/batata-vada.jpg" },
  { name: "Onion Vada", price: "₹35", image: "/about-vada.jpg" },
  { name: "Aloo Bonda", price: "₹35", image: "/batata-vada.jpg" },
  { name: "Bread Vada", price: "₹35", image: "/bread-vada.jpg" },
  { name: "Sabudana Vada", price: "₹35", image: "/shabudanas-vada.jpg" },
];

const VIDARBHAS_20: MenuItem[] = [
  { name: "Cheese Vada", price: "₹55", image: "/batata-vada.jpg" },
  { name: "Peri Peri Vada", price: "₹50", image: "/rassa-vada.jpg" },
  { name: "Schezwan Vada", price: "₹50", image: "/rassa-vada.jpg" },
  { name: "Loaded Vada ", price: "₹60", image: "/vada-pav.jpg" },
  { name: "Tandoori Vada", price: "₹55", image: "/rassa-vada.jpg" },
  { name: "Cheesy Vada", price: "₹65", image: "/rassa-vada.jpg" },
];

const ALL_ITEMS: MenuItem[] = [
  ...VIDARBHAS_SPECIAL,
  ...CLASSIC_VADAS,
  ...VIDARBHAS_20,
];

const CATEGORY_ITEMS: Record<CategoryName, MenuItem[]> = {
  "All Items": ALL_ITEMS,
  "Vidarbha's Special": VIDARBHAS_SPECIAL,
  "Classic Vadas": CLASSIC_VADAS,
  "Vidarbha's 2.0": VIDARBHAS_20,
};

/* ============================================================
   FRANCHISE FORMATS
   ============================================================ */

const FORMATS = [
  {
    icon: Store,
    number: "01",
    title: "Vada Counter",
    tag: "COMPACT & HIGH ROI",
    specs: "Area: 80–150 sq.ft | Setup: 15–20 Days",
    desc: "A compact format designed for high footfall spots, metro stations, markets, and colleges.",
  },
  {
    icon: Utensils,
    number: "02",
    title: "Quick Service Outlet",
    tag: "MOST POPULAR",
    specs: "Area: 200–400 sq.ft | Takeaway + Counter Dining",
    desc: "A full QSR setup offering all vada varieties, signature hot cutting chai, and cold masala chaas.",
  },
  {
    icon: Building2,
    number: "03",
    title: "Café Format",
    tag: "FLAGSHIP EXPERIENCE",
    specs: "Area: 500+ sq.ft | Full Seating & Experience",
    desc: "A spacious destination combining gourmet vada innovations, beverages, and cozy family seating.",
  },
];

/* ============================================================
   CAREER ROLES
   ============================================================ */

const ROLES = [
  {
    number: "01",
    title: "Outlet Master Cook",
    type: "Full-time",
    location: "Nagpur / Amravati",
    desc: "Help prepare fresh vadas while maintaining authentic crispness, consistency, and hygiene.",
  },
  {
    number: "02",
    title: "Store / Outlet Manager",
    type: "Full-time",
    location: "Multiple Outlets",
    desc: "Oversee daily branch operations, inventory, customer delight, and local team coordination.",
  },
  {
    number: "03",
    title: "Central Kitchen Production",
    type: "Full-time",
    location: "Central Kitchen, Nagpur",
    desc: "Prepare proprietary spice mixes, chutneys, and batter blends maintaining rigorous quality checks.",
  },
  {
    number: "04",
    title: "Franchise Support Executive",
    type: "Full-time",
    location: "Nagpur HQ",
    desc: "Partner with new franchise investors to support store launches, staff training, and compliance.",
  },
];

export default function Home() {
  const [activeCategory, setActiveCategory] =
    useState<CategoryName>("All Items");

  // Scroll to hash section on mount (e.g. navigating from /franchise to /#franchise)
  useEffect(() => {
    const hash = window.location.hash?.replace("#", "");
    if (hash) {
      const el = document.getElementById(hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, []);

  const activeItems = CATEGORY_ITEMS[activeCategory];

  return (
    <>
      {/* =====================================================
          1. HERO SECTION (#home)
      ====================================================== */}
      <Hero />

      {/* =====================================================
          2. ABOUT US SECTION (#about)
      ====================================================== */}
      <section
        id="about"
        className="relative scroll-mt-20 overflow-hidden bg-ink px-5 py-20 sm:py-24"
      >
        {/* Glow Effects */}
        <div
          className="pointer-events-none absolute -left-32 top-1/3 h-80 w-80 rounded-full bg-vada-red/10 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-24 top-0 h-80 w-80 rounded-full bg-turmeric/10 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-6xl">
          {/* Top Story Grid */}
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="About Us"
                title="A simple idea: bring the real taste of Vidarbha to every plate"
                sub="Vidarbha Cha Vadewala was born from a deep love for the vadas we grew up eating — crispy, fresh, boldly spiced, and bursting with character. We are keeping that heritage alive by making every vada fresh to order, using authentic ingredients and regional masalas that give Vidarbha food its unmistakable soul."
              />

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#menu"
                  className="inline-flex items-center gap-2 rounded-full bg-vada-red px-6 py-3.5 font-display text-sm tracking-wide text-papad shadow-lg transition-transform hover:scale-105 hover:bg-chili"
                >
                  Explore Our Vadas
                  <ArrowRight className="h-4 w-4" />
                </a>

                <a
                  href="#founders"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 font-body text-sm font-semibold text-papad transition-colors hover:border-turmeric/50 hover:bg-turmeric/10 hover:text-turmeric"
                >
                  Meet The Founders
                </a>
              </div>
            </div>

            {/* Photo + floating pull-quote card */}
            <div className="relative mx-auto w-full max-w-md pb-10 pl-8 pt-4 sm:pb-14 sm:pl-10">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl">
                <Image
                  src="/palak-vada.jpg"
                  alt="Freshly made crispy vada, Vidarbha Cha Vadewala"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 90vw, 420px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
              </div>

              <div className="absolute bottom-0 left-0 max-w-[270px] rounded-2xl border border-turmeric/30 bg-charcoal/95 p-6 shadow-2xl backdrop-blur">
                <span className="font-display text-5xl leading-none text-vada-red/40">
                  &ldquo;
                </span>
                <p className="-mt-4 font-body text-sm italic leading-relaxed text-papad-dim">
                  Dahi vada, sabudana vada, medu vada, fiery rassa vada and more
                  — each fried fresh, the authentic way.
                </p>
                <p className="mt-3 font-display text-xs tracking-widest text-turmeric">
                  — VIDARBHA CHA VADEWALA
                </p>
              </div>
            </div>
          </div>

          {/* Mission & Vision Dual Cards */}
          <div className="mt-20 grid gap-4 md:grid-cols-2">
            {/* Vision */}
            <div className="rounded-2xl border border-white/10 bg-charcoal/60 p-5 backdrop-blur transition-all duration-300 hover:border-turmeric/40">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-turmeric/10 text-turmeric">
                <Sparkles className="h-5 w-5" />
              </div>

              <h3 className="mt-4 font-display text-lg font-bold tracking-wide text-papad">
                Our Vision
              </h3>

              <p className="mt-2 font-body text-xs leading-relaxed text-papad-dim">
                To build Maharashtra&apos;s most celebrated single-focus street
                food brand, taking the bold culinary soul of Vidarbha to every
                corner of India through pristine quality and warm hospitality.
              </p>
            </div>

            {/* Mission */}
            <div className="rounded-2xl border border-white/10 bg-charcoal/60 p-5 backdrop-blur transition-all duration-300 hover:border-vada-red/40">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-vada-red/10 text-vada-red">
                <ChefHat className="h-5 w-5" />
              </div>

              <h3 className="mt-4 font-display text-lg font-bold tracking-wide text-papad">
                Our Mission
              </h3>

              <p className="mt-2 font-body text-xs leading-relaxed text-papad-dim">
                Serve delicious, affordable, freshly prepared vadas crafted with
                traditional recipes, zero preservatives, and a commitment to
                making every bite an authentic taste of home.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* =====================================================
          3. MENU SECTION (#menu)
      ====================================================== */}
      <section
        id="menu"
        className="relative scroll-mt-20 overflow-hidden bg-charcoal px-5 py-20 sm:py-24"
      >
        {/* Red gradient background */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(196,30,42,0.25),transparent_60%)]" />

        <div className="relative z-10 mx-auto max-w-6xl">
          {/* Heading */}
          <div className="mb-12 text-center">
            <span className="inline-block rounded-full border border-turmeric/40 bg-turmeric/10 px-5 py-1.5 font-body text-xs font-bold uppercase tracking-widest text-turmeric">
              Our Menu
            </span>

            <h2 className="mt-4 font-display text-3xl font-black leading-tight text-white sm:text-3xl lg:text-4xl">
              The Authentic Test of vidarbha.
            </h2>

            <p className="mt-3 font-body text-sm text-white/70 sm:text-base">
              Vidarbha Cha Vadewala brings the true flavours of Nagpur&rsquo;s street food to you
            </p>

            {/* Category Filter Buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {(Object.keys(CATEGORY_ITEMS) as CategoryName[]).map(
                (category) => {
                  const isActive = activeCategory === category;
                  return (
                    <button
                      key={category}
                      type="button"
                      onClick={() => setActiveCategory(category)}
                      className={
                        isActive
                          ? "rounded-full border border-turmeric bg-turmeric px-6 py-2.5 font-body text-xs font-black uppercase tracking-wider text-ink shadow-[0_0_15px_rgba(232,163,61,0.3)] transition-all duration-300"
                          : "rounded-full border border-turmeric/40 bg-white/5 px-6 py-2.5 font-body text-xs font-black uppercase tracking-wider text-white/80 transition-all duration-300 hover:border-turmeric hover:bg-turmeric/10 hover:text-turmeric"
                      }
                    >
                      {category}
                    </button>
                  );
                }
              )}
            </div>
          </div>

          {/* =====================================================
              CARDS GRID
          ====================================================== */}

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {activeItems.map((item, index) => (

              <article
                key={`${item.name}-${index}`}
                className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-white/10
        bg-ink
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-turmeric/60
        hover:shadow-[0_15px_30px_rgba(0,0,0,0.5)]
      "
              >

                {/* FOOD IMAGE */}
                <div className="relative h-60 w-full overflow-hidden bg-black/40">
                  <Image
                    src={item.image}
                    alt={`${item.name} - Vidarbha Cha Vadewala`}
                    fill
                    className="
            object-cover
            transition-transform
            duration-500
            group-hover:scale-105
          "
                    sizes="
            (max-width: 640px) 100vw,
            (max-width: 1024px) 50vw,
            25vw
          "
                  />
                </div>

                {/* NAME + PRICE */}
                <div className="p-3">
                  <div className="flex items-center justify-between gap-3">
                    <h2
                      className="
              font-display
              text-lg
              font-medium
              tracking-wide
              text-papad
              sm:text-xl
            "
                    >
                      {item.name}
                    </h2>

                    <span
                      className="
              shrink-0
              rounded-full
              bg-turmeric/10
              px-3
              py-1.5
              font-body
              text-sm
              font-black
              text-turmeric
            "
                    >
                      {item.price}
                    </span>
                  </div>
                </div>

              </article>

            ))}

          </div>

        </div>
      </section>

        {/* ================= FOUNDER ================= */}
<section id="founders" className="relative overflow-hidden bg-ink px-5 py-20 sm:py-24">

  {/* Background glow */}
  <div className="pointer-events-none absolute inset-0">
    <div className="absolute left-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-vada-red/10 blur-[130px]" />
    <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-turmeric/5 blur-[120px]" />
  </div>

  <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">

    {/* ================= LEFT CONTENT ================= */}
    <div>

      <span className="inline-block rounded-full border border-turmeric/30 bg-turmeric/10 px-5 py-2 font-body text-xs font-bold uppercase tracking-[0.16em] text-turmeric">
         Founder
      </span>

      <h1 className="mt-5 font-display text-3xl font-black leading-[1.08] tracking-tight text-white sm:text-4xl lg:text-[35px]">
        <span className="block whitespace-nowrap">
          Turning a Street Food
        </span>

        <span className="block whitespace-nowrap text-vada-red">
          Dream into a Movement
        </span>
      </h1>

      <div className="relative mt-6 max-w-2xl rounded-2xl border border-white/10 bg-white/[0.05] px-6 py-6 shadow-xl backdrop-blur-md sm:px-7">
        <span className="absolute -top-5 left-6 font-display text-4xl leading-none text-turmeric/50">
          "
        </span>

        <p className="font-body text-base italic leading-8 text-white/75 sm:text-lg">
          Vidarbha Cha Vadewala was built from a simple passion — to bring
          the authentic taste of Vidarbha to every plate. What started with
          a love for crispy, flavourful vadas is becoming a brand built
          around tradition, freshness and the taste of home.
        </p>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        <span className="rounded-full border border-turmeric/30 bg-turmeric/5 px-4 py-2 font-body text-xs font-semibold text-white/80">
          Authentic Taste
        </span>
        <span className="rounded-full border border-turmeric/30 bg-turmeric/5 px-4 py-2 font-body text-xs font-semibold text-white/80">
          Fresh Every Day
        </span>
        <span className="rounded-full border border-turmeric/30 bg-turmeric/5 px-4 py-2 font-body text-xs font-semibold text-white/80">
          Proudly Vidarbha
        </span>
        <span className="rounded-full border border-turmeric/30 bg-turmeric/5 px-4 py-2 font-body text-xs font-semibold text-white/80">
          Made With Passion
        </span>
      </div>

    </div>

    {/* ================= RIGHT — FOUNDER IMAGE ================= */}
    <div className="relative mx-auto w-full max-w-[380px] lg:ml-auto">

      <div className="absolute -right-5 -top-5 h-full w-full rounded-[3rem] bg-vada-red/20" />
      <div className="absolute -right-10 -bottom-10 h-full w-full rounded-[3rem] bg-turmeric/10" />

      <div className="relative rounded-[3rem] border-[1px] border-turmeric/90 bg-charcoal p-2 shadow-2xl">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-charcoal">

          <Image
            src="/founderss.jpg"
            alt="Founder of Vidarbha Cha Vadewala"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 90vw, 430px"
          />

          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

          <div className="absolute bottom-5 left-5 right-5 rounded-[1.5rem] border border-white/10 bg-white/20 px-5 py-4 text-center shadow-xl backdrop-blur-md">
            <p className="font-display text-lg font-black text-white sm:text-xl">
              Pratik D. Gawande
            </p>
            <p className="mt-1 font-body text-xs font-semibold uppercase tracking-[0.18em] text-turmeric">
              Founder
            </p>
          </div>

        </div>
      </div>
    </div>

  </div>
</section>

{/* =================co FOUNDER ================= */}
<section className="relative overflow-hidden bg-ink px-5 py-20 sm:py-24">

  <div className="pointer-events-none absolute inset-0">
    <div className="absolute left-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-vada-red/10 blur-[130px]" />
    <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-turmeric/5 blur-[120px]" />
  </div>

  <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[0.85fr_1.15fr]">

    {/* ================= LEFT — FOUNDER IMAGE ================= */}
    <div className="relative order-first mx-auto w-full max-w-[380px] lg:order-1 lg:ml-0">

      <div className="absolute -right-5 -top-5 h-full w-full rounded-[3rem] bg-vada-red/20" />
      <div className="absolute -bottom-10 -right-10 h-full w-full rounded-[3rem] bg-turmeric/10" />

      <div className="relative rounded-[3rem] border-[1px] border-turmeric/90 bg-charcoal p-2 shadow-2xl">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-charcoal">

          <Image
            src="/co-founderss.jpg"
            alt="Co-Founder of Vidarbha Cha Vadewala"
            fill
            priority
            className="object-cover object-top"
            sizes="(max-width: 1024px) 90vw, 380px"
          />

          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

          <div className="absolute bottom-5 left-5 right-5 rounded-[1.5rem] border border-white/10 bg-white/20 px-5 py-4 text-center shadow-xl backdrop-blur-md">
            <p className="font-display text-lg font-black text-white sm:text-xl">
              Pranjali Maske
            </p>
            <p className="mt-1 font-body text-xs font-semibold uppercase tracking-[0.18em] text-turmeric">
              Co-Founder
            </p>
          </div>

        </div>
      </div>
    </div>

    {/* ================= RIGHT — FOUNDER CONTENT ================= */}
    <div className="order-2">

      <span className="inline-block rounded-full border border-turmeric/30 bg-turmeric/10 px-5 py-2 font-body text-xs font-bold uppercase tracking-[0.16em] text-turmeric">
         Co-Founder
      </span>

      <h1 className="mt-5 font-display text-3xl font-black leading-[1.08] tracking-tight text-white sm:text-4xl lg:text-[35px]">
        <span className="block whitespace-nowrap">
          Rooted in Tradition
        </span>
        <span className="block whitespace-nowrap text-vada-red">
          Made for Today&apos;s Generation
        </span>
      </h1>

      <div className="relative mt-6 max-w-2xl rounded-2xl border border-white/10 bg-white/[0.05] px-6 py-6 shadow-xl backdrop-blur-md sm:px-7">
        <span className="absolute -top-5 left-6 font-display text-4xl leading-none text-turmeric/50">
          "
        </span>
        <p className="font-body text-base italic leading-8 text-white/75 sm:text-lg">
          We bring the authentic flavours of Vidarbha to a new generation, blending time-honoured recipes with a fresh, modern approach. Every vada is prepared with care, served fresh, and made to keep the taste of tradition alive.
        </p>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        <span className="rounded-full border border-turmeric/30 bg-turmeric/5 px-4 py-2 font-body text-xs font-semibold text-white/80">
          Authentic Taste
        </span>
        <span className="rounded-full border border-turmeric/30 bg-turmeric/5 px-4 py-2 font-body text-xs font-semibold text-white/80">
          Fresh Every Day
        </span>
        <span className="rounded-full border border-turmeric/30 bg-turmeric/5 px-4 py-2 font-body text-xs font-semibold text-white/80">
          Proudly Vidarbha
        </span>
        <span className="rounded-full border border-turmeric/30 bg-turmeric/5 px-4 py-2 font-body text-xs font-semibold text-white/80">
          Made With Passion
        </span>
      </div>

    </div>

  </div>
</section>
{/* =====================================================
    FRANCHISE — unified section
===================================================== */}
<section
  id="franchise"
  className="
    relative
    scroll-mt-20
    overflow-hidden
    bg-[#15120f]
    px-5
    pb-20
    pt-20
    sm:pb-24
    sm:pt-24
  "
>
  {/* =================================================
      BACKGROUND — MATCHES MENU SECTION
  ================================================= */}
  <div className="pointer-events-none absolute inset-0">

    {/* Main warm background */}
    <div className="absolute inset-0 bg-[#15120f]" />

    {/* Subtle top-center red/brown glow */}
    <div
      className="
        absolute
        left-1/2
        top-[-120px]
        h-[500px]
        w-[900px]
        -translate-x-1/2
        rounded-full
        bg-[#5b1818]/35
        blur-[120px]
      "
    />

    {/* Very subtle secondary glow */}
    <div
      className="
        absolute
        left-1/2
        top-0
        h-[300px]
        w-[600px]
        -translate-x-1/2
        rounded-full
        bg-[#7a2020]/10
        blur-[100px]
      "
    />

  </div>


  {/* =================================================
      HERO TEXT
  ================================================= */}
  <div className="relative z-10 mx-auto max-w-5xl text-center">

    {/* Badge */}
    <span
      className="
        inline-block
        rounded-full
        border
        border-turmeric/50
        bg-turmeric/10
        px-5
        py-1.5
        font-body
        text-[11px]
        font-black
        uppercase
        tracking-[0.18em]
        text-turmeric
      "
    >
      Franchise Opportunity
    </span>

    {/* Heading */}
    <h1
      className="
        mt-4
        font-display
        text-3xl
        font-black
        leading-tight
        tracking-wide
        text-white
        sm:text-4xl
        lg:text-[38px]
      "
    >
      Bring Our Flavours to Your City.
    </h1>

    {/* Description */}
    <p
      className="
        mx-auto
        mt-3
        max-w-2xl
        font-body
        text-sm
        leading-6
        text-white/65
        sm:text-[15px]
      "
    >
      Bring the authentic taste of Vidarbha to your city with a modern food
      concept built around fresh vadas, bold flavours and a memorable
      customer experience.
    </p>

  </div>


  {/* =================================================
      WHY PARTNER CONTENT
  ================================================= */}
  <div
    id="why-partner"
    className="
      relative
      z-10
      mx-auto
      mt-14
      max-w-6xl
    "
  >
    <div
      className="
        grid
        items-center
        gap-10
        lg:grid-cols-[0.9fr_1.1fr]
        lg:gap-14
      "
    >

      {/* =================================================
          LEFT CONTENT
      ================================================= */}
      <div>

        {/* Badge */}
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
            text-[10px]
            font-black
            uppercase
            tracking-[0.18em]
            text-turmeric
          "
        >
          Why Partner With Us?
        </span>

        {/* Heading */}
        <h2
          className="
            mt-5
            font-display
            text-3xl
            font-black
            leading-[1.05]
            tracking-tight
            text-white
            sm:text-4xl
          "
        >
          What Makes Us
          <span className="block text-vada-red">
            Different?
          </span>
        </h2>

        {/* Paragraph 1 */}
        <p
          className="
            mt-6
            max-w-xl
            font-body
            text-[13px]
            leading-7
            text-white/75
          "
        >
          Vidarbha Cha Vadewala brings the flavours of Vidarbha into a focused
          and modern food experience. Our concept combines familiar regional
          taste with a fresh, customer-friendly brand identity.
        </p>

        {/* Paragraph 2 */}
        <p
          className="
            mt-3
            max-w-xl
            font-body
            text-[13px]
            leading-7
            text-white/75
          "
        >
          Our vision is simple — create a memorable food experience around
          fresh vadas, authentic flavours and consistent service while
          building a brand that can grow with its partners.
        </p>

        {/* Feature Pills */}
        <div className="mt-5 flex flex-wrap gap-2">

          <span
            className="
              rounded-full
              border
              border-turmeric/40
              bg-turmeric/5
              px-4
              py-2
              font-body
              text-[10px]
              font-bold
              text-turmeric
            "
          >
            Authentic Flavours
          </span>

          <span
            className="
              rounded-full
              border
              border-turmeric/40
              bg-turmeric/5
              px-4
              py-2
              font-body
              text-[10px]
              font-bold
              text-turmeric
            "
          >
            Fresh Food
          </span>

          <span
            className="
              rounded-full
              border
              border-turmeric/40
              bg-turmeric/5
              px-4
              py-2
              font-body
              text-[10px]
              font-bold
              text-turmeric
            "
          >
            Modern Brand
          </span>

        </div>

        {/* CTA */}
        <div className="mt-6">

          <a
            href="#franchise-form"
            className="
              inline-flex
              items-center
              rounded-full
              bg-vada-red
              px-6
              py-3
              font-body
              text-xs
              font-black
              text-white
              shadow-[0_10px_30px_rgba(196,30,42,0.25)]
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-red-700
              hover:shadow-[0_15px_35px_rgba(196,30,42,0.35)]
            "
          >
            Become a Partner
            <span className="ml-2 text-sm">
              →
            </span>
          </a>

        </div>
      </div>


      {/* =================================================
          RIGHT — OUTLET IMAGE
      ================================================= */}
      <div
        className="
          relative
          mx-auto
          w-full
          max-w-[570px]
        "
      >

        {/* Image glow */}
        <div
          className="
            absolute
            -inset-2
            rounded-[2rem]
            bg-turmeric/5
            blur-xl
          "
        />

        {/* Image Frame */}
        <div
          className="
            relative
            overflow-hidden
            rounded-[2rem]
            border
            border-white/10
            bg-[#15120f]
            p-2
            shadow-2xl
          "
        >

          <div
            className="
              relative
              aspect-[16/10]
              overflow-hidden
              rounded-[1.5rem]
            "
          >

            <Image
              src="/franchise-hero.jpg"
              alt="Vidarbha Cha Vadewala outlet"
              fill
              className="
                object-cover
                transition-transform
                duration-700
                hover:scale-105
              "
              sizes="(max-width: 1024px) 95vw, 570px"
            />

            {/* Dark Overlay */}
            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/60
                via-transparent
                to-black/10
              "
            />

            {/* Image Label */}
            <div className="absolute bottom-5 left-5">

              <span
                className="
                  rounded-full
                  border
                  border-white/20
                  bg-black/70
                  px-4
                  py-2
                  font-body
                  text-[10px]
                  font-black
                  uppercase
                  tracking-[0.15em]
                  text-white
                  backdrop-blur-md
                "
              >
                Vidarbha Cha Vadewala
              </span>

            </div>

          </div>
        </div>
      </div>

    </div>
  </div>
</section>

              {/* =====================================================
    FRANCHISE ENQUIRY
===================================================== */}
<section
  id="franchise-form"
  className="
    relative
    overflow-hidden
    bg-[#0b0908]
    px-6
    py-10
    sm:px-8
    sm:py-12
    lg:px-12
    xl:px-16
  "
>
  {/* Background glow */}
  <div className="pointer-events-none absolute inset-0">
    <div className="absolute left-0 top-1/2 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-vada-red/5 blur-[100px]" />

    <div className="absolute right-0 top-0 h-[250px] w-[350px] rounded-full bg-turmeric/5 blur-[100px]" />
  </div>

  <div className="relative z-10 mx-auto max-w-6xl">

    <div
      className="
        grid
        items-center
        gap-7
        lg:grid-cols-[0.9fr_1.1fr]
        lg:gap-10
        xl:gap-12
      "
    >

      {/* =================================================
          LEFT — CONTENT
      ================================================= */}
      <div>

        {/* Badge */}
        <span
          className="
            inline-block
            rounded-full
            border
            border-turmeric/40
            bg-turmeric/5
            px-4
            py-1.5
            font-body
            text-[10px]
            font-black
            uppercase
            tracking-[0.18em]
            text-turmeric
          "
        >
          Start Your Journey
        </span>


        {/* Heading */}
        <h2
          className="
            mt-4
            max-w-xl
            font-display
            text-3xl
            font-black
            leading-[1.05]
            tracking-tight
            text-white
            sm:text-4xl
            lg:text-[38px]
          "
        >
          Ready to bring
          <span className="block text-vada-red">
            Vidarbha to your city?
          </span>
        </h2>


        {/* Description */}
        <p
          className="
            mt-3
            max-w-lg
            font-body
            text-sm
            leading-6
            text-white/70
            sm:text-[15px]
          "
        >
          Tell us about yourself, your preferred city and the kind of outlet
          you are interested in.
        </p>


        {/* Brand Card */}
        <div
          className="
            mt-5
            flex
            items-center
            gap-4
            rounded-2xl
            border
            border-white/10
            bg-[#171411]
            px-5
            py-4
          "
        >
          {/* Icon */}
          <div
            className="
              flex
              h-11
              w-11
              shrink-0
              items-center
              justify-center
              rounded-xl
              bg-vada-red/10
              text-vada-red
            "
          >
            <Handshake className="h-5 w-5" />
          </div>


          {/* Text */}
          <div>
            <p className="font-display text-base font-black text-white">
              Authentic taste.
            </p>

            <p className="mt-0.5 font-body text-xs text-white/70">
              Modern brand. Shared vision.
            </p>
          </div>
        </div>


        {/* Benefits */}
        <div className="mt-5 space-y-3">

          <div className="flex items-center gap-3">
            <CircleCheck className="h-[18px] w-[18px] shrink-0 text-turmeric" />

            <span className="font-body text-sm text-white/80">
              Discuss your franchise requirements
            </span>
          </div>


          <div className="flex items-center gap-3">
            <CircleCheck className="h-[18px] w-[18px] shrink-0 text-turmeric" />

            <span className="font-body text-sm text-white/80">
              Explore suitable outlet formats
            </span>
          </div>


          <div className="flex items-center gap-3">
            <CircleCheck className="h-[18px] w-[18px] shrink-0 text-turmeric" />

            <span className="font-body text-sm text-white/80">
              Connect with our franchise team
            </span>
          </div>

        </div>

      </div>


      {/* =================================================
          RIGHT — FORM
      ================================================= */}
      <div
        className="
          w-full
          rounded-[1.75rem]
          border
          border-white/10
          bg-[#171411]
          p-5
          shadow-2xl
          sm:p-6
        "
      >

        <FranchiseWhatsAppForm className="space-y-4">

          {/* Row 1 */}
          <div className="grid gap-4 sm:grid-cols-2">

            {/* Full Name */}
            <div>
              <label
                htmlFor="franchise-name"
                className="mb-1.5 block font-body text-xs font-bold text-white"
              >
                Full Name
              </label>

              <input
                id="franchise-name"
                name="name"
                type="text"
                required
                placeholder="Your full name"
                className="
                  h-11
                  w-full
                  rounded-xl
                  border
                  border-white/10
                  bg-[#090909]
                  px-4
                  font-body
                  text-sm
                  text-white
                  outline-none
                  placeholder:text-white/25
                  focus:border-turmeric/60
                  focus:ring-1
                  focus:ring-turmeric/30
                "
              />
            </div>


            {/* Phone */}
            <div>
              <label
                htmlFor="franchise-phone"
                className="mb-1.5 block font-body text-xs font-bold text-white"
              >
                Phone Number
              </label>

              <input
                id="franchise-phone"
                name="phone"
                type="tel"
                required
                placeholder="Your phone number"
                className="
                  h-11
                  w-full
                  rounded-xl
                  border
                  border-white/10
                  bg-[#090909]
                  px-4
                  font-body
                  text-sm
                  text-white
                  outline-none
                  placeholder:text-white/25
                  focus:border-turmeric/60
                  focus:ring-1
                  focus:ring-turmeric/30
                "
              />
            </div>

          </div>


          {/* Row 2 */}
          <div className="grid gap-4 sm:grid-cols-2">

            {/* Email */}
            <div>
              <label
                htmlFor="franchise-email"
                className="mb-1.5 block font-body text-xs font-bold text-white"
              >
                Email Address
              </label>

              <input
                id="franchise-email"
                name="email"
                type="email"
                required
                placeholder="Your email"
                className="
                  h-11
                  w-full
                  rounded-xl
                  border
                  border-white/10
                  bg-[#090909]
                  px-4
                  font-body
                  text-sm
                  text-white
                  outline-none
                  placeholder:text-white/25
                  focus:border-turmeric/60
                  focus:ring-1
                  focus:ring-turmeric/30
                "
              />
            </div>


            {/* City */}
            <div>
              <label
                htmlFor="franchise-city"
                className="mb-1.5 block font-body text-xs font-bold text-white"
              >
                Preferred City
              </label>

              <input
                id="franchise-city"
                name="city"
                type="text"
                required
                placeholder="City"
                className="
                  h-11
                  w-full
                  rounded-xl
                  border
                  border-white/10
                  bg-[#090909]
                  px-4
                  font-body
                  text-sm
                  text-white
                  outline-none
                  placeholder:text-white/25
                  focus:border-turmeric/60
                  focus:ring-1
                  focus:ring-turmeric/30
                "
              />
            </div>

          </div>


          

          {/* Message */}
          <div>
            <label
              htmlFor="franchise-message"
              className="mb-1.5 block font-body text-xs font-bold text-white"
            >
              Message
            </label>

            <textarea
              id="franchise-message"
              name="message"
              rows={3}
              placeholder="Tell us about your location, plans or anything you'd like to discuss..."
              className="
                w-full
                resize-none
                rounded-xl
                border
                border-white/10
                bg-[#090909]
                px-4
                py-3
                font-body
                text-sm
                leading-6
                text-white
                outline-none
                placeholder:text-white/25
                focus:border-turmeric/60
                focus:ring-1
                focus:ring-turmeric/30
              "
            />
          </div>


          {/* Submit */}
          <button
            type="submit"
            className="
              flex
              h-14
              w-full
              items-center
              justify-center
              rounded-full
              bg-vada-red
              px-6
              font-display
              text-sm
              font-black
              text-white
              shadow-[0_10px_25px_rgba(196,30,42,0.22)]
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-red-700
              hover:shadow-[0_14px_30px_rgba(196,30,42,0.32)]
            "
          >
            Submit Franchise Enquiry

            <span className="ml-2 text-base">
              →
            </span>
          </button>


          {/* Note */}
          <p className="text-center font-body text-[11px] text-white/40">
            Our team will review your enquiry and connect with you.
          </p>

        </FranchiseWhatsAppForm>

      </div>

    </div>
  </div>
</section>
              


         {/* =====================================================
    7. CONTACT SECTION (#contact)
===================================================== */}
<section
  id="contact"
  className="
    relative
    scroll-mt-20
    overflow-hidden
    bg-charcoal
    px-5
    py-14
    sm:px-8
    sm:py-16
    lg:px-10
  "
>
  {/* =================================================
      BACKGROUND — SAME DARK STYLE AS MENU
  ================================================= */}
  <div className="pointer-events-none absolute inset-0">

    {/* Top center red glow */}
    <div
      className="
        absolute
        left-1/2
        top-0
        h-[420px]
        w-[800px]
        -translate-x-1/2
        rounded-full
        bg-vada-red/10
        blur-[120px]
      "
    />

    {/* Left red glow */}
    <div
      className="
        absolute
        -left-40
        top-1/3
        h-[400px]
        w-[400px]
        rounded-full
        bg-vada-red/5
        blur-[120px]
      "
    />

    {/* Right turmeric glow */}
    <div
      className="
        absolute
        -right-40
        bottom-0
        h-[400px]
        w-[400px]
        rounded-full
        bg-turmeric/5
        blur-[120px]
      "
    />

  </div>


  {/* =================================================
      MAIN CONTENT
  ================================================= */}
  <div className="relative z-10 mx-auto max-w-6xl">

    {/* =================================================
        HEADER
    ================================================= */}
    <div className="text-center">

      <span
        className="
          inline-block
          rounded-full
          border
          border-turmeric/40
          bg-turmeric/5
          px-5
          py-1.5
          font-body
          text-[10px]
          font-black
          uppercase
          tracking-[0.18em]
          text-turmeric
        "
      >
        Contact Us
      </span>


      <h2
        className="
          mx-auto
          mt-4
          max-w-3xl
          font-display
          text-3xl
          font-black
          leading-[1.05]
          tracking-tight
          text-papad
          sm:text-4xl
          lg:text-[38px]
        "
      >
        Questions, feedback, or a
        <span className="block">
          location you want to see next?
        </span>
      </h2>


      <p
        className="
          mx-auto
          mt-3
          max-w-2xl
          font-body
          text-sm
          leading-6
          text-papad-dim
        "
      >
        Reach out and the team will get back to you — usually within a
        couple of days.
      </p>

    </div>


    {/* =================================================
        CONTACT CONTENT
    ================================================= */}
    <div
      className="
        mt-10
        grid
        items-start
        gap-8
        lg:grid-cols-[0.9fr_1.1fr]
        lg:gap-8
      "
    >

      {/* =================================================
          LEFT — CONTACT DETAILS
      ================================================= */}
      <div className="space-y-3">

        {/* HEAD OFFICE */}
        <div
          className="
            rounded-2xl
            border
            border-white/10
            bg-ink/70
            px-4
            py-4
            backdrop-blur-sm
            transition-all
            duration-300
            hover:border-turmeric/30
          "
        >
          <p
            className="
              font-body
              text-[10px]
              font-black
              uppercase
              tracking-wider
              text-turmeric
            "
          >
            Head Office
          </p>

          <p
            className="
              mt-1
              font-body
              text-xs
              leading-5
              text-papad-dim
            "
          >
            Itwari Market Road, Nagpur, Vidarbha,
            Maharashtra 440002
          </p>
        </div>


        {/* PHONE */}
        <div
          className="
            rounded-2xl
            border
            border-white/10
            bg-ink/70
            px-4
            py-4
            backdrop-blur-sm
            transition-all
            duration-300
            hover:border-turmeric/30
          "
        >
          <p
            className="
              font-body
              text-[10px]
              font-black
              uppercase
              tracking-wider
              text-turmeric
            "
          >
            Phone
          </p>

          <a
            href="tel:+919999999999"
            className="
              mt-1
              block
              font-body
              text-xs
              text-papad-dim
              transition-colors
              hover:text-turmeric
            "
          >
            +91 99999 99999
          </a>
        </div>


        {/* EMAIL */}
        <div
          className="
            rounded-2xl
            border
            border-white/10
            bg-ink/70
            px-4
            py-4
            backdrop-blur-sm
            transition-all
            duration-300
            hover:border-turmeric/30
          "
        >
          <p
            className="
              font-body
              text-[10px]
              font-black
              uppercase
              tracking-wider
              text-turmeric
            "
          >
            Email
          </p>

          <a
            href="mailto:hello@vidarbhachavadewala.com"
            className="
              mt-1
              block
              font-body
              text-xs
              text-papad-dim
              transition-colors
              hover:text-turmeric
            "
          >
            hello@vidarbhachavadewala.com
          </a>
        </div>


        {/* HOURS */}
        <div
          className="
            rounded-2xl
            border
            border-white/10
            bg-ink/70
            px-4
            py-4
            backdrop-blur-sm
            transition-all
            duration-300
            hover:border-turmeric/30
          "
        >
          <p
            className="
              font-body
              text-[10px]
              font-black
              uppercase
              tracking-wider
              text-turmeric
            "
          >
            Hours
          </p>

          <p
            className="
              mt-1
              font-body
              text-xs
              text-papad-dim
            "
          >
            Daily, 10:00 AM – 11:00 PM
          </p>
        </div>


        {/* =================================================
            MAP
        ================================================= */}
        <div
          className="
            overflow-hidden
            rounded-2xl
            border
            border-white/10
            bg-ink
            shadow-xl
          "
        >
          <div className="relative h-[185px] w-full">

            <iframe
              title="Vidarbha Cha Vadewala Location"
              src="https://www.google.com/maps?q=Itwari%20Market%20Road%2C%20Nagpur%2C%20Maharashtra&output=embed"
              className="absolute inset-0 h-full w-full border-0 grayscale"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Map overlay */}
            <div
              className="
                pointer-events-none
                absolute
                inset-0
                bg-black/10
              "
            />

          </div>
        </div>

      </div>


      {/* =================================================
          RIGHT — CONTACT FORM
      ================================================= */}
      <div
        className="
          rounded-3xl
          border
          border-white/10
          bg-ink/80
          p-5
          shadow-2xl
          backdrop-blur-sm
          sm:p-6
        "
      >

        <EnquiryForm kind="contact" />

      </div>

    </div>

  </div>
</section>
</>
);
}