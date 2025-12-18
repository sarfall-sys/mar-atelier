import React from "react";
import DataLoader from "../utils/dataLoader";
import Header from "../components/Header";
function Contact() {
  const contactInfo = DataLoader.getContactInfo(); //contact info is an object
  const serviceList = DataLoader.getServices();
  console.log(contactInfo);
  const address = contactInfo.address;
  const phone = contactInfo.phoneNumbers;
  const email = contactInfo.emails;

  return (
    <div>
      <Header name="Contacto" />
      {/*Info */}
      <section className="max-w-3xl mx-auto px-4">
        <div className="flex grid-cols-2 justify-between ">
          <div className="flex gap-2 col-span-1 flex-col">
            {address && (
              <div className="mb-6 ">
                <h1 className="text-lg font-bold text-primary">Ubicanos en :</h1>
                <p className="text-lg">{address.city}</p>
                <p className="text-lg">{address.street}</p>
                <p className="text-lg">{address.zip}</p>
              </div>
            )}
            {phone &&
              phone.length > 0 &&
              phone.map((number, index) => (
                <div key={index} className="mb-6">
                  <h1 className="text-lg font-semibold mb-2 text-primary">
                    Teléfono {number.type}
                  </h1>
                  <p className="text-lg">{number.number}</p>
                </div>
              ))}
            {email &&
              email.length > 0 &&
              email.map((emailAddress, index) => (
                <div key={index} className="mb-6">
                  <h1 className="text-lg font-semibold mb-2 text-primary">
                    Correo {emailAddress.type}
                  </h1>
                  <p className="text-lg">{emailAddress.address}</p>
                </div>
              ))}
          </div>
          {/*Form  */}

          <div className="flex gap-2 flex-col col-span-1">
            <h2 className="text-3xl font-semibold mb-4 text-accent">Formulario</h2>
            <form
              action=""
              className="border-radius border-accent rounded-sm p-4 shadow-md bg-secondary"
            >
              <div className="mb-4 ">
                <input type="text" placeholder="Nombre y apellido" />
              </div>
              <div className="mb-4">
                <input type="email" placeholder="Correo electrónico" />
              </div>
              <div className="mb-4">
                <input type="tel" placeholder="Teléfono" />
              </div>

              <div className="mb-4">
                <select className="w-full p-2 border border-gray-300 rounded-sm ">
                  <option value="" disabled selected>
                    Seleccione un servicio
                  </option>
                  <option value="">Arreglos Básicos</option>
                  <option value="">Transformaciones</option>
                  <option value="">Servicios Especiales</option>
                  <option value="">Trabajo a Medida</option>
                </select>
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="block mb-2 font-medium">
                  Mensaje:
                </label>
                <textarea
                  rows="4"
                  className="w-full p-2 border border-gray-300 rounded-sm "
                />
              </div>
              <button
                type="submit"
                className="bg-accent text-white px-4 py-2 rounded-sm"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
