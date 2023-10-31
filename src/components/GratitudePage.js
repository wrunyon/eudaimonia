import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { TextField } from "@mui/material";

function GratitudePage() {
  const [gratitudeEntries, updateGratitudeEntries] = useState([]);
  const [entriesActive, setEntriesActive] = useState(false);
  const [inputValue, updateInputValue] = useState("");
  const [readyToSubmit, setReadytoSubmit] = useState(false);

  useEffect(() => {
    if (gratitudeEntries.length === 10) {
      setReadytoSubmit(true);
    }
  }, [gratitudeEntries.length]);

  useEffect(() => {
    if (gratitudeEntries.length > 0) {
      setEntriesActive(true);
    }
  }, [gratitudeEntries.length]);

  const handleEntryInput = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      updateInputValue("");
      console.log(inputValue);
      updateGratitudeEntries([...gratitudeEntries, inputValue]);
    }
  };

  const formSubmitHandler = (event) => {};

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "left",
    color: theme.palette.text.secondary,
    alignContent: "center",
  }));

  return (
    <form>
      <ol>
        <div>
          <Box marginTop="200px">
            <div>
              <div>
                {entriesActive ? (
                  <Box>
                    <Stack
                      borderTop={3}
                      borderBottom={3}
                      borderColor="Orange"
                      width="1000px"
                      spacing={2}
                      margin="auto"
                    >
                      {gratitudeEntries.map((inputValue) => {
                        return (
                          <Item>
                            <ListItemText primary={inputValue} />
                          </Item>
                        );
                      })}
                    </Stack>
                  </Box>
                ) : null}
              </div>
              <Box width="1000px" margin="auto" marginTop="50px">
                {!readyToSubmit ? (
                  <div>
                    <TextField
                      label="I am grateful for..."
                      size="medium"
                      color="warning"
                      onKeyDown={handleEntryInput}
                      onChange={(event) => {
                        updateInputValue(event.target.value);
                      }}
                      value={inputValue}
                      fullWidth
                    ></TextField>
                  </div>
                ) : null}
              </Box>
            </div>
          </Box>
        </div>
      </ol>

      {readyToSubmit ? (
        <Box textAlign="center">
          <button onClick={formSubmitHandler}>
            Submit
          </button>
        </Box>
      ) : null}
    </form>
  );
}

export default GratitudePage;
