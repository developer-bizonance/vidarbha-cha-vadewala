import Link from "next/link";

export default function DeliveryBar() {
  return (
    <div className="bg-vada-red px-5 py-2 text-center">
      <p className="font-body text-xs font-semibold uppercase tracking-wide text-papad sm:text-sm">
        🛵 Home delivery available now —{" "}
        <Link href="/#contact" className="underline decoration-papad/50 underline-offset-2 hover:decoration-papad">
          order for your area
        </Link>
      </p>
    </div>
  );
}
