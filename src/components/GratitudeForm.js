import { useState } from "react";
import classes from "./GratitudeForm.module.css";
import GratitudeInput from "./GratitudeInput";

function GratitudeForm() {
  const [gratitudeEntries, updateGratitudeEntries] = useState([]);

  const handleEntryInput = (entryInput) => {
    console.log(entryInput);
    updateGratitudeEntries([...gratitudeEntries, entryInput]);
  };


  return (
    <form className={classes.gratitudeform}>
      <ol>
        <div>
          <GratitudeInput
            entries={gratitudeEntries}
            onKeyDown={handleEntryInput}
          />
        </div>
      </ol>
      {/* <button>Submit</button> */}
    </form>
  );
}

export default GratitudeForm;
