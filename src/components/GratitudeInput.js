import { useState } from 'react';

import GratitudeItem from './GratitudeItem';

function GratitudeInput () {
  const [enteredLines, addNewLine] = useState('');

  function itemSubmissionHandler (event) {
    addNewLine(event.target.value);
  }

    return (
    <GratitudeItem onItemSubmission={itemSubmissionHandler}/>
    )
};

export default GratitudeInput;