"use client"
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import Profile from "@components/Profile";

const UserProfile = ({ params }) => {
  const searchParams = useSearchParams();
  const userName = searchParams.get("name");

  const [userShows, setUserShows] = useState([]);

  useEffect(() => {
    const fetchShows = async () => {
      const response = await fetch(`/api/users/${params?.id}/shows`);
      const data = await response.json();

      setUserShows(data);
    };

    if (params?.id) fetchShows();
  }, [params.id]);

  return (
    <Profile
      name={userName}
      desc={`Welcome to ${userName}'s personalized profile page. Explore ${userName}'s exceptional shows and be inspired by the power of their imagination`}
      data={userShows}
    />
  );
};

export default UserProfile;
