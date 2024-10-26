import React, { useState, useEffect } from "react";

function useFetchProj() {
  const [projectItems, setProjectItems] = useState([]);

  const fetchData = async () => {
    const response = await fetch(`${import.meta.env.VITE_APP_API_URL}/stack`);
    const data = await response.json();

    if (data) {
      setProjectItems([
        ...data.result.projects.fullstack,
        ...data.result.projects.frontend,
        ...data.result.projects.backend,
      ]);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { projectItems };
}

export default useFetchProj;
