import React from "react";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

const Searcher = ({ name, label, onChange }) => {
  return (
    <TextField
      name={name}
      label={label}
      variant="outlined"
      onChange={onChange}
      sx={{
        width: 680,
        marginY: 3,
      }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default Searcher;
