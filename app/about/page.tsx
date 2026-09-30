import type { Metadata } from "next";
import Image from "next/image";
import SectionHeading from "../components/SectionHeading";

export const metadata: Metadata = {
  title: "About Us | Vidarbha Cha Vadewala",
  description:
    "Discover the story, vision, mission and values behind Vidarbha Cha Vadewala — authentic Vidarbha-style vadas made fresh with traditional flavours.",
};

const VALUES = [
  {
    title: "Fresh Every Time",
    desc: "Every vada is fried fresh to order. No pre-fried batches — just hot, crispy and fresh food.",
  },
  {
    title: "Vadas, and Only Vadas",
    desc: "We focus on one speciality and do it properly. Better recipes, better preparation and better taste.",
  },
  {
    title: "Authentic Vidarbha Taste",
    desc: "Bold masala, traditional flavours and recipes inspired by the food culture of Vidarbha.",
  },
  {
    title: "Fair Prices",
    desc: "Authentic food should be enjoyed by everyone, so we keep our prices honest and accessible.",
  },
];

const TIMELINE = [
  {
    year: "The Idea",
    text: "We wanted to bring the authentic taste of Vidarbha's vadas to more people and give this beloved street food the attention it deserves.",
  },
  {
    year: "The Recipes",
    text: "We focused on getting every recipe right — from dahi and sabudana vada to medu, batata and rassa vada.",
  },
  {
    year: "The Launch",
    text: "Vidarbha Cha Vadewala began with one simple idea: fresh vadas, authentic flavours and a taste that feels like home.",
  },
  {
    year: "What's Next",
    text: "Our goal is to reach more customers, expand delivery and take the authentic taste of Vidarbha to more cities.",
  },
];

export default function About() {
  return (
    <>
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="px-5 pb-10 pt-16 sm:pt-24">
              <SectionHeading
                eyebrow="About Us"
                title="Keeping the Authentic Taste of Vidarbha Alive."
                sub=" Freshly fried,
            full of flavour and made with the taste we grew up with.
          </p>
        </div>"
                align="center"
              />
            </section>

      {/* =====================================================
          OUR STORY - IMAGE LEFT / TEXT RIGHT
      ====================================================== */}
      <section className="px-5 py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
          
          {/* Image */}
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-charcoal">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/about-vada.jpg"
                alt="Fresh authentic Vidarbha vada"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Image overlay badge */}
            <div className="absolute bottom-5 left-5 rounded-2xl border border-white/10 bg-ink/85 px-5 py-3 backdrop-blur-md">
              <p className="font-display text-sm tracking-wide text-turmeric">
                AUTHENTIC VIDARBHA
              </p>
              <p className="mt-1 font-body text-xs text-papad-dim">
                Fresh • Crispy • Traditional
              </p>
            </div>
          </div>

          {/* Story */}
          <div>
            <p className="font-body text-xs font-bold uppercase tracking-[0.3em] text-turmeric">
              Our Story
            </p>

            <h2 className="mt-3 font-display text-3xl leading-tight tracking-wide text-papad sm:text-4xl">
              More than a vada.
              <br />
              <span className="text-vada-red">
                It&apos;s the taste of Vidarbha.
              </span>
            </h2>

            <div className="mt-6 space-y-4 font-body text-base leading-relaxed text-papad-dim">
              <p>
                Vidarbha Cha Vadewala started with a love for one of the
                region&apos;s most comforting foods — the humble vada.
              </p>

              <p>
                From crispy batata vada and sabudana vada to creamy dahi vada
                and fiery rassa vada, every variety has its own character,
                preparation and flavour.
              </p>

              <p>
                We believe authentic food does not need to be complicated.
                It needs the right ingredients, traditional flavours and the
                care to make it fresh every time.
              </p>

              <p className="text-papad">
                <span className="text-turmeric">
                  Our goal is simple:
                </span>{" "}
                serve the real taste of Vidarbha, one fresh vada at a time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          VISION & MISSION
      ====================================================== */}
      <section className="bg-charcoal px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Our Purpose"
            title=""
            
            align="center"
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {/* Vision */}
            <div className="group rounded-3xl border border-white/10 bg-ink p-7 transition-all duration-300 hover:border-turmeric/50 sm:p-9">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-turmeric/10">
                <span className="text-xl text-turmeric">◉</span>
              </div>

              <p className="mt-6 font-body text-xs font-bold uppercase tracking-[0.25em] text-turmeric">
                Our Vision
              </p>

              

              <p className="mt-4 font-body text-sm leading-relaxed text-papad-dim sm:text-base">
                To become a trusted food brand known for authentic Vidarbha
                flavours, bringing traditional vadas and regional food culture
                to more people across cities and communities.
              </p>
            </div>

            {/* Mission */}
            <div className="group rounded-3xl border border-white/10 bg-ink p-7 transition-all duration-300 hover:border-vada-red/50 sm:p-9">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-vada-red/10">
                <span className="text-xl text-vada-red">✦</span>
              </div>

              <p className="mt-6 font-body text-xs font-bold uppercase tracking-[0.25em] text-turmeric">
                Our Mission
              </p>

              

              <p className="mt-4 font-body text-sm leading-relaxed text-papad-dim sm:text-base">
                To prepare fresh, delicious and affordable vadas using
                authentic recipes and quality ingredients while creating a
                consistent taste that customers can enjoy every time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY ONLY VADAS
      ====================================================== */}
      <section className="px-5 py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="font-body text-xs font-bold uppercase tracking-[0.3em] text-turmeric">
              Why Only Vadas
            </p>

            <h2 className="mt-3 font-display text-3xl leading-tight tracking-wide text-papad sm:text-4xl">
              One speciality.
              <br />
              <span className="text-vada-red">Done the right way.</span>
            </h2>

            <p className="mt-5 max-w-xl font-body text-base leading-relaxed text-papad-dim">
              We believe great vada deserves more than a small place on a
              large menu. It deserves attention — the right ingredients, the
              right crispiness, the right masala and the right chutney.
            </p>

            <p className="mt-4 max-w-xl font-body text-base leading-relaxed text-papad-dim">
              That&apos;s why we chose to focus on what we love most:
              <span className="text-papad"> Vidarbha&apos;s vada.</span>
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-charcoal p-7 sm:p-9">
            <p className="font-display text-2xl leading-relaxed tracking-wide text-papad">
              “Simple food.
              <br />
              <span className="text-turmeric">
                Authentic flavour.
              </span>
              <br />
              Made fresh every time.”
            </p>

            <div className="mt-7 h-px w-20 bg-vada-red" />

            <p className="mt-5 font-body text-sm leading-relaxed text-papad-dim">
              From traditional favourites to our signature creations, every
              vada is made to celebrate the bold and comforting flavours of
              Vidarbha.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          VALUES
      ====================================================== */}
      <section className="bg-charcoal px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="What We Stand For"
            title="Four things we never compromise on."
            align="center"
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((value, index) => (
              <div
                key={value.title}
                className="rounded-3xl border border-white/10 bg-ink p-6 transition-all duration-300 hover:-translate-y-1 hover:border-turmeric/40"
              >
                <span className="font-display text-sm text-turmeric">
                  0{index + 1}
                </span>

                <h3 className="mt-5 font-display text-lg tracking-wide text-vada-red">
                  {value.title}
                </h3>

                <p className="mt-3 font-body text-sm leading-relaxed text-papad-dim">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          TIMELINE
      ====================================================== */}
      <section className="px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            eyebrow="Our Journey"
            title="From one idea to a growing vada brand."
            align="center"
          />

          <ol className="mt-12 space-y-10 border-l border-white/10 pl-8">
            {TIMELINE.map((item, index) => (
              <li key={item.year} className="relative">
                <span className="absolute -left-[38px] top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-ink bg-vada-red shadow-[0_0_0_4px_rgba(196,30,42,0.12)]" />

                <p className="font-body text-xs font-bold uppercase tracking-[0.25em] text-turmeric">
                  0{index + 1}
                </p>

                <h3 className="mt-2 font-display text-xl tracking-wide text-papad">
                  {item.year}
                </h3>

                <p className="mt-2 font-body text-sm leading-relaxed text-papad-dim">
                  {item.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}
      <section className="px-5 pb-24">
        <div className="mx-auto max-w-5xl rounded-3xl border border-vada-red/30 bg-gradient-to-br from-vada-red/15 to-transparent p-8 text-center sm:p-12">
          <p className="font-body text-xs font-bold uppercase tracking-[0.3em] text-turmeric">
            The Taste of Vidarbha
          </p>

          <h2 className="mx-auto mt-3 max-w-2xl font-display text-3xl leading-tight tracking-wide text-papad sm:text-4xl">
            Fresh vadas. Bold flavours.
            <br />
            <span className="text-vada-red">
              A taste worth coming back for.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl font-body text-sm leading-relaxed text-papad-dim">
            Discover authentic Vidarbha flavours, freshly made and served with
            the taste of home.
          </p>
        </div>
      </section>
    </>
  );
}