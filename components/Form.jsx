"use client"
import Link from "next/link";
import { useState } from "react";
import dotenv from "dotenv";
import Galery from "./Contact";
import { useSession } from "next-auth/react";


dotenv.config();

const Form = ({ type, show, setShow, submitting, handleSubmit }) => {
  const { data: session } = useSession();
  const [locationError, setLocationError] = useState(false);
  const [formError, setFormError] = useState(false);
  const [file, setFile] = useState(null);
  const authorizedEmails = ["ignaluna98pb@gmail.com", "lualeva17@gmail.com",
    "terriproduccionescontacto@gmail.com", "terriproducciones@gmail.com"];
  // process.env.AUTHORIZED_EMAILS.split(",")



  const handleLocationChange = (e) => {
    const locationValue = e.target.value;
    setShow({ ...show, location: locationValue });

    // Validar si el valor contiene espacios en blanco
    // if (locationValue.includes(" ")) {
    //   setLocationError(true);
    // } else {
    //   setLocationError(false);
    // }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!file) return;

    // Verificar si hay error de ubicación antes de enviar el formulario
    if (!locationError) {
      // Verificar si hay campos vacíos antes de enviar el formulario
      if (show.eventLink && show.date && show.location) {
        handleSubmit(file);
      } else {
        setFormError(true);
      }
    }
  };
  const isSubmitDisabled = submitting || locationError || formError;


  return (
    <>
      {
        authorizedEmails.includes(session?.user.email) ? (
          <section className="w-full max-w-full flex-start flex-col">
            <h1 className="head_text text-left">
              <span className="blue_gradient">{type} Show</span>
            </h1>
            <p className="desc text-left max-w-md">
              {type} and share amazing shows with the world, and let your imagination
              run wild with any event you desire.
            </p>

            <form onSubmit={onSubmit} className="mt-10 w-full max-w-2xl flex flex-col gap-7">

              <label>
                <span className="font-satoshi font-semibold text-base text-gray-700">
                  Flyer or Event Image
                </span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    setFile(e.target.files[0])
                  }}
                  required
                  className="form_input rounded bg-white"
                />
              </label>

              <label>
                <span className="font-satoshi font-semibold text-base text-gray-700">
                  Event Link
                </span>
                <input
                  value={show.eventLink}
                  onChange={(e) => setShow({ ...show, eventLink: e.target.value })}
                  type="text"
                  placeholder="Enter event link"
                  required
                  className="form_input"
                />
              </label>

              <label>
                <span className="font-satoshi font-semibold text-base text-gray-700">
                  Date
                </span>
                <input
                  value={show.date}
                  onChange={(e) => setShow({ ...show, date: e.target.value })}
                  type="text"
                  placeholder="Enter date"
                  required
                  className="form_input"
                />
              </label>
              <label>
                <span className="font-satoshi font-semibold text-base text-gray-700">Location</span>
                <input
                  value={show.location}
                  onChange={handleLocationChange}
                  type="text"
                  placeholder="Enter location"
                  required
                  className={`form_input ${locationError ? "border-red-500" : ""}`}
                />
              </label>


              <div className="flex-end mx-3 mb-5 gap-4">
                <Link href="/" className="text-gray-500 text-sm">
                  Cancel
                </Link>

                <button
                  type="submit"
                  disabled={isSubmitDisabled}
                  className={`px-5 py-1.5 text-sm rounded-full text-white ${isSubmitDisabled ? "bg-gray-500 cursor-not-allowed" : "bg-primary-orange"
                    }`}
                >
                  {submitting ? `${type}ing...` : type}
                </button>
              </div>
              {formError && (
                <p className="text-red-500 text-sm text-center">Todos los campos son obligatorios, gila.</p>
              )}
            </form>
          </section>
        ) : (
          <>
            <Galery></Galery>
          </>
        )
      }
    </>
  );
};

export default Form;
