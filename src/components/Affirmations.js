import React from 'react';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import classes from './Affirmations.module.css'

const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(5),
}));

export default function ChipsArray() {
  const [chipData, setChipData] = React.useState([
    { key: 0, label: 'The cave you fear to enter holds the treasure you seek' },
    { key: 1, label: 'Life shrinks or expands in proportion to ones courage' },
    { key: 2, label: 'Fear is the mind-killer' },
    { key: 3, label: 'These pretzels are making me thirsty!' },
    { key: 4, label: 'Affirmation 5' },
  ]);

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };

  return (
    <Paper
      className={classes.chipsarray}
    >
      {chipData.map((data) => {
        let icon;

        if (data.label === 'React') {
          icon = <TagFacesIcon />;
        }

        return (
          <ListItem key={data.key}>
            <Chip
              className={classes.chip}
              icon={icon}
              label={data.label}
              onDelete={data.label === 'React' ? undefined : handleDelete(data)}
            />
          </ListItem>
        );
      })}
    </Paper>
  );
}