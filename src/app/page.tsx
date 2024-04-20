import ECommerce from "@/components/Dashboard/E-commerce";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ગુંદરણ પટેલ પરિવાર",
  description: "ગુંદરણ પટેલ પરિવાર",
};

export default function Home() {
  return (
    <div className="w-full">
      <ECommerce />
    </div>
  );
}
