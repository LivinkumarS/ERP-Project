import React from "react";
import "./bugDetailPage.css";
import { useParams } from "react-router-dom";

export default function bugDetailPage() {
  const { errorId } = useParams();

  const apiResponse = {};

  return <div>bugDetailPage</div>;
}
