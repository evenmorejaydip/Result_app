import CardDataStats from "@/components/CardDataStats";
import ECommerce from "@/components/Dashboard/E-commerce";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Next.js E-commerce Dashboard | TailAdmin - Next.js Dashboard Template",
  description: "This is Next.js Home for TailAdmin Dashboard Template",
};

export default function Home() {
  return (
    <div className="w-full">
      <ECommerce />
    </div>
  );
}
