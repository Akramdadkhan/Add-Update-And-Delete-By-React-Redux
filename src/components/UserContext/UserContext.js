import React, { useState, createContext } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {

  const [users, setUsers] = useState([
    { id: 1, name: "Akram", lname: "Khan", email: "akram7@gmail.com", state: "Maharshtra", city: "Nanded", pincode: 431604 },
    { id: 2, name: "Wahaj", lname: "Amshan", email: "wahaj@gmail.com", state: "Maharshtra", city: "Nanded", pincode: 431604},
    { id: 3, name: "Shaikh", lname: "Aatif", email: "atif@gmail.com", state: "Mahrashtara", city: "Nanded", pincode: 431604 },
  ]);

  return (
    <UserContext.Provider value={[users, setUsers]}>
      {props.children}
    </UserContext.Provider>
  );
};
