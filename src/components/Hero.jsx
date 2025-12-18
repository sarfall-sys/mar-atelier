import React from "react";
import DataLoader from "../utils/dataLoader";
import { BiStar, BiSolidStar } from "react-icons/bi";
function Hero() {
  const services = DataLoader.getServices();
  const testimonials = DataLoader.getTestimonials();
  return (
    <div className="text-center py-12">
      <h1 className="text-4xl md:text-5xl font-bold text-dark md-6">
        Bienvenidos a{" "}
        <span className="text-primary">
          Mar<span className="text-gray">Atelier</span>
        </span>
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        Maxima calidad en confección a medida. Diseños exclusivos que reflejan
        tu estilo único.
      </p>
      <a
        href="https://wa.me/34600123456"
        className="bg-accent text-white px-4 py-2 m-2 rounded-sm"
      >
        Agenda tu cita
      </a>
      {/*Services Preview */}
      <section className="mt-12 max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-primary">
          Nuestros Servicios Destacados
        </h2>
        <div className="flex flex-col gap-4">
          {services.slice(0, 3).map((service, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold text-dark">
                {service.title}
              </h3>
              <p className="text-base text-gray-700">{service.description}</p>
              <img src={service.image_url} alt={service.title} className="w-full h-48 object-cover rounded-md" />
            </div>
          ))}
        </div>
      </section>
      {/*testmoniañs */}
      <section className="mt-12 max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-primary">
            Testimonios de Clientes
          </h2>
          <div className="flex flex-row gap-4">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <div key={index} className="mb-6">
                <h3 className="font-semibold">{testimonial.name}</h3>
                <span>{testimonial.date}</span>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <BiSolidStar key={i} className="inline text-yellow-500" />
                ))}
                <p className="text-base italic text-gray-700">
                  "{testimonial.content}"
                </p>
              </div>
            ))}
          </div>
      </section>
    </div>
  );
}

export default Hero;
