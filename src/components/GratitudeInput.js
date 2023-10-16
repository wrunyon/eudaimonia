import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import GratitudeEntry from "./GratitudeEntry";


function GratitudeInput(props) {

  const [inputValue, updateInputValue] = useState('');

  const submitHandler = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      props.onKeyDown(inputValue);
      updateInputValue('');
      console.log("Submitted!!!")
      console.log(inputValue);
    }
  };

  return (
    <div>
      <div>
      <GratitudeEntry entries={props.entries} />
      </div>

      <Box marginLeft="500px" marginRight="500px">
        <div>
          <TextField
            label="I am grateful for..."
            size="medium"
            color="warning"
            fullWidth
            onKeyDown={submitHandler}
            onChange={(event) => {updateInputValue(event.target.value)}}
            value={inputValue}
          ></TextField>
        </div>
      </Box>
    </div>
  );
}

export default GratitudeInput;
