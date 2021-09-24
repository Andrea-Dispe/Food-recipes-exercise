import { useState, useEffect } from 'react';
import Router from './components/Router';
import Container from '@mui/material/Container';
import { dummydata } from './dummydata';
import { DataContext } from './DataContext';


function App() {
  const [data, setData] = useState(dummydata);

  useEffect(() => {
    const userRecipes = JSON.parse(localStorage.getItem('userRecipes'));

    if (userRecipes) {
      setData((prev) => [...prev, ...userRecipes]);
    }
  }, []);

  return (
    <DataContext.Provider value={data}>
      <Container maxWidth="xl">
        <Router data={data} />
      </Container>
    </DataContext.Provider>
  );
}

export default App;
