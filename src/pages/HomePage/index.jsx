import React from 'react'
import clothes from '../../assets/workshop-with-clothes-sewing-machine1-min.png'
import {  Paper, Box, Toolbar, AppBar, Button, Stack, Typography } from '@mui/material'
import LogoHome from '../../assets/Logo-min.svg'
import LoginIcon from '@mui/icons-material/Login';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import { Link } from '@mui/material'


export default function HomePage() {
  const styles = {
    paperContainer: {

        backgroundSize : "cover",
        backgroundImage: `url(${clothes})`,
        backgroundRepeat: "no-repeat",
        backgroundColor: "black",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        width: "100%",
     

    }, 
  
};




  return (
   
    <Paper elevation={3} style={styles.paperContainer} sx={{ height :"100vh"}}>
      <AppBar 
       position="static"  
       style={{ background: 'transparent', boxShadow: 'none'}} 
       sx={{height:90}}>
      <Toolbar sx={{display:"flex", margin:"20px",justifyContent:"space-between" }}>
        <Link href="/" underline="none">
          <Box
          component = "img"
          alt = "logo of molato application"
          src ={LogoHome}
          sx={{
            height: 100,
            width: 180,
            display: {xs:"none", sm:"block"}
          }}
        />
          <Box
            component="img"
            sx={{
               height: 90,
               width: 120,
               mt:2,
               display: {xs:"block", sm:"none"}
                 }}
            alt="logo of molato"
            src={LogoHome}
                 
            />
        </Link>
           <Stack sx={{display:"flex", flexDirection : "row"}}>
              <Link href="/login" underline="none">
                <Button 
                variant="contained" 
                sx={{
                  marginLeft:"20px",
                  backgroundColor: "#D2282D",
                  color : "#fff",
                  borderRadius:"10px",
                  '&:hover':{
                    backgroundColor:"#fff",
                    color:"#D2282D"
                  },
                  display: {
                    xs:"none",
                    sm:"block"}}}>Se connecter</Button>
                <LoginIcon sx={{ color:"#D2282D",display: {xs:"block", sm:"none"}}}/>
              </Link>
      
              <Link href="/auth" underline="none">
                <Button 
                variant="contained" 
                sx={{width:"150px",
                marginLeft:"20px",
                backgroundColor: "#D2282D",
                color : "#fff",
                borderRadius:"10px",
                '&:hover':{
                  backgroundColor:"#fff",
                  color:"#D2282D"
                },
                display: {
                  xs:"none",
                  sm:"block"}}}>S'inscrire</Button>
                <AppRegistrationIcon sx={{ marginLeft:"20px", color:"#D2282D",display: {xs:"block", sm:"none"}}}/>
              </Link>
            
           </Stack>
      </Toolbar>
      </AppBar>
     <Stack sx={{display:"flex",flexDirection:"column", justifyContent:"center", alignItems:"center",textAlign:"center", mt:"100px",'@media (max-width:600px)':{width:"90%", mt:"200px"}}}>
        <Typography variant="p" sx={{fontSize:"64px",width:"70%",fontWeight:"900",color:"#D2282D",'@media (max-width:600px)':{fontSize:"33px", width:"90%",marginLeft:"10%"}}}>Une autre façon de gérer votre maison de couture</Typography>
        <Typography variant="p" sx={{fontSize:"26px", textTransform:"uppercase", color:"#fff", fontWeight:"500",'@media (max-width:600px)':{fontSize:"22px", width:"90%",marginLeft:"10%"}}}>Avoir une vue sur toutes les activités et clients </Typography>
     </Stack>
    </Paper>

  )
}

