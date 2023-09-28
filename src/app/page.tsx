import SearchLocation from "@/components/SearchLocation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Weather",
  description: "Server rendered weather app",
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-start justify-between p-12 md:p-24">
      <h1 className="text-center text-2xl font-bold text-foreground md:text-4xl">
        Weather
      </h1>
      <SearchLocation />
    </main>
  );
}
