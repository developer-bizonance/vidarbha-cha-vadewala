import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "../components/SectionHeading";
import EnquiryForm from "../components/EnquiryForm";

export const metadata: Metadata = {
  title: "Careers | Vidarbha Cha Vadewala",
  description:
    "Explore career opportunities at Vidarbha Cha Vadewala and become part of a growing food brand.",
};

const ROLES = [
  {
    number: "01",
    title: "Outlet Cook",
    type: "Full-time",
    location: "Nagpur",
    desc: "Help prepare fresh vadas while maintaining consistency, cleanliness and quality during every service.",
  },
  {
    number: "02",
    title: "Outlet Manager",
    type: "Full-time",
    location: "Multiple Cities",
    desc: "Manage daily outlet operations, team coordination, customer experience and service standards.",
  },
  {
    number: "03",
    title: "Quality & Production",
    type: "Full-time",
    location: "Central Kitchen",
    desc: "Support preparation, quality checks and consistency across our food and ingredient production.",
  },
  {
    number: "04",
    title: "Franchise Support Executive",
    type: "Full-time",
    location: "Nagpur",
    desc: "Work with franchise partners and support them through outlet setup, training and launch.",
  },
  {
    number: "05",
    title: "Counter & Delivery Staff",
    type: "Part-time / Full-time",
    location: "Multiple Cities",
    desc: "Be part of the customer-facing team handling counter service and delivery coordination.",
  },
];

const CULTURE = [
  {
    number: "01",
    title: "Learn & Grow",
    desc: "Build practical experience across food preparation, customer service and outlet operations.",
  },
  {
    number: "02",
    title: "Team First",
    desc: "Work with people who care about quality, consistency and creating a great customer experience.",
  },
  {
    number: "03",
    title: "Make an Impact",
    desc: "Be part of a food brand bringing the flavours and spirit of Vidarbha to more people.",
  },
];

export default function Career() {
  return (
    <main className="min-h-screen overflow-hidden bg-ink text-papad">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden px-5 pb-14 pt-14 sm:pb-16 sm:pt-18">

        {/* Background Glow */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-[radial-gradient(circle_at_50%_0%,rgba(196,30,42,0.20),transparent_60%)]
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
            blur-[110px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            right-[-120px]
            top-1/3
            h-[350px]
            w-[350px]
            rounded-full
            bg-turmeric/5
            blur-[120px]
          "
        />

        {/* Decorative Shapes */}

        <div
          className="
            pointer-events-none
            absolute
            right-[8%]
            top-[20%]
            h-[230px]
            w-[230px]
            rotate-12
            rounded-[3rem]
            border
            border-white/[0.035]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            left-[7%]
            bottom-[5%]
            h-[160px]
            w-[160px]
            -rotate-12
            rounded-[2.5rem]
            border
            border-vada-red/[0.05]
          "
        />

        {/* Hero Content */}

        <div className="relative z-10 mx-auto max-w-5xl text-center">

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
            Careers
          </span>

          <h1
            className="
              mx-auto
              mt-4
              max-w-3xl
              font-display
              text-3xl
              font-black
              leading-tight
              tracking-tight
              text-papad
              sm:text-3xl
              lg:text-4xl
            "
          >
            Build Your Career With
            <span className="block text-vada-red">
              Vidarbha Cha Vadewala.
            </span>
          </h1>

          <p
            className="
              mx-auto
              mt-4
              max-w-2xl
              font-body
              text-sm
              leading-6
              text-papad-dim
              sm:text-base
            "
          >
            Join a team passionate about fresh food, authentic flavours
            and creating memorable experiences for every customer.
          </p>

          
                

              </div>

            

        

      

      </section>


      {/* =====================================================
          CULTURE
      ===================================================== */}

      <section className="relative overflow-hidden bg-black px-5 py-14 sm:py-18">

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
            blur-[120px]
          "
        />

        <div className="relative mx-auto max-w-6xl">

          <div className="text-center">

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
              Life At Vidarbha Cha Vadewala
            </span>

            <h2
              className="
                mt-4
                font-display
                text-3xl
                font-black
                leading-tight
                text-papad
                sm:text-4xl
              "
            >
              More Than Just
              <span className="text-vada-red"> A Job.</span>
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
              We believe good food starts with good people.
              Bring your skills, energy and ideas to the team.
            </p>

          </div>


          {/* Culture Cards */}

          <div className="mt-9 grid gap-4 sm:grid-cols-3">

            {CULTURE.map((item) => (

              <article
                key={item.number}
                className="
                  group
                  rounded-2xl
                  border
                  border-white/10
                  bg-ink
                  p-5
                  transition
                  duration-300
                  hover:-translate-y-1
                  hover:border-turmeric/30
                "
              >

                <div className="flex items-center justify-between">

                  <span className="font-display text-xs font-black text-turmeric">
                    {item.number}
                  </span>

                  <span className="h-px w-8 bg-vada-red transition-all duration-300 group-hover:w-14" />

                </div>

                <h3
                  className="
                    mt-7
                    font-display
                    text-lg
                    font-black
                    text-papad
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    mt-2
                    font-body
                    text-xs
                    leading-6
                    text-papad-dim
                  "
                >
                  {item.desc}
                </p>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          OPEN ROLES
      ===================================================== */}

      <section
        id="open-roles"
        className="
          relative
          overflow-hidden
          bg-ink
          px-5
          py-14
          sm:py-18
        "
      >

        <div className="relative mx-auto max-w-6xl">

          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">

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
                Opportunities
              </span>

              <h2
                className="
                  mt-4
                  font-display
                  text-3xl
                  font-black
                  leading-tight
                  text-papad
                  sm:text-4xl
                "
              >
                Find Your
                <span className="text-vada-red"> Role.</span>
              </h2>

            </div>

            <p
              className="
                max-w-md
                font-body
                text-sm
                leading-6
                text-papad-dim
              "
            >
              Explore current opportunities and find where your
              skills can make a difference.
            </p>

          </div>


          {/* Roles */}

          <div className="mt-8 grid gap-4">

            {ROLES.map((role) => (

              <article
                key={role.number}
                className="
                  group
                  rounded-2xl
                  border
                  border-white/10
                  bg-charcoal
                  p-5
                  transition
                  duration-300
                  hover:-translate-y-1
                  hover:border-turmeric/30
                "
              >

                <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

                  {/* Role Information */}

                  <div className="flex gap-4">

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
                        font-display
                        text-xs
                        font-black
                        text-vada-red
                      "
                    >
                      {role.number}
                    </div>

                    <div>

                      <h3
                        className="
                          font-display
                          text-base
                          font-black
                          text-papad
                          sm:text-lg
                        "
                      >
                        {role.title}
                      </h3>

                      <div className="mt-1.5 flex flex-wrap gap-2">

                        <span
                          className="
                            rounded-full
                            border
                            border-turmeric/20
                            bg-turmeric/5
                            px-3
                            py-1
                            font-body
                            text-[9px]
                            font-bold
                            uppercase
                            tracking-wider
                            text-turmeric
                          "
                        >
                          {role.type}
                        </span>

                        <span
                          className="
                            rounded-full
                            border
                            border-white/10
                            bg-white/[0.03]
                            px-3
                            py-1
                            font-body
                            text-[9px]
                            font-bold
                            uppercase
                            tracking-wider
                            text-papad-dim
                          "
                        >
                          {role.location}
                        </span>

                      </div>

                      <p
                        className="
                          mt-2
                          max-w-2xl
                          font-body
                          text-xs
                          leading-6
                          text-papad-dim
                        "
                      >
                        {role.desc}
                      </p>

                    </div>

                  </div>


                  {/* Apply Button */}

                  <Link
                    href="#apply"
                    className="
                      shrink-0
                      rounded-full
                      border
                      border-white/15
                      px-5
                      py-2.5
                      text-center
                      font-body
                      text-xs
                      font-bold
                      text-papad
                      transition
                      duration-300
                      hover:border-vada-red
                      hover:bg-vada-red
                      hover:text-white
                    "
                  >
                    Apply
                    <span className="ml-2">→</span>
                  </Link>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          WHY JOIN US
      ===================================================== */}

      <section className="relative overflow-hidden bg-charcoal px-5 py-14 sm:py-18">

        <div
          className="
            pointer-events-none
            absolute
            right-[-120px]
            top-1/2
            h-[400px]
            w-[400px]
            -translate-y-1/2
            rounded-full
            bg-turmeric/5
            blur-[130px]
          "
        />

        <div className="relative mx-auto max-w-6xl">

          <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">

            {/* Left */}

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
                Why Join Us
              </span>

              <h2
                className="
                  mt-4
                  font-display
                  text-3xl
                  font-black
                  leading-tight
                  text-papad
                  sm:text-4xl
                "
              >
                Bring Your
                <span className="block text-vada-red">
                  Passion With You.
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
                Whether you love food, people, operations or
                building brands, there is a place for your skills
                in our growing journey.
              </p>

              <Link
                href="#apply"
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
                Join Our Team
                <span className="ml-2">→</span>
              </Link>

            </div>


            {/* Right Feature Grid */}

            <div className="grid gap-3 sm:grid-cols-2">

              <div
                className="
                  rounded-2xl
                  border
                  border-white/10
                  bg-ink
                  p-5
                "
              >

                <p className="font-display text-2xl font-black text-turmeric">
                  01
                </p>

                <h3 className="mt-5 font-display text-base font-black text-papad">
                  Food First
                </h3>

                <p className="mt-2 font-body text-xs leading-5 text-papad-dim">
                  Be part of a brand where taste, freshness and
                  consistency matter every day.
                </p>

              </div>


              <div
                className="
                  rounded-2xl
                  border
                  border-white/10
                  bg-ink
                  p-5
                "
              >

                <p className="font-display text-2xl font-black text-turmeric">
                  02
                </p>

                <h3 className="mt-5 font-display text-base font-black text-papad">
                  Growth Mindset
                </h3>

                <p className="mt-2 font-body text-xs leading-5 text-papad-dim">
                  Learn new skills and grow alongside an evolving
                  food brand.
                </p>

              </div>


              <div
                className="
                  rounded-2xl
                  border
                  border-white/10
                  bg-ink
                  p-5
                "
              >

                <p className="font-display text-2xl font-black text-turmeric">
                  03
                </p>

                <h3 className="mt-5 font-display text-base font-black text-papad">
                  Team Culture
                </h3>

                <p className="mt-2 font-body text-xs leading-5 text-papad-dim">
                  Work together, support each other and create
                  better experiences for customers.
                </p>

              </div>


              <div
                className="
                  rounded-2xl
                  border
                  border-white/10
                  bg-ink
                  p-5
                "
              >

                <p className="font-display text-2xl font-black text-turmeric">
                  04
                </p>

                <h3 className="mt-5 font-display text-base font-black text-papad">
                  Make It Yours
                </h3>

                <p className="mt-2 font-body text-xs leading-5 text-papad-dim">
                  Bring your ideas, energy and personality to the
                  work you do.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          APPLICATION
      ===================================================== */}

      <section
        id="apply"
        className="
          relative
          overflow-hidden
          bg-ink
          px-5
          py-14
          sm:py-18
        "
      >

        {/* Glow */}

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

        <div className="relative mx-auto max-w-6xl">

          <div className="grid items-start gap-10 lg:grid-cols-[0.8fr_1.2fr]">

            {/* Left */}

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
                Apply Now
              </span>

              <h2
                className="
                  mt-4
                  font-display
                  text-3xl
                  font-black
                  leading-tight
                  text-papad
                  sm:text-4xl
                "
              >
                Ready to join
                <span className="block text-vada-red">
                  the Vadewala team?
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
                Send us your details and tell us a little about
                yourself. We&apos;ll get in touch when there is a
                suitable opportunity.
              </p>

              <div
                className="
                  mt-6
                  rounded-2xl
                  border
                  border-white/10
                  bg-charcoal
                  p-5
                "
              >

                <p className="font-display text-base font-black text-papad">
                  Fresh ideas.
                </p>

                <p className="mt-1 font-body text-xs text-papad-dim">
                  Authentic food. One growing team.
                </p>

              </div>

            </div>


            {/* Form */}

            <div
              className="
                rounded-[1.5rem]
                border
                border-white/10
                bg-charcoal
                p-5
                shadow-2xl
                sm:p-6
              "
            >

              <EnquiryForm kind="career" />

            </div>

          </div>

        </div>

      </section>


      
    </main>
  );
}