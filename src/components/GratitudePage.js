import { useState } from "react";
import Box from "@mui/material/Box";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { TextField } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";

function GratitudePage() {
  const [gratitudeEntries, updateGratitudeEntries] = useState([]);
  const [inputValue, updateInputValue] = useState("");
  const [showValidationError, setShowValidationError] = useState(false);
  const [successSnackbarOpen, setSuccessSnackbarOpen] = useState(false);

  const inputIsValid = inputValue.length > 0;

  const handleClose = () => {

    setSuccessSnackbarOpen(false);
  };

  const handleEntryInput = (event) => {
    if (inputIsValid) {
      setShowValidationError(false);
    }

    if (event.key !== "Enter") return;
    event.preventDefault();

    if (inputIsValid) {
      updateInputValue("");
      console.log(inputValue);
      console.log(inputValue.length);
      console.log(inputIsValid);
      updateGratitudeEntries([...gratitudeEntries, inputValue]);
    } else {
      setShowValidationError(true);
    }
  };

  async function formSubmitHandler(event) {
    event.preventDefault();
    const response = await fetch(
      "https://eudaimonia-b4b7d-default-rtdb.firebaseio.com/gratitudeentries.json",
      {
        method: "POST",
        body: JSON.stringify(gratitudeEntries),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
    updateGratitudeEntries([]);
    updateInputValue("");
    setSuccessSnackbarOpen(true);
  }

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "left",
    color: theme.palette.text.secondary,
    alignContent: "center",
  }));

  const readyToSubmit = gratitudeEntries.length === 10;

  return (
    <form onSubmit={formSubmitHandler}>
      <ol>
        <div>
          <Box marginTop="200px">
            <div>
              <div>
                {gratitudeEntries.length ? (
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
                      error={showValidationError}
                      id="filled-error-helper-text"
                      helperText={
                        showValidationError && "Please enter a valid value."
                      }
                      variant="filled"
                      label="I am grateful for..."
                      size="medium"
                      sx={{
                        input: {
                          color: "white",
                        },
                      }}
                      color="warning"
                      onKeyDown={handleEntryInput}
                      onChange={(event) => {
                        updateInputValue(event.target.value);
                      }}
                      value={inputValue}
                      fullWidth
                      autoComplete="off"
                    ></TextField>
                  </div>
                ) : null}
              </Box>
            </div>
          </Box>
          <div>
            <Snackbar
              open={successSnackbarOpen}
              autoHideDuration={6000}
              onClose={handleClose}
              message="Thank you for your practice 🌞"
            ></Snackbar>
          </div>
        </div>
      </ol>

      {readyToSubmit ? (
        <Box textAlign="center">
          <button>Log entry</button>
        </Box>
      ) : null}
    </form>
  );
}

export default GratitudePage;
