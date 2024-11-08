'use client';

import { useContext } from "react";
import { AuthContext } from "@/contexts/AuthContext";

const Test = () => {
  const authContext = useContext(AuthContext);
  const expiryDate = authContext ? authContext.expiryDate : null;
  const accessToken = authContext ? authContext.accessToken : null;
  const accessTokenRef = authContext ? authContext.accessTokenRef : null;

  return (
    <>
      <h1>{expiryDate ? "Expiry Date: " + expiryDate.toString() : "No expiry date"}</h1>
      <p>Access Token: {accessToken}</p>
      <p>Access Token Ref: {accessTokenRef?.current}</p>
    </>
  );
};

export default Test;