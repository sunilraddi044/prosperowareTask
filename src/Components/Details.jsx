import React from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const { documentId } = useParams();
  return <div>{documentId}</div>;
};

export default Details;
