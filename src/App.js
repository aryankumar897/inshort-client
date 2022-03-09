
import './App.css';
import {  Box } from '@mui/material';

import Articles from './components/Articles';

import Footer from './components/Footer'
import Header from "./components/Header"
import InfoHeader from "./components/InfoHeader"

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  container: {
    marginTop: 110,
    width: '75%',
    margin: '0 auto',

  },

})


function App() {
  const classes =useStyles();
  return (
  <>
<Box>
      <Header />
      <Box className={classes.container}>
       <InfoHeader / >
        <Articles /> 
      </Box>
    
    </Box>

<Footer />
</>
  );
}
export default App;
