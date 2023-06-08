"use client"

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import Form from "@components/Form";

const UpdateShow = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const showId = searchParams.get("id");

  const [show, setShow] = useState({
    flyer: "",
    eventLink: "",
    date: "",
    // description: "",
    // location: "",
    // artists: "",
    // artistSocials: "",
  });
  const [submitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const getShowDetails = async () => {
      const response = await fetch(`/api/show/${showId}`);
      const data = await response.json();

      setShow({
        flyer: data.flyer,
        eventLink: data.eventLink,
        date: data.date,
        // description: data.description,
        // location: data.location,
        // artists: data.artists,
        // artistSocials: data.artistSocials,
      });
    };

    if (showId) getShowDetails();
  }, [showId]);

  const updateShow = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!showId) return alert("Missing ShowId!");

    try {
      const response = await fetch(`/api/show/${showId}`, {
        method: "PATCH",
        body: JSON.stringify({
          flyer: show.flyer,
          eventLink: show.eventLink,
          date: show.date,
          // description: show.description,
          // location: show.location,
          // artists: show.artists,
          // artistSocials: show.artistSocials,
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
      type="Edit"
      show={show}
      setShow={setShow}
      submitting={submitting}
      handleSubmit={updateShow}
    />
  );
};

export default UpdateShow;
