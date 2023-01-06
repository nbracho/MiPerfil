import {React,useState} from "react";



export default function Contact() {

    const [name, setName] = useState([]);
const [email, setEmail] = useState([]);
const [message, setMessage] = useState([]);

function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }
  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => alert("Message Enviado!"))
      .catch((error) => alert(error));
  }
  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed/v1/place?q=C.C+La+Fuente,+Cabimas,+Zulia,+Venezuela&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          />
          <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                DIRECCIÓN
              </h2>
              <p className="mt-1">
                Cabimas Edo zulia <br />
                Venezuela 4013
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                CORREO ELECTRÓNICO
              </h2>
              <a className="text-indigo-400 leading-relaxed">
                NicolasBracho@gmail.com
              </a>

            </div>
          </div>
        </div>
        <h2>
            ¡Contrátanos!
          </h2>
          <p className="leading-relaxed mb-5">
Envia una Solicitud de Contacto
          </p>
               
      </div>
                <a href="https://api.whatsapp.com/send?phone=584126530985&text=Hola%20Quiero%20Informacion%20Sobre%20Sus%20Servicios"
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Enviar Mensaje
            </a>
    </section>
            
  );
}