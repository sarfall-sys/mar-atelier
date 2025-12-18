import React from "react";

export default function Header({name}) {
  return (
    <>
      <div className="bg-primary text-neutral py-12 px-4 text-center rounded-2xl mb-8 shadow-lg">
        <h2 className="text-3xl font-elegant text-light font-bold mb-4">
          {name}
        </h2>
        
      </div>
    </>
  );
}
