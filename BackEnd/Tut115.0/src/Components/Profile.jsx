import React from "react";
import { useParams } from "react-router-dom";

const Profile = () => {
  const params = useParams();
  return (
    <>
      <div>This is a Profile page of User : {params.user}</div>
    </>
  );
};

export default Profile;
