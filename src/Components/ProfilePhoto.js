import React from "react";
import profilePhoto from "./images/profilePhoto.jpeg";

const ProfilePhoto = () => {
  return (
    <div className="grid place-content-center w-60 h-60 ">
      <img className="rounded-lg" src={profilePhoto} alt="" />
    </div>
  );
};

export default ProfilePhoto;
