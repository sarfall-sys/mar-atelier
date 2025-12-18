import React from "react";

export default function Banner() {
  return (
    <>
      <div className="bg-primary text-neutral py-12 px-4 text-center">
        <h2 className="text-3xl font-elegant font-bold mb-4">
          Bienvenido a MarAtelier
        </h2>
        <p className="text-lg max-w-2xl mx-auto">
          Maxima calidad en confección a medida. Diseños exclusivos que reflejan
          tu estilo único.
        </p>
        <div className="mt-6 bg-primary w-2 h-20"></div>
        <div className="mt-6 bg-secondary w-2 h-20"></div>
      </div>
    </>
  );
}
