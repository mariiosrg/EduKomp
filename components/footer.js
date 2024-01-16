import Link from "next/link";
import Image from "next/image";
import React from "react";
import Container from "./container";

export default function Footer() {
  return (
    <div className="relative">
      <Container>
        <div className="flex items-center justify-center border-t py-4 flex-col">
          <h5 className="font-semibold text-lg">Kelompok 4</h5>
          <div className="flex flex-col items-center">
            <p>Mario Mora Siregar (50421781)</p>
            <p>Sheila Laksmi Andini (51421417)</p>
            <p>Dimas Ginanjar (50421389)</p>
          </div>
        </div>
      </Container>
    </div>
  );
}