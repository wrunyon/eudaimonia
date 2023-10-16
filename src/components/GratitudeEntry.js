function GratitudeEntry(props) {
  return (
    <div>
      {props.entries.map((entry) => {
        return <div>{entry}</div>;
      })}
    </div>
  );
}

export default GratitudeEntry;
