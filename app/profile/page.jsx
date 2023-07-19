"use client"
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Profile from "@components/Profile";

const MyProfile = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const [myShows, setMyShows] = useState([]);

  useEffect(() => {
    const fetchShows = async () => {
      const response = await fetch(`/api/show`);
      const data = await response.json();

      setMyShows(data);
    };

    if (session?.user.id) fetchShows();
  }, [session?.user.id]);

  const handleEdit = (show) => {
    router.push(`/update-show?id=${show._id}`);
  };

  const handleDelete = async (show) => {
    const hasConfirmed = confirm(
      "Queres eliminar este show?"
    );

    if (hasConfirmed) {
      try {
        await fetch(`/api/show/${show._id.toString()}`, {
          method: "DELETE",
        });

        const filteredShows = myShows.filter((item) => item._id !== show._id);

        setMyShows(filteredShows);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Profile
      name='My'
      desc='Los mejores shows de Cordoba Capital'
      data={myShows}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default MyProfile;
