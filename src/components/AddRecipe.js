import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import { useHistory } from 'react-router'

const AddRecipe = () => {
  const [title, setTitle] = useState();
  const [instructions, setInstructions] = useState();
  const [duration, setDuration] = useState();
  const history = useHistory()

  function handleChange(e) {
    if (e.target.id === 'title') {
      setTitle(e.target.value);
    }
    if (e.target.id === 'instructions') {
      setInstructions(e.target.value);
    }
    if (e.target.id === 'duration') {
      setDuration(e.target.value);
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
    let oldData = JSON.parse(localStorage.getItem('userRecipes'));
    if(!oldData) {
      oldData = [];
      const newData = [...oldData, { title, instructions, duration }];
      console.log('newData: ', newData);

      localStorage.setItem('userRecipes', JSON.stringify(newData));
    } else {
      const newData = [...oldData, { title, instructions, duration }];
      console.log('newData: ', newData);

      localStorage.setItem('userRecipes', JSON.stringify(newData));
    }
    history.go(0)
  }

  function handleUpload(e) {
    console.log('e: ', e.target.value);
  }
  return (
    <Paper elevation={3}>
      <Grid container gap={3} sx={{ padding: '50px' }}>
        <TextField fullWidth required id="title" label="title" onChange={handleChange} />
        <label htmlFor="contained-button-file">
          <Input accept="image/*" id="contained-button-file" multiple type="file" />
          <Button variant="contained" component="span" onClick={handleUpload}>
            Upload
          </Button>
        </label>
        <TextField
          fullWidth
          id="instructions"
          label="instructions"
          multiline
          maxRows={4}
          rows={4}
          required
          onChange={handleChange}
        />
        <Grid container justifyContent="space-between">
          <TextField required id="duration" label="duration"  type={"number"}  onChange={handleChange} />
          <Button variant="contained" sx={{ width: '300px' }} onClick={handleSubmit}>
            Submit
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default AddRecipe;
