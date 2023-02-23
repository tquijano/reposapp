import React, { useEffect, useState } from "react";
import { getRepositories } from "../../utilities/repositories/getRepositories";

const Repositories = () => {
  const [repositories, setRepositories] = useState();

  useEffect(() => {
    getRepositories().then(setRepositories);
  }, []);

  console.log("repositories", repositories);

  return (
    <div>
      Repositories
      {repositories?.map(({ name, git_url }) => (
        <h1>{name}</h1>
      ))}
    </div>
  );
};

export default Repositories;
