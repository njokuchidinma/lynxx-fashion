import { LayoutProps } from "@/interfaces";
import AppLayout from "@/components/layout/AppLayout";

export default function MarketLayout({ children }: LayoutProps) {
  return <AppLayout>{children}</AppLayout>;
}
