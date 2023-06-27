"use client"
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Form from "@components/Form";

const CreateShow = () => {
  const router = useRouter();
  const [submitting, setIsSubmitting] = useState(false);
  const [show, setShow] = useState({
    flyer: "",
    eventLink: "",
    date: "",
    location: "",
  });

  const NewShow = async (file) => {
    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.set("file", file);
      formData.append('upload_preset', 'Uploads-first');

      const data = await fetch('https://api.cloudinary.com/v1_1/dvh8hozns/image/upload', {
        method: 'POST',
        body: formData,
      }).then(r => r.json());


      const updatedShow = { ...show, flyer: data.secure_url };

      const response = await fetch("/api/show/new", {
        method: "POST",
        body: JSON.stringify(updatedShow),
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
