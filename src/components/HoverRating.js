import React from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';


//Komponenta Hodnocení článku použito v MainPosts.js
const labels = {
  0.5: '😡',
  1: '🤢',
  1.5: '😒',
  2: '😕',
  2.5: '🤨',
  3: '😐',
  3.5: '🙂',
  4: '😉',
  4.5: '😀',
  5: '😍',
};

export default function HoverRating() {
  const [value, setValue] = React.useState(4);
  const [hover, setHover] = React.useState(-1);

  return (
    <Box
      sx={{
        width: 200,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      {value !== null && (
        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
      )}
    </Box>
  );
}