<<<<<<< HEAD
<<<<<<< HEAD
=======
import React from 'react';
=======
import React from 'react'
import { AppBar, Paper,Box ,TextField, Stack, Typography, Button, Link} from '@mui/material'
import BgLogin from '../../assets/workspace-concept-with-sewing-machine-min.jpg'
import LogoHome from '../../assets/Logo-min.svg'
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
>>>>>>> 3c599821b41412a2e95a88d65a07f60af9169668


export default function Login() {
  const styles={
    paperContainer:{
        backgroundSize : "cover",
        backgroundImage: `url(${BgLogin})`,
        backgroundRepeat: "no-repeat",
        backgroundColor: "black",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        width: "100%",
    },
    positionForm:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center"

    }
}


return (
<Paper style={styles.paperContainer} sx={{ height :"100vh"}}>
    <AppBar
       position="static"  
       style={{ background: 'transparent', boxShadow: 'none'}} 
       sx={{height:90,display:"flex", flexDirection:"row",justifyContent:"space-between"}}>
        <Link href="/" underline="none">
          <Box
            component = "img"
            alt = "logo of molato application"
            src ={LogoHome}
            sx={{
                height: 100,
                width: 180,
                m:2,
                display: {xs:"none", sm:"block"}
            }}
            />
           <Box
            component="img"
            sx={{
            height: 90,
            width: 120,
            m:2,
            display: {xs:"block", sm:"none"}
                }}
            alt="logo of molato"
            src={LogoHome}
             
        />   
        </Link>
        <Link 
        href="/auth" 
        underline="none"
        sx={{ p:"40px"}}>
            <Button 
            variant="contained" 
            sx={{
              marginLeft:"20px",
              backgroundColor: "#D2282D",
              color : "#fff",
              borderRadius:"10px",
              m:"30px",
              '&:hover':{
                backgroundColor:"#fff",
                color:"#D2282D"
              },
              display: {
                xs:"none",
                sm:"block"}}}>Inscription</Button>
            <AppRegistrationIcon sx={{ marginLeft:"20px", color:"#D2282D",display: {xs:"block", sm:"none"}}}/>
          </Link>
    </AppBar>
   <Stack 
    sx={{
        backgroundColor:"#fff",
        width:"30%",
        height:"75%",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        textAlign:"center",
        ml:"35%",
        borderRadius:"20px",
        '@media (max-width:900px)':{
            width:"85%",
            height:"50%",
            ml:"7%",
            mt:"35%",

    }}}
    direction="column"
    spacing={2}
    >
        <Typography 
        variant="h6" 
        sx={{
            mt:"40px",
            color:"#D2282D",
            fontSize:"24px",
            fontWeight:"600",
            lineHeight:"25px",
            width:"55%",
            mb:"30px",
            '@media (max-width:600px)':{
                fontSize:"20px",
                mb:"20px",
                width:"70%"
            }}}>Commencez à gérer en un click</Typography>
         <form style={styles.positionForm} >
            <TextField
                required
                id="name"
                placeholder='Maria Lozo'
                sx={{backgroundColor:"#E4E4EC",
                mb:"30px",
                width: { sm: 200, md: 300 },
                "& .MuiInputBase-root": {
                    height: 50
                } }}
                >
            </TextField>
            <TextField
                required
                id="password"
                type="password"
                placeholder='Mot de passe'
                sx={{backgroundColor:"#E4E4EC",
                mb:"20px",
                width: { sm: 20, md: 300 },
                "& .MuiInputBase-root": {
                    height: 50
                }}}
                >
            </TextField>
            <Stack 
            sx={{display:"flex",
            justifyContent:"center",
            alignItems:"center",
            mt:"20px"}}>
            <Button 
            variant="contained" 
            type="submit"
             sx={{width:"180px",
            marginLeft:"20px",
            backgroundColor: "#D2282D",
            color : "#fff",
            borderRadius:"10px",
            '&:hover':{
              backgroundColor:"#fff",
              color:"#D2282D"
            },
            '@media (max-width:600px)':{
              width:"200px"
            }}}>
               Envoyer
            </Button>
            </Stack>
        </form>
   </Stack>
</Paper>
)
}

<<<<<<< HEAD
export default Login
>>>>>>> 9bcf34aa944cfcab578a9b0d3d2379bfa3b9abfe
=======
>>>>>>> 3c599821b41412a2e95a88d65a07f60af9169668
