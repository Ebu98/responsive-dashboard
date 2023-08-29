import React, { useState } from "react";
import { useQuery } from "react-query";
import * as api from "./userApi";
import UserForm from "./user-Form";
import ReactPDF from "./pdf";
import DownloadPDFButton from "./pdf";
// import ReactPDF from "./pdf";

const UserDetail = ({ userId }) => {
  const {
    data: user,
    isLoading,
    isError,
    isFetched,
  } = useQuery(["users", userId], () => api.getUser(userId), {
    enabled: Boolean(userId),
  });
  const [isEditing, setIsEditing] = useState(false);

  if (!userId) {
    return "Select a user";
  }
  if (isLoading) {
    return "Loading user details...";
  }
  if (isError) {
    return "Something went wrong";
  }
  return (
    <div>
      <button onClick={() => setIsEditing(!isEditing)}>
        {isEditing ? "CANCEL" : "EDIT"}
      </button>
      {isEditing ? (
        <UserForm user={user} setIsEditing={setIsEditing}/>
      ) : (
        <>
          <h2>{user.name}</h2>
          <p>{user.username}</p>
        </>
      )}
      <DownloadPDFButton/>
    </div>
  );
};

export default UserDetail;


