"use client";

import { useState, type FormEvent } from "react";

const FIELD_CLASS =
  "w-full rounded-xl border border-white/15 bg-ink px-4 py-3 font-body text-sm text-papad placeholder:text-papad-dim/50 outline-none transition-colors focus:border-vada-red focus:ring-2 focus:ring-vada-red/30";

/*
  =====================================================
  WHATSAPP NUMBER
  =====================================================

  Format: Country code + Mobile number without + or spaces
  Example: 918956727311
*/
const WHATSAPP_NUMBER = "918956727311";

type EnquiryFormProps = {
  kind?: "franchise" | "career" | "contact";
};

type Status = "idle" | "sent";

export default function EnquiryForm({
  kind = "franchise",
}: EnquiryFormProps) {
  const [status, setStatus] = useState<Status>("idle");

  /*
    =====================================================
    FORM SUBMIT HANDLER
    =====================================================
  */
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const city = String(formData.get("city") || "").trim();
    const investment = String(
      formData.get("investment") || "Not specified"
    ).trim();
    const message = String(formData.get("message") || "").trim();

    let whatsappMessage = "";

    // 1. Franchise Message Template
    if (kind === "franchise") {
      whatsappMessage = `Hello Vidarbha Cha Vadewala 👋

I am interested in taking a franchise.

━━━━━━━━━━━━━━━━━━
FRANCHISE ENQUIRY
━━━━━━━━━━━━━━━━━━

Name:
${name}

Phone:
${phone}

Email:
${email}

Preferred City / Location:
${city}

Investment Range:
${investment}

About Me / Business Background:
${message || "Not provided"}

━━━━━━━━━━━━━━━━━━

Please share more details about the franchise opportunity.

Thank you.`;
    } 
    // 2. Career Message Template
    else if (kind === "career") {
      whatsappMessage = `Hello Vidarbha Cha Vadewala 👋

I am interested in career/job opportunities.

━━━━━━━━━━━━━━━━━━
CAREER ENQUIRY
━━━━━━━━━━━━━━━━━━

Name:
${name}

Phone:
${phone}

Email:
${email}

City / Location:
${city}

Message / Experience:
${message || "Not provided"}

━━━━━━━━━━━━━━━━━━

Please contact me regarding available positions.

Thank you.`;
    } 
    // 3. Contact Message Template
    else {
      whatsappMessage = `Hello Vidarbha Cha Vadewala 👋

I would like to get in touch.

━━━━━━━━━━━━━━━━━━
GENERAL CONTACT ENQUIRY
━━━━━━━━━━━━━━━━━━

Name:
${name}

Phone:
${phone}

Email:
${email}

City / Location:
${city}

Message:
${message || "Not provided"}

━━━━━━━━━━━━━━━━━━

Thank you.`;
    }

    // Build the WhatsApp URL with encoded message text
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    // Open WhatsApp in a new tab (or redirect current page)
    window.open(whatsappUrl, "_blank");

    // Optionally set form status to sent
    setStatus("sent");
  }

  /*
    =====================================================
    SUCCESS MESSAGE
    =====================================================
  */
  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-turmeric/40 bg-turmeric/10 p-6 text-center">
        <p className="font-display text-lg font-bold tracking-wide text-turmeric">
          Opening WhatsApp...
        </p>

        <p className="mt-2 font-body text-sm leading-relaxed text-papad-dim">
          If WhatsApp didn't open automatically, please check your popup blocker or try again.
        </p>

        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="
            mt-4
            rounded-full
            border
            border-turmeric/40
            px-5
            py-2
            font-body
            text-xs
            font-bold
            text-turmeric
            transition-all
            duration-300
            hover:border-turmeric
            hover:bg-turmeric/10
          "
        >
          Submit Another Enquiry
        </button>
      </div>
    );
  }

  /*
    =====================================================
    FORM RENDER
    =====================================================
  */
  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-4 sm:grid-cols-2"
    >
      {/* FULL NAME */}
      <div>
        <label
          htmlFor="name"
          className="mb-1.5 block font-body text-xs font-bold text-papad"
        >
          Full Name
        </label>

        <input
          id="name"
          required
          name="name"
          type="text"
          placeholder="Your full name"
          className={FIELD_CLASS}
        />
      </div>

      {/* PHONE */}
      <div>
        <label
          htmlFor="phone"
          className="mb-1.5 block font-body text-xs font-bold text-papad"
        >
          Phone Number
        </label>

        <input
          id="phone"
          required
          name="phone"
          type="tel"
          placeholder="Your phone number"
          className={FIELD_CLASS}
        />
      </div>

      {/* EMAIL */}
      <div>
        <label
          htmlFor="email"
          className="mb-1.5 block font-body text-xs font-bold text-papad"
        >
          Email Address
        </label>

        <input
          id="email"
          required
          name="email"
          type="email"
          placeholder="Your email address"
          className={FIELD_CLASS}
        />
      </div>

      {/* CITY */}
      <div>
        <label
          htmlFor="city"
          className="mb-1.5 block font-body text-xs font-bold text-papad"
        >
          Preferred City
        </label>

        <input
          id="city"
          required
          name="city"
          type="text"
          placeholder="City / Location"
          className={FIELD_CLASS}
        />
      </div>

      {/* INVESTMENT RANGE (FRANCHISE ONLY) */}
      {kind === "franchise" && (
        <div className="sm:col-span-2">
          <label
            htmlFor="investment"
            className="mb-1.5 block font-body text-xs font-bold text-papad"
          >
            Investment Range
          </label>

          <select
            id="investment"
            required
            name="investment"
            defaultValue=""
            className={FIELD_CLASS}
          >
            <option value="" disabled>
              Select investment range
            </option>

            <option value="₹5L – ₹10L">
              ₹5L – ₹10L
            </option>

            <option value="₹10L – ₹20L">
              ₹10L – ₹20L
            </option>

            <option value="₹20L+">
              ₹20L+
            </option>
          </select>
        </div>
      )}

      {/* MESSAGE */}
      <div className="sm:col-span-2">
        <label
          htmlFor="message"
          className="mb-1.5 block font-body text-xs font-bold text-papad"
        >
          {kind === "franchise"
            ? "Tell Us About Your Plans"
            : kind === "career"
            ? "Tell Us About Your Work Experience"
            : "Message"}
        </label>

        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder={
            kind === "franchise"
              ? "Tell us about your location, plans or business background..."
              : kind === "career"
              ? "Tell us about your qualification or experience..."
              : "Write your message..."
          }
          className={`${FIELD_CLASS} resize-none`}
        />
      </div>

      {/* SUBMIT BUTTON */}
      <button
        type="submit"
        className="
          sm:col-span-2
          w-full
          rounded-full
          bg-vada-red
          px-7
          py-3.5
          font-display
          text-sm
          font-bold
          tracking-wide
          text-papad
          shadow-[0_10px_30px_rgba(196,30,42,0.20)]
          transition-all
          duration-300
          hover:-translate-y-1
          hover:bg-red-700
          hover:shadow-[0_15px_35px_rgba(196,30,42,0.35)]
        "
      >
        {kind === "franchise"
          ? "Submit Franchise Enquiry →"
          : kind === "career"
          ? "Apply via WhatsApp →"
          : "Send Message via WhatsApp →"}
      </button>

      {/* WHATSAPP NOTE */}
      <p className="sm:col-span-2 text-center font-body text-[11px] text-papad-dim">
        You will be redirected to WhatsApp after submitting your details.
      </p>
    </form>
  );
}