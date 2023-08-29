import React from "react";
import { useQuery } from "react-query";
import * as api from "./userApi";

export const User = ({setUserId}) => {
  const { data, isLoading, error, isError } = useQuery("users", api.getUsers);

  if(isLoading){
    return 'Loading user...'
  }
  if(isError){
    return 'Something went wrong!!'
  }
  return (
    <div >
      <ul>
        {data?.map((user) => (
          <>
            <li key={user.id}>{user.name}</li>
            <li>{user.username}</li>
            <button onClick={() =>setUserId(user.id)}>View</button>
          </>
        ))}
      </ul>
    </div>
  );
};
