"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";

export default function SearchLocation() {
  const [location, setLocation] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus the input if '/' key is pressed
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "/") {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="flex flex-col items-start gap-4 pt-12">
      <h1 className="font-bold md:text-center md:text-xl">
        Enter city name to view weather
      </h1>

      <form
        className="flex gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          window.location.href = `/location/${location}`;
        }}
      >
        <input
          className="w-40 rounded-md border-2 border-gray-200 bg-background text-foreground sm:w-auto"
          ref={inputRef}
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <Button>
          <Link href={`/location/${location}`}>GO!</Link>
        </Button>
      </form>
    </div>
  );
}
