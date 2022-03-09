


import { Box, Typography,Grid} from '@mui/material';

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

import { makeStyles } from '@mui/styles';



const useStyles = makeStyles({
    container:{
 width: "100%",
 margin:"auto !important",
 background:'#4b4b4b',
color:'white',
marginTop: '55px',
padding:"50px",

    } ,

icons:{

color:'#18dcff !important',
fontSize:'58 !important',
justifyContent:"space-around", 
margin:"10px",
marginTop: '40px',
},

ico:{

    color:'#18dcff !important',
    
    },
    
    cont:{
marginBottom:"300px !important",
fontSize:'30px',


    },

    pvt:{
color:'#a5b1c2',
fontSize:'15px',
    },

term:{
fontWeight:'lighter !important',
fontSize:'15px !important',

}
})



const Footer = () => {
   const classes = useStyles();
   

    return (
       <>
<Box  className={classes.container}  >

<Grid container 
  direction="row"
  justifyContent="space-around"
  alignItems="center">
<Grid items  sm={12} md={4} > 


<Typography> <b>inshorts</b> <span  className={classes.pvt}>medialabs pvt. ltd.<br/>
©COPYRIGHT 2021 </span></Typography>

   </Grid>

<Grid items   sm={12} md={4}><Typography > <span  className={classes.cont}  >Contact us</span>  <MailOutlineIcon className={classes.ico}     sx={{ fontSize: 60 }}/>   </Typography>  
 
<Typography className={classes.term}>  Terms & conditions<br/>
Privacy Policies</Typography> 

  </Grid>
<Grid items   sm={12} md={4}  >   

<FacebookIcon className={classes.icons} fontSize="large"   />
<TwitterIcon  className={classes.icons}  fontSize="large"  />
<LinkedInIcon className={classes.icons} fontSize="large"  />
 </Grid> 



</Grid>

</Box>


       </>
    )
}

export default  Footer;