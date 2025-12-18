import React from "react";
import { RxRadiobutton } from "react-icons/rx";
import DataLoader from "../utils/dataLoader";
import Header from "../components/Header";
function Services() {
  const services = DataLoader.getServices();
  return (
    <>
      <Header name="Nuestros Servicios" />
      <section className="max-w-4xl mx-auto my-12 p-6 bg-white rounded-lg shadow-md">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-4 flex grid-cols-1 gap-4 mb-4 bg-secondary rounded-lg"
          >
            <div className="mb-4">
              <h3 className="text-xl font-semibold   mb-2 text-primary">
                {service.title}
              </h3>
              <p className="text-base">{service.description}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.features && (
                <ul className=" list-inside mt-2 col-span-2">
                  {service.features.map((feature, Index) => (
                    <li key={Index} className="text-dark font-light">
                      <RxRadiobutton className="inline mr-2 text-accent font-bold" />
                      {feature}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div>
              <span className="text-lg font-medium text-primary">Desde: </span>
              <span className="text-lg font-semibold text-dark">
                {service.priceRange.min} {service.priceRange.currency}
              </span>
            </div>
          </div>
        ))}

        <a
          className="mt-4 w-full md:w-auto bg-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors "
          href="/contact"
        >
          Consultar ahora
        </a>
      </section>
    </>
  );
}

export default Services;
