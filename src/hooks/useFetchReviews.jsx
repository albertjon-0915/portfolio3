import React, { useState, useEffect } from "react";

function UseFetchReviews() {
  const [reviews, setReview] = useState([]);

  const fetchData = async () => {
    const response = await fetch(`${import.meta.env.VITE_APP_API_URL}/reviews`);
    const data = await response.json();
    if (data) setReview([...data.result]);
  };

  useEffect(() => {
    fetchData();
  }, [reviews]);

  return { reviews };
}

export default UseFetchReviews;
