import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const ChangeAuth = ({ title, text, link }) => {
  return (
    <Box sx={{ mt: 2, width: "100%" }}>
      <Divider sx={{ width: "100%", borderTop: "1px solid #ccc" }} />
      <Typography component="p" variant="body2" sx={{ mt: 2 }}>
        {text}
      </Typography>
      <Button
        variant="text"
        component={Link}
        to={`/${link}`}
        fullWidth
        sx={{
          mt: 2,
          ml: 0.5,
          fontWeight: "bold",
          color: "primary.main",
        }}
      >
        {title}
      </Button>
    </Box>
  );
};

export default ChangeAuth;
