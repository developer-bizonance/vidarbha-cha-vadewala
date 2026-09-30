import Image from "next/image";
import Link from "next/link";

const SOCIALS = [
  {
    name: "Instagram",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4.2" />
        <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
        <path d="M14 8.5h2.5V5H14c-2.2 0-4 1.8-4 4v2H8v3.5h2V21h3.5v-6.5H16l.5-3.5h-3V9c0-.6.4-1 1-1Z" />
      </svg>
    ),
  },
  {
    name: "Google",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 12h6.5c.2 3.8-2.6 7-6.5 7-4 0-7-3.1-7-7s3-7 7-7c1.9 0 3.4.7 4.6 1.8" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
        <rect x="2.5" y="6" width="19" height="12" rx="3.5" />
        <path d="M10.5 9.7 15 12l-4.5 2.3Z" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-charcoal">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/#home" className="flex flex-col leading-none">
            <span className="font-marathi text-xl font-bold tracking-wide text-papad">
              विदर्भाचा <span className="text-vada-red">वडेवाला</span>
            </span>
          </Link>
          <p className="mt-4 max-w-xs font-body text-sm leading-relaxed text-papad-dim">
            Bringing the authentic taste of Vidarbha to your plate with freshly fried vadas.
          </p>
        </div>

        <div>
          <h3 className="font-display text-sm tracking-widest text-turmeric">EXPLORE</h3>
          <ul className="mt-4 space-y-2 font-body text-sm text-papad-dim">
            <li><Link href="/#about" className="hover:text-papad">About </Link></li>
            <li><Link href="/#menu" className="hover:text-papad">Menu</Link></li>
            <li><Link href="/#franchise" className="hover:text-papad">Franchise</Link></li>
           
            <li><Link href="/#contact" className="hover:text-papad">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm tracking-widest text-turmeric">VISIT US</h3>
          <ul className="mt-4 space-y-2 font-body text-sm text-papad-dim">
            <li>Itwari Market Road, Nagpur, Vidarbha, MH</li>
            <li>Open daily · 10:00 AM – 11:00 PM</li>
            <li><a href="tel:+919999999999" className="hover:text-papad">+91 99999 99999</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm tracking-widest text-turmeric">STAY SPICY</h3>
          <p className="mt-4 font-body text-sm text-papad-dim">Follow the stall for daily specials and new outlet drops.</p>
          <div className="mt-4 flex gap-3">
            {SOCIALS.map((s) => (
              <a
                key={s.name}
                href={s.href}
                aria-label={s.name}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-papad-dim transition-colors hover:border-vada-red hover:text-turmeric"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-5 py-5">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 sm:flex-row">
          <p className="font-body text-xs text-papad-dim">
            Vidarbha Cha Vadewala. © {new Date().getFullYear()}. All Rights Reserved.
          </p>

          <div className="flex items-center gap-2">
            <span className="font-body text-xs text-papad-dim">Developed by</span>
            <a href="https://bizonance.in/" target="_blank" rel="noopener noreferrer">
              <Image
                alt="Bizonance"
                width={95}
                height={28}
                src="/image.png"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}