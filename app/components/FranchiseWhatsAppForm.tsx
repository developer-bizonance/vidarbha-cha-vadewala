"use client";

import type { FormEvent, ReactNode } from "react";

const WHATSAPP_NUMBER = "918956727311";

type FranchiseWhatsAppFormProps = {
  children: ReactNode;
  className?: string;
};

export default function FranchiseWhatsAppForm({
  children,
  className,
}: FranchiseWhatsAppFormProps) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const fields = [
      ["Name", formData.get("name")],
      ["Phone", formData.get("phone")],
      ["Email", formData.get("email")],
      ["Preferred City", formData.get("city")],
      ["Preferred Format", formData.get("format")],
      ["Property Status", formData.get("property")],
      ["Plans", formData.get("message") || "Not provided"],
    ] as const;
    const message = [
      "Hello Vidarbha Cha Vadewala, I am interested in a franchise.",
      "",
      ...fields.map(([label, value]) => `${label}: ${String(value ?? "").trim()}`),
    ].join("\n");

    window.location.assign(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
    );
  }

  return (
    <form onSubmit={handleSubmit} className={className}>
      {children}
    </form>
  );
}