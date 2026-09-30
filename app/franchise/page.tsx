import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FranchiseEnquiryForm from "../components/FranchiseEnquiryForm";
import {
  BadgeIndianRupee,
  Building2,
  ChefHat,
  CircleCheck,
  Handshake,
  Headphones,
  Leaf,
  MapPin,
  Megaphone,
  PackageCheck,
  Settings2,
  ShoppingBag,
  Sparkles,
  Store,
  Users,
  Utensils,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Franchise | Vidarbha Cha Vadewala",
  description:
    "Bring the authentic taste of Vidarbha to your city with Vidarbha Cha Vadewala.",
};

/* =========================================================
   18 REASONS
========================================================= */

const REASONS = [
  { icon: BadgeIndianRupee, title: "Focused Setup" },
  { icon: CircleCheck, title: "Strong Food Concept" },
  { icon: Megaphone, title: "Marketing Support" },
  { icon: Users, title: "Training Support" },
  { icon: Settings2, title: "Operations Support" },
  { icon: Headphones, title: "Ongoing Guidance" },
  { icon: PackageCheck, title: "Supply Guidance" },
  { icon: ShoppingBag, title: "Quality Products" },
  { icon: Leaf, title: "Fresh Ingredients" },
  { icon: ChefHat, title: "Traditional Recipes" },
  { icon: Utensils, title: "Freshly Served" },
  { icon: Store, title: "Multiple Formats" },
  { icon: MapPin, title: "Location Guidance" },
  { icon: Handshake, title: "Partner Friendly" },
  { icon: Sparkles, title: "Modern Branding" },
  { icon: Building2, title: "Outlet Guidance" },
  { icon: Users, title: "Team Support" },
  { icon: CircleCheck, title: "Quality Focused" },
];

/* =========================================================
   FRANCHISE FORMATS
========================================================= */

const FORMATS = [
  {
    icon: Store,
    number: "01",
    title: "Vada Counter",
    tag: "COMPACT",
    description:
      "A focused format designed for quick service, high visibility and a memorable Vidarbha food experience.",
  },
  {
    icon: Utensils,
    number: "02",
    title: "Quick Service Outlet",
    tag: "POPULAR",
    description:
      "A complete quick-service format serving fresh vadas, beverages and signature flavours.",
  },
  {
    icon: Building2,
    number: "03",
    title: "Café Format",
    tag: "PREMIUM",
    description:
      "A larger format combining signature vadas, beverages and a comfortable customer environment.",
  },
];

/* =========================================================
   SUPPORT
========================================================= */

const SUPPORT = [
  {
    number: "01",
    title: "Brand Setup",
    description:
      "Guidance for creating a consistent Vidarbha Cha Vadewala experience.",
  },
  {
    number: "02",
    title: "Food & Training",
    description:
      "Guidance around preparation, presentation and food consistency.",
  },
  {
    number: "03",
    title: "Marketing",
    description:
      "Brand-led marketing direction for your outlet and launch.",
  },
  {
    number: "04",
    title: "Operations",
    description:
      "Practical guidance for day-to-day outlet operations and service.",
  },
  {
    number: "05",
    title: "Location Guidance",
    description:
      "Discussion around potential locations and selected outlet formats.",
  },
  {
    number: "06",
    title: "Launch Support",
    description:
      "Support during preparation and the opening stage of your outlet.",
  },
];

/* =========================================================
   JOURNEY
========================================================= */

const JOURNEY = [
  {
    number: "01",
    title: "Submit Enquiry",
    description: "Tell us about yourself and your franchise plans.",
  },
  {
    number: "02",
    title: "Connect With Us",
    description: "Discuss your goals and preferred location.",
  },
  {
    number: "03",
    title: "Choose Your Format",
    description: "Select the outlet format that fits your plans.",
  },
  {
    number: "04",
    title: "Location Discussion",
    description: "Review your potential location and requirements.",
  },
  {
    number: "05",
    title: "Setup & Training",
    description: "Prepare your outlet with brand and food guidance.",
  },
  {
    number: "06",
    title: "Launch Your Outlet",
    description: "Open your outlet and start serving Vidarbha flavours.",
  },
];

/* =========================================================
   PAGE
========================================================= */

export default function FranchisePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-ink text-papad">

      
        {/* =====================================================
    FRANCHISE HERO
===================================================== */}

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

  {/* Subtle bottom glow */}

  <div
    className="
      pointer-events-none
      absolute
      bottom-0
      left-1/2
      h-[180px]
      w-[500px]
      -translate-x-1/2
      rounded-full
      bg-turmeric/5
      blur-[100px]
    "
  />

  {/* Content */}

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
      Franchise Opportunity
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
      Bring Our Flavours to Your City.
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
      Bring the authentic taste of Vidarbha to your city with
      a modern food concept built around fresh vadas, bold
      flavours and a memorable customer experience.
    </p>
{/* Buttons */}

<div className="mt-6 flex flex-wrap justify-center gap-3">

  <Link
    href="#franchise-form"
    className="
      rounded-full
      border
      border-turmeric
      bg-turmeric
      px-2
      py-2.5
      font-body
      text-xs
      font-black
      uppercase
      tracking-wider
      text-ink
      shadow-lg
      transition-all
      duration-300
      hover:-translate-y-1
      hover:shadow-xl
    "
  >
    Start Your Franchise
    <span className="ml-2">→</span>
  </Link>

  <Link
    href="#why-partner"
    className="
      rounded-full
      border
      border-turmeric/40
      bg-white/5
      px-6
      py-2.5
      font-body
      text-xs
      font-black
      uppercase
      tracking-wider
      text-white/80
      backdrop-blur-md
      transition-all
      duration-300
      hover:border-turmeric
      hover:bg-turmeric/10
      hover:text-turmeric
    "
  >
    Explore Opportunity
  </Link>

</div>
    

    

      

  </div>

</section>

      
      {/* =====================================================
          WHY PARTNER
      ===================================================== */}

      <section
        id="why-partner"
        className="relative overflow-hidden bg-ink px-5 "
      >

        <div className="pointer-events-none absolute left-[-150px] top-20 h-[450px] w-[450px] rounded-full bg-vada-red/10 blur-[140px]" />

        <div className="relative mx-auto max-w-6xl">

          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">

            {/* CONTENT */}

            <div>

              <span className="inline-flex rounded-full border border-turmeric/30 bg-turmeric/10 px-5 py-1.5 font-body text-[9px] font-black uppercase tracking-[0.16em] text-turmeric">
                Why Partner With Us?
              </span>

              <h2 className="mt-5 font-display text-3xl font-black leading-tight text-papad sm:text-4xl">
                What Makes Us
                <span className="block text-vada-red">
                  Different?
                </span>
              </h2>

              <p className="mt-4 font-body text-sm leading-7 text-papad-dim">
                Vidarbha Cha Vadewala brings the flavours of Vidarbha
                into a focused and modern food experience. Our concept
                combines familiar regional taste with a fresh,
                customer-friendly brand identity.
              </p>

              <p className="mt-3 font-body text-sm leading-7 text-papad-dim">
                Our vision is simple — create a memorable food
                experience around fresh vadas, authentic flavours and
                consistent service while building a brand that can
                grow with its partners.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">

                <span className="rounded-full border border-turmeric/30 bg-turmeric/5 px-4 py-2 font-body text-xs font-bold text-turmeric">
                  Authentic Flavours
                </span>

                <span className="rounded-full border border-turmeric/30 bg-turmeric/5 px-4 py-2 font-body text-xs font-bold text-turmeric">
                  Fresh Food
                </span>

                <span className="rounded-full border border-turmeric/30 bg-turmeric/5 px-4 py-2 font-body text-xs font-bold text-turmeric">
                  Modern Brand
                </span>

              </div>

              <Link
                href="#franchise-form"
                className="mt-7 inline-flex rounded-full bg-vada-red px-7 py-3.5 font-body text-sm font-black text-white shadow-lg shadow-vada-red/20 transition hover:-translate-y-1"
              >
                Become a Partner
                <span className="ml-2">→</span>
              </Link>

            </div>

            {/* IMAGE */}

            <div className="relative">

              <div className="absolute -inset-4 rounded-[2rem] bg-vada-red/10 blur-2xl" />

              <div className="relative rounded-[2rem] border border-white/10 bg-charcoal p-2 shadow-2xl">

                <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem]">

                  <Image
                    src="/franchise-hero.jpg"
                    alt="Vidarbha Cha Vadewala outlet"
                    fill
                    className="object-cover transition duration-700 hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 55vw"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                  <div className="absolute bottom-5 left-5">

                    <span className="rounded-full border border-white/20 bg-black/50 px-4 py-2 font-body text-[10px] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-md">
                      Vidarbha Cha Vadewala
                    </span>

                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* 18 REASONS */}

          <div className="mt-16">

            <div className="text-center">

              <span className="font-body text-[9px] font-black uppercase tracking-[0.18em] text-turmeric">
                Built Around The Brand
              </span>

              <h3 className="mt-2 font-display text-xl font-black text-papad sm:text-2xl">
                18 Reasons to Partner With Us
              </h3>

              <div className="mx-auto mt-3 h-1 w-10 rounded-full bg-vada-red" />

            </div>

            <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">

              {REASONS.map((reason, index) => {

                const Icon = reason.icon;

                return (
                  <article
                    key={reason.title}
                    className="group relative flex min-h-[100px] flex-col items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-charcoal px-2 py-4 text-center transition duration-300 hover:-translate-y-1 hover:border-turmeric/40 hover:bg-white/[0.04]"
                  >

                    <span className="absolute right-3 top-2 font-display text-[9px] font-black text-white/10">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-turmeric/10 text-turmeric transition duration-300 group-hover:bg-vada-red group-hover:text-white">
                      <Icon size={16} strokeWidth={2} />
                    </div>

                    <p className="mt-2 font-body text-[9px] font-bold leading-3 text-papad-dim">
                      {reason.title}
                    </p>

                  </article>
                );

              })}

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          FORMATS
      ===================================================== */}

      <section className="relative overflow-hidden bg-charcoal px-5 py-20 sm:py-24">

        <div className="pointer-events-none absolute right-[-120px] top-[-100px] h-[450px] w-[450px] rounded-full bg-vada-red/10 blur-[130px]" />

        <div className="relative mx-auto max-w-6xl">

          <div className="text-center">

            <span className="inline-flex rounded-full border border-turmeric/30 bg-turmeric/10 px-5 py-1.5 font-body text-[9px] font-black uppercase tracking-[0.18em] text-turmeric">
              Choose Your Format
            </span>

            <h2 className="mt-5 font-display text-3xl font-black text-papad sm:text-4xl">
              Find the Right
              <span className="text-vada-red">
                {" "}Way to Serve.
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl font-body text-sm leading-7 text-papad-dim">
              Choose a format that fits your location, customer flow
              and business vision.
            </p>

          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">

            {FORMATS.map((format) => {

              const Icon = format.icon;

              return (
                <article
                  key={format.number}
                  className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-ink p-7 transition duration-500 hover:-translate-y-2 hover:border-turmeric/40"
                >

                  <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-vada-red/10 blur-[70px] transition duration-500 group-hover:bg-vada-red/20" />

                  <div className="relative">

                    <div className="flex items-center justify-between">

                      <span className="font-display text-5xl font-black text-white/[0.05]">
                        {format.number}
                      </span>

                      <span className="rounded-full border border-turmeric/30 bg-turmeric/10 px-3 py-1 font-body text-[9px] font-black tracking-wider text-turmeric">
                        {format.tag}
                      </span>

                    </div>

                    <div className="mt-7 flex h-12 w-12 items-center justify-center rounded-xl bg-vada-red/10 text-vada-red transition duration-300 group-hover:bg-vada-red group-hover:text-white">
                      <Icon size={22} />
                    </div>

                    <h3 className="mt-6 font-display text-xl font-black text-papad">
                      {format.title}
                    </h3>

                    <p className="mt-3 font-body text-sm leading-7 text-papad-dim">
                      {format.description}
                    </p>

                    <div className="mt-7 h-px w-10 bg-vada-red transition-all duration-500 group-hover:w-full" />

                    <div className="mt-4 flex items-center font-body text-xs font-bold text-turmeric">
                      Explore Format
                      <span className="ml-2 transition-transform duration-300 group-hover:translate-x-2">
                        →
                      </span>
                    </div>

                  </div>

                </article>
              );

            })}

          </div>

        </div>

      </section>

      {/* =====================================================
          BUSINESS POTENTIAL
      ===================================================== */}

      <section className="relative overflow-hidden bg-ink px-5 py-20 sm:py-24">

        <div className="pointer-events-none absolute left-[-150px] top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-vada-red/10 blur-[140px]" />

        <div className="relative mx-auto max-w-6xl">

          <div className="text-center">

            <span className="inline-flex rounded-full border border-turmeric/30 bg-turmeric/10 px-5 py-1.5 font-body text-[9px] font-black uppercase tracking-[0.18em] text-turmeric">
              Business Potential
            </span>

            <h2 className="mt-5 font-display text-3xl font-black text-papad sm:text-4xl">
              Build Your
              <span className="text-vada-red">
                {" "}Food Business.
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl font-body text-sm leading-7 text-papad-dim">
              A focused food concept with multiple ways to create
              your own Vidarbha Cha Vadewala outlet.
            </p>

          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">

            {/* LEFT */}

            <div className="space-y-3">

              {[
                {
                  icon: Store,
                  label: "OUTLET MODEL",
                  title: "Vada Counter",
                  description:
                    "Compact format for quick service and high-footfall locations.",
                },
                {
                  icon: Utensils,
                  label: "CUSTOMER EXPERIENCE",
                  title: "Quick Service",
                  description:
                    "Fresh vadas, beverages and a convenient food experience.",
                },
                {
                  icon: Building2,
                  label: "PREMIUM FORMAT",
                  title: "Café Experience",
                  description:
                    "A larger format designed around food, beverages and ambience.",
                },
                {
                  icon: ChefHat,
                  label: "FOOD FOCUS",
                  title: "Signature Vadas",
                  description:
                    "Build your menu around authentic regional flavours and favourites.",
                },
                {
                  icon: Sparkles,
                  label: "BRAND EXPERIENCE",
                  title: "Modern Identity",
                  description:
                    "A distinctive visual identity designed for today's customers.",
                },
              ].map((item) => {

                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-charcoal p-4 transition duration-300 hover:-translate-y-1 hover:border-turmeric/30 hover:bg-white/[0.04]"
                  >

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-turmeric/10 text-turmeric transition duration-300 group-hover:bg-vada-red group-hover:text-white">
                      <Icon size={19} />
                    </div>

                    <div>

                      <p className="font-body text-[9px] font-black uppercase tracking-[0.12em] text-papad-dim/60">
                        {item.label}
                      </p>

                      <h3 className="font-display text-base font-black text-papad">
                        {item.title}
                      </h3>

                      <p className="mt-0.5 font-body text-xs leading-5 text-papad-dim">
                        {item.description}
                      </p>

                    </div>

                  </div>
                );

              })}

            </div>

            {/* RIGHT */}

            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-charcoal shadow-2xl">

              <div className="border-b border-white/10 bg-ink p-6">

                <span className="inline-flex rounded-full border border-turmeric/30 bg-turmeric/10 px-3 py-1 font-body text-[9px] font-black uppercase tracking-wider text-turmeric">
                  Franchise Journey
                </span>

                <h3 className="mt-4 font-display text-xl font-black text-papad">
                  From Enquiry to
                  <span className="text-vada-red">
                    {" "}Opening Day.
                  </span>
                </h3>

                <p className="mt-2 font-body text-xs leading-6 text-papad-dim">
                  A clear step-by-step journey designed to help you
                  understand the opportunity and prepare your outlet.
                </p>

              </div>

              <div className="p-6">

                <div className="relative">

                  <div className="absolute bottom-5 left-[18px] top-5 w-px bg-turmeric/20" />

                  <div className="space-y-5">

                    {JOURNEY.map((step) => (

                      <div
                        key={step.number}
                        className="group relative flex gap-4"
                      >

                        <div className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-turmeric/40 bg-ink font-display text-[9px] font-black text-turmeric transition duration-300 group-hover:border-vada-red group-hover:bg-vada-red group-hover:text-white">
                          {step.number}
                        </div>

                        <div className="pt-0.5">

                          <h4 className="font-display text-sm font-black text-papad">
                            {step.title}
                          </h4>

                          <p className="mt-1 font-body text-[11px] leading-5 text-papad-dim">
                            {step.description}
                          </p>

                        </div>

                      </div>

                    ))}

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
    SUPPORT
===================================================== */}

<section className="relative overflow-hidden bg-charcoal px-5 py-14 sm:py-18">

  <div
    className="
      pointer-events-none
      absolute
      right-[-100px]
      top-[-100px]
      h-[400px]
      w-[400px]
      rounded-full
      bg-turmeric/5
      blur-[130px]
    "
  />

  <div className="relative mx-auto max-w-6xl">

    <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">

      {/* =================================================
          LEFT
      ================================================= */}

      <div>

        <span
          className="
            inline-flex
            rounded-full
            border
            border-turmeric/30
            bg-turmeric/10
            px-5
            py-1.5
            font-body
            text-[9px]
            font-black
            uppercase
            tracking-[0.18em]
            text-turmeric
          "
        >
          Franchise Support
        </span>

        <h2
          className="
            mt-4
            font-display
            text-2xl
            font-black
            leading-tight
            text-papad
            sm:text-3xl
          "
        >
          We help you
          <span className="block text-vada-red">
            build it right.
          </span>
        </h2>

        <p
          className="
            mt-3
            max-w-md
            font-body
            text-sm
            leading-6
            text-papad-dim
          "
        >
          From the first conversation to your outlet launch,
          our approach is focused on clarity, consistency and
          building a strong food brand.
        </p>

        <Link
          href="#franchise-form"
          className="
            mt-6
            inline-flex
            rounded-full
            bg-vada-red
            px-7
            py-3.5
            font-body
            text-sm
            font-black
            text-white
            shadow-lg
            shadow-vada-red/20
            transition
            hover:-translate-y-1
          "
        >
          Talk To Us
          <span className="ml-2">→</span>
        </Link>

      </div>


      {/* =================================================
          SUPPORT GRID — 3 CARDS PER ROW
      ================================================= */}

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">

        {SUPPORT.map((item) => (

          <div
            key={item.number}
            className="
              group
              rounded-2xl
              border
              border-white/10
              bg-ink
              p-4
              transition
              duration-300
              hover:-translate-y-1
              hover:border-turmeric/30
              hover:bg-white/[0.04]
            "
          >

            {/* Number */}

            <span
              className="
                font-display
                text-xs
                font-black
                text-turmeric
              "
            >
              {item.number}
            </span>

            {/* Title */}

            <h3
              className="
                mt-5
                font-display
                text-sm
                font-black
                leading-5
                text-papad
              "
            >
              {item.title}
            </h3>

            {/* Description */}

            <p
              className="
                mt-2
                font-body
                text-[11px]
                leading-5
                text-papad-dim
              "
            >
              {item.description}
            </p>

            {/* Bottom Line */}

            <div
              className="
                mt-4
                h-px
                w-7
                bg-vada-red
                transition-all
                duration-300
                group-hover:w-full
              "
            />

          </div>

        ))}

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
    bg-ink
    px-5
    py-12
    sm:py-16
  "
>
  {/* Background Glow */}

  <div
    className="
      pointer-events-none
      absolute
      left-[-150px]
      top-1/2
      h-[450px]
      w-[450px]
      -translate-y-1/2
      rounded-full
      bg-vada-red/10
      blur-[130px]
    "
  />

  <div
    className="
      pointer-events-none
      absolute
      right-[-100px]
      top-0
      h-[350px]
      w-[350px]
      rounded-full
      bg-turmeric/5
      blur-[120px]
    "
  />

  {/* Main Container */}

  <div className="relative mx-auto max-w-6xl">

    <div
      className="
        grid
        items-start
        gap-10
        lg:grid-cols-[0.9fr_1.1fr]
        lg:gap-12
      "
    >

      {/* =================================================
          LEFT CONTENT
      ================================================= */}

      <div>

        {/* Label */}

        <span
          className="
            inline-flex
            rounded-full
            border
            border-turmeric/30
            bg-turmeric/10
            px-5
            py-1.5
            font-body
            text-[9px]
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
            font-display
            text-2xl
            font-black
            leading-tight
            text-papad
            sm:text-3xl
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
            max-w-md
            font-body
            text-sm
            leading-6
            text-papad-dim
          "
        >
          Tell us about yourself, your preferred city and the
          kind of outlet you are interested in.
        </p>

        {/* Brand Card */}

        <div
          className="
            mt-5
            max-w-md
            rounded-2xl
            border
            border-white/10
            bg-charcoal
            p-5
          "
        >

          <div className="flex items-start gap-4">

            <div
              className="
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                rounded-xl
                bg-vada-red/10
                text-vada-red
              "
            >
              <Handshake size={18} />
            </div>

            <div>

              <p
                className="
                  font-display
                  text-base
                  font-black
                  text-papad
                "
              >
                Authentic taste.
              </p>

              <p
                className="
                  mt-1
                  font-body
                  text-xs
                  text-papad-dim
                "
              >
                Modern brand. Shared vision.
              </p>

            </div>

          </div>

        </div>

        {/* Points */}

        <div className="mt-5 space-y-2.5">

          <div className="flex items-center gap-3">

            <CircleCheck
              size={15}
              className="shrink-0 text-turmeric"
            />

            <span
              className="
                font-body
                text-xs
                text-papad-dim
              "
            >
              Discuss your franchise requirements
            </span>

          </div>

          <div className="flex items-center gap-3">

            <CircleCheck
              size={15}
              className="shrink-0 text-turmeric"
            />

            <span
              className="
                font-body
                text-xs
                text-papad-dim
              "
            >
              Explore suitable outlet formats
            </span>

          </div>

          <div className="flex items-center gap-3">

            <CircleCheck
              size={15}
              className="shrink-0 text-turmeric"
            />

            <span
              className="
                font-body
                text-xs
                text-papad-dim
              "
            >
              Connect with our franchise team
            </span>

          </div>

        </div>

      </div>


      {/* =================================================
          FORM
      ================================================= */}

      <FranchiseEnquiryForm />

    </div>

  </div>

</section>
{/* =====================================================
    FINAL CTA
===================================================== */}

<section
  className="
    relative
    overflow-hidden
    bg-charcoal
    px-5
    py-12
    text-center
    sm:py-16
  "
>
  {/* Background glow */}

  <div className="pointer-events-none absolute inset-0">

    <div
      className="
        absolute
        left-1/2
        top-1/2
        h-[400px]
        w-[600px]
        -translate-x-1/2
        -translate-y-1/2
        rounded-full
        bg-vada-red/10
        blur-[120px]
      "
    />

    <div
      className="
        absolute
        right-0
        top-0
        h-[250px]
        w-[250px]
        rounded-full
        bg-turmeric/5
        blur-[90px]
      "
    />

  </div>

  {/* Content */}

  <div className="relative z-10 mx-auto max-w-3xl">

    {/* Label */}

    <span
      className="
        inline-flex
        rounded-full
        border
        border-turmeric/30
        bg-turmeric/10
        px-5
        py-1.5
        font-body
        text-[9px]
        font-black
        uppercase
        tracking-[0.18em]
        text-turmeric
      "
    >
      Partner With Us
    </span>

    {/* Heading */}

    <h2
      className="
        mt-4
        font-display
        text-2xl
        font-black
        leading-tight
        text-papad
        sm:text-3xl
        lg:text-4xl
      "
    >
      Let&apos;s take the
      <span className="block text-vada-red">
        taste of Vidarbha further.
      </span>
    </h2>

    {/* Description */}

    <p
      className="
        mx-auto
        mt-3
        max-w-xl
        font-body
        text-sm
        leading-6
        text-papad-dim
      "
    >
      Build a food experience inspired by authentic flavours,
      fresh preparation and the spirit of Vidarbha.
    </p>

    {/* Button — SIZE UNCHANGED */}

    <Link
      href="#franchise-form"
      className="
        mt-5
        inline-flex
        rounded-full
        bg-turmeric
        px-8
        py-4
        font-body
        text-sm
        font-black
        text-ink
        shadow-xl
        transition
        duration-300
        hover:-translate-y-1
        hover:shadow-2xl
      "
    >
      Become a Franchise Partner
      <span className="ml-2">→</span>
    </Link>

  </div>

</section>

    </main>
  );
}