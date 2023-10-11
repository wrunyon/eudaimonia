import classes from "./GratitudeForm.module.css";
import GratitudeInput from "./GratitudeInput";

function GratitudeForm() {
  return (
    <form className={classes.gratitudeform}>
      <ol>
        <div><GratitudeInput /></div>
      </ol>
      <button>Submit</button>
    </form>
  );
}

export default GratitudeForm;
