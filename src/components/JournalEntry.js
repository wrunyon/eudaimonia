import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function MultilineTextFields() {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 20, width: "100%" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
      <TextField
          id="standard-multiline-static"
          label="Multiline"
          multiline
          rows={40}
          defaultValue="Write your journal entry here"
          variant="standard"
        />
      </div>
    </Box>
  );
}
