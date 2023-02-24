import React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { yellow } from "@mui/material/colors";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import GitHubIcon from "@mui/icons-material/GitHub";
import {
  starRepositories,
  unStarRepositories,
} from "../../utilities/repositories/getRepositories";

const CardRepo = ({ imageSrc, title, link, description, star, owner }) => {
  const colorM = yellow[700];

  const handleChangeStar = (star) => {
    star ? unStarRepositories(owner, title) : starRepositories(owner, title);
  };
  return (
    <>
      <Card style={{ display: "flex", width: 700, margin: 6 }}>
        <Box sx={{ display: "flex", alignItems: "center", marginX: 2 }}>
          <CardMedia
            component="img"
            sx={{ width: 151, height: 151, alignContent: "center" }}
            style={{ borderRadius: "50%" }}
            image={imageSrc}
            alt="img github profile"
          />
        </Box>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography component="div" variant="h5">
              {title}
            </Typography>
            <IconButton onClick={() => handleChangeStar(star)}>
              {star ? (
                <StarIcon
                  sx={{ height: 38, width: 38 }}
                  style={{ color: colorM }}
                />
              ) : (
                <StarBorderIcon
                  sx={{ height: 38, width: 38 }}
                  style={{ color: colorM }}
                />
              )}
            </IconButton>
          </Box>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
            style={{ maxWidth: 500 }}
          >
            {description ||
              " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}
          </Typography>
          <Link href={link} target="_blank" rel="noopener">
            <Typography variant="body1" color="textPrimary">
              <IconButton>
                <GitHubIcon />
              </IconButton>
              go to repository link
            </Typography>
          </Link>
        </CardContent>
      </Card>
    </>
  );
};

export default CardRepo;
