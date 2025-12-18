import React from "react";
import DataLoader from "../utils/dataLoader";
function Contact() {
  const contactInfo = DataLoader.getContactInfo(); //contact info is an object
  const serviceList = DataLoader.getServices();
  console.log(contactInfo);
  const address = contactInfo.address;
  const phone = contactInfo.phoneNumbers;
  const email = contactInfo.email;

  return (
    <div>
      <header className="bg-secondary text-neutral py-12 px-4 text-center w-full mb-8">
        <h1 className="text-3xl font-elegant font-bold mb-4 text-neutral">
          Contacto
        </h1>
      </header>
      {/*Info */}
      <section className="max-w-3xl mx-auto px-4">
        {address && (
          <div className="mb-6">
            <h1>Ubicanos en :</h1>
            <p className="text-lg">{address.city}</p>
            <p className="text-lg">{address.street}</p>
            <p className="text-lg">{address.zip}</p>
          </div>
        )}
        {phone &&
          phone.length > 0 &&
          phone.map((number, index) => (
            <div key={index} className="mb-6">
              <h2 className="text-2xl font-semibold mb-2">
                Teléfono {number.type}
              </h2>
              <p className="text-lg">{number.number}</p>
            </div>
          ))}
      </section>
      4{/*Form  */}
      <section className="max-w-3xl mx-auto px-4 mb-12 ">
        <h2 className="text-2xl font-semibold mb-4">Envíanos un mensaje</h2>
        <form action="" className="border-radius rounded-sm p-4 shadow-md bg-secondary">
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
              <option value="" disabled selected>Seleccione un servicio</option>
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
      </section>
    </div>
  );
}

export default Contact;
