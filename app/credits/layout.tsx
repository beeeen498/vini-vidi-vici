import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Credits | Veni Vidi Vici",
  description:
    "Media credits and attributions for images and videos used across the Veni Vidi Vici website.",
};

export default function CreditsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
