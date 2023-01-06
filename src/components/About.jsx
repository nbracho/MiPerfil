import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Bienvenido a Nuestro Portafolio
            <br className="hidden lg:inline-block" />Aqui Veras Algunos de Nuestros Trabajos.
          </h1>
          <p className="mb-8 leading-relaxed">
Hola, Mi Nombre es Nicolas Bracho Soy Ingeniero en Informatica Egresado de la Universidad Rafael Belloso Chacin en el año 2015, Me especializo en el desarrollo de Aplicaciones Web Con Laravel, Mysql y Javascript
Tengo Conocimientos Basicos de Desarrollo de Aplicaciones en Android y tambien manejo concimientos intermedios en Linux server, Junto con Apache 
lo necesario para desplegar un sitio totalmente funcional y seguro, tambien contruyo y perosnalizo sitios desde cero para empresas en wordpress, bien sean para ecommerce como para tener presencia en la web.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Trabaja conmigo
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              Mira mis trabajos anteriores
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./NicoProfile3.jpg"
          />
        </div>
      </div>
    </section>
  );
}