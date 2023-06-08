"use client"

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Form from "@components/Form";

const CreateShow = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const [submitting, setIsSubmitting] = useState(false);
  const [show, setShow] = useState({
    flyer: "",
    eventLink: "",
    date: "",
    description: "",
    location: "",
    // artists: [],
    // artistSocials: [],
  });

  const NewShow = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/show/new", {
        method: "POST",
        body: JSON.stringify({
          flyer: show.flyer,
          eventLink: show.eventLink,
          date: show.date,
          description: show.description,
          location: show.location,
          // artists: show.artists,
          // artistSocials: show.artistSocials,
          userId: session?.user.id,
        }),
        
      });

      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form
      type="Create"
      show={show}
      setShow={setShow}
      submitting={submitting}
      handleSubmit={NewShow}
    />
  );
};

export default CreateShow;
