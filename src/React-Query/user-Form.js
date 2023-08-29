import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import * as api from "./userApi";

const UserForm = ({ user, setIsEditing }) => {
  const [userFields, setUserFields] = useState({ ...user });

  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation(api.updateUser, {
    onMutate: (updatedUser) => {
      queryClient.setQueriesData(["user", user.id], updatedUser);
      setIsEditing(false);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["user", user.id]);
    },
  });

  const handleChange = (event) => {
    const { value, name } = event.target;
    setUserFields({
      ...user,
      [name]: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    mutate(userFields);
  };
  if (isLoading) {
    return "Saving your changes...";
  };
  

  // let x = toCelcius(77)
  const text = (toCelcius) =>{
    return `The temperature is ${toCelcius} celcius`
  }
  console.log(text(77))
  return (
    <div style={{ paddingTop: 20 }}>
      <form onSubmit={handleSubmit}>
        <label>
          Name:{""}
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={userFields.name}
            onChange={handleChange}
            style={{ marginBottom: 20, width: "100%" }}
          />
        </label>
        <label>
          Username:{""}
          <input
            type="text"
            name="username"
            placeholder="UserName"
            value={userFields.username}
            onChange={handleChange}
            style={{ marginBottom: 20, width: "100%" }}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserForm;
