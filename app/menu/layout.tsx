import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu | Veni Vidi Vici",
  description:
    "Explore our Italian menu featuring fresh pasta, pizza, main courses, desserts, cocktails, and wines.",
};

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
