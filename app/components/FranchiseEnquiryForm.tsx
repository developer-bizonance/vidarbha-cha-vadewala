"use client";

import FranchiseWhatsAppForm from "./FranchiseWhatsAppForm";

const FIELD_CLASS = `
  mt-1.5
  w-full
  rounded-lg
  border
  border-white/10
  bg-ink
  px-3.5
  py-2.5
  font-body
  text-xs
  text-papad
  outline-none
  transition
  placeholder:text-white/25
  focus:border-turmeric/50
  focus:ring-2
  focus:ring-turmeric/10
`;

const SELECT_CLASS = `
  mt-1.5
  w-full
  rounded-lg
  border
  border-white/10
  bg-ink
  px-3.5
  py-2.5
  font-body
  text-xs
  text-papad
  outline-none
  transition
  focus:border-turmeric/50
`;

const LABEL_CLASS = "font-body text-[11px] font-bold text-papad";

export default function FranchiseEnquiryForm() {
  return (
    <FranchiseWhatsAppForm
      className="w-full max-w-[650px] justify-self-end rounded-[1.5rem] border border-white/10 bg-charcoal p-5 shadow-2xl sm:p-6"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="franchise-name" className={LABEL_CLASS}>Full Name</label>
          <input id="franchise-name" name="name" type="text" required placeholder="Your full name" className={FIELD_CLASS} />
        </div>

        <div>
          <label htmlFor="franchise-phone" className={LABEL_CLASS}>Phone Number</label>
          <input id="franchise-phone" name="phone" type="tel" required placeholder="Your phone number" className={FIELD_CLASS} />
        </div>

        <div>
          <label htmlFor="franchise-email" className={LABEL_CLASS}>Email Address</label>
          <input id="franchise-email" name="email" type="email" required placeholder="Your email" className={FIELD_CLASS} />
        </div>

        <div>
          <label htmlFor="franchise-city" className={LABEL_CLASS}>Preferred City</label>
          <input id="franchise-city" name="city" type="text" required placeholder="City" className={FIELD_CLASS} />
        </div>

        <div>
          <label htmlFor="franchise-format" className={LABEL_CLASS}>Preferred Format</label>
          <select id="franchise-format" name="format" required defaultValue="" className={SELECT_CLASS}>
            <option value="" disabled>Select format</option>
            <option>Vada Counter</option>
            <option>Quick Service Outlet</option>
            <option>Café Format</option>
          </select>
        </div>

        <div>
          <label htmlFor="franchise-property" className={LABEL_CLASS}>Property Status</label>
          <select id="franchise-property" name="property" required defaultValue="" className={SELECT_CLASS}>
            <option value="" disabled>Select option</option>
            <option>I have a property</option>
            <option>Looking for a property</option>
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="franchise-message" className={LABEL_CLASS}>Tell Us About Your Plans</label>
          <textarea
            id="franchise-message"
            name="message"
            rows={4}
            placeholder="Tell us about your location, plans or anything you'd like to discuss..."
            className={`${FIELD_CLASS} resize-none`}
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-5 w-full rounded-full bg-vada-red px-7 py-3.5 font-body text-sm font-black text-white shadow-lg shadow-vada-red/20 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
      >
        Submit Franchise Enquiry <span className="ml-2">→</span>
      </button>

      <p className="mt-3 text-center font-body text-[10px] text-papad-dim/50">
        You will be redirected to WhatsApp after submitting your details.
      </p>
    </FranchiseWhatsAppForm>
  );
}