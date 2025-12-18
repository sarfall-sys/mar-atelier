import React from "react";
import Header from "../components/Header";
import DataLoader from "../utils/dataLoader";
function About() {
  const aboutInfo = DataLoader.getAboutInfo();
  return (
    <>
      <Header name="Nosotros" />
      <section className="max-w-4xl mx-auto my-12 p-6 bg-white rounded-lg shadow-md">
        <div className="flex flex-col place-content-start gap-8">
          <div className="col-span-1">
            <h3 className="text-2xl font-semibold mb-4 text-primary">
              Nuestra Historia
            </h3>
            <p className="text-base text-dark leading-7">{aboutInfo.history}</p>
          </div>
          <div className="col-span-1">
            <h3 className="text-2xl font-semibold mb-4 text-primary">
              Misión y Visión
            </h3>
            <p className="text-base text-dark leading-7">
              {aboutInfo.mission}
            </p>
            <p className="text-base text-dark leading-7">
              {aboutInfo.vision}
            </p>
          </div>
          <div className="col-span-1 mt-8">
            <h3 className="text-2xl font-semibold mb-4 text-primary">
              Valores
            </h3>
            <p className="text-base text-dark leading-7">{aboutInfo.values}</p>

          </div>
        </div>
      </section>
    </>
  );
}

export default About;
