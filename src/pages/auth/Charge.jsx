import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";

const Charge = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "98vh",
        background:
          "radial-gradient(circle, rgba(174,233,238,1) 0%, rgba(148,187,233,1) 100%)",
      }}
    >
      <CircularProgress />
      <Typography color="white">loading</Typography>
    </Box>
  );
};

export default Charge;
