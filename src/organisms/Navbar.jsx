import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../store/auth/thunks";

const Navbar = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      sx={{
        background:
          "radial-gradient(circle, rgba(174,233,238,1) 0%, rgba(148,187,233,1) 100%)",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Repositories App
        </Typography>
        <div>
          <Button component={Link} to="/profile" color="inherit" sx={{ mr: 2 }}>
            Profile
          </Button>
          <Button component={Link} to="/" color="inherit" sx={{ mr: 2 }}>
            Repositories
          </Button>
          <Button onClick={handleLogout} color="inherit" sx={{ mr: 2 }}>
            Logout
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
