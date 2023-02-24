import React, { useEffect, useState } from "react";
import CardRepo from "../../molecules/card/Card";
import {
  getFaovorites,
  getRepositories,
} from "../../utilities/repositories/getRepositories";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Navbar from "../../organisms/Navbar";
import Searcher from "../../atoms/Searcher";

const Repositories = () => {
  const [repositories, setRepositories] = useState();
  const [favRepos, setFavRepos] = useState();
  const [value, setValue] = useState(0);
  const [search, setSearch] = useState("");

  const searchRepos = repositories?.filter(({ name }) =>
    name.toUpperCase().includes(search.toUpperCase())
  );
  const searchFavRepos = favRepos?.filter(({ name }) =>
    name.toUpperCase().includes(search.toUpperCase())
  );

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    getRepositories().then(setRepositories);
    getFaovorites().then(setFavRepos);
  }, []);

  return (
    <Box>
      <Navbar />
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="primary"
          indicatorColor="primary"
        >
          <Tab label="All repositories" />
          <Tab label="My favorites" />
        </Tabs>
        <Searcher
          name="searcher"
          label="Search repository"
          onChange={handleSearch}
        />

        {value === 0 && (
          <>
            {searchRepos?.length === 0 ? (
              <CardRepo
                imageSrc="https://via.placeholder.com/150x150.png?text=No+results"
                title="No results found for your search"
                description="Try searching other names"
              />
            ) : (
              searchRepos?.map(({ name, owner, description, id, html_url }) => (
                <CardRepo
                  key={id}
                  owner={owner.login}
                  imageSrc={owner.avatar_url}
                  title={name}
                  link={html_url}
                  description={description}
                  star={favRepos?.some((rep) => rep.id === id)}
                />
              ))
            )}
          </>
        )}
        {value === 1 && (
          <>
            {searchFavRepos?.length === 0 ? (
              <CardRepo
                imageSrc="https://via.placeholder.com/150x150.png?text=No+results"
                title="No results found for your search"
                description="Try searching other names"
              />
            ) : (
              searchFavRepos?.map(
                ({ name, owner, description, id, html_url }) => (
                  <CardRepo
                    key={id}
                    owner={owner.login}
                    imageSrc={owner.avatar_url}
                    title={name}
                    link={html_url}
                    description={description}
                    star={favRepos?.some((rep) => rep.id === id)}
                  />
                )
              )
            )}
          </>
        )}
      </Box>
    </Box>
  );
};

export default Repositories;
