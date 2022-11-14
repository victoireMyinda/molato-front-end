import React from 'react'
import { AppBar, Paper,Box ,TextField, Stack, Typography, Button, Link} from '@mui/material'
import BgAuth from '../../assets/pexels-pavel-danilyuk-6461200.jpg'
import LogoHome from '../../assets/Logo-min.svg'
import LoginIcon from '@mui/icons-material/Login';
// import { Container } from '@mui/material';
// import { FormControl,InputLabel,Input, FormHelperText} from '@mui/material';


export default function Auth() {
    const styles={
        paperContainer:{
            backgroundSize : "cover",
            backgroundImage: `url(${BgAuth})`,
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
            href="/login" 
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
                    sm:"block"}}}>Se connecter</Button>
                <LoginIcon sx={{ color:"#D2282D",display: {xs:"block", sm:"none"}}}/>
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
                mb:"30px",
                '@media (max-width:600px)':{
                    fontSize:"20px",
                    mb:"20px",
                    width:"70%"
                }}}>Apprendre à mieux gérer commence aujourd’hui</Typography>
             <form style={styles.positionForm} >
                <TextField
                    required
                    id="name"
                    placeholder='Maria Lozo'
                    sx={{backgroundColor:"#E4E4EC",
                    mb:"20px",
                    width: { sm: 200, md: 300 },
                    "& .MuiInputBase-root": {
                        height: 40
                    } }}
                    >
                </TextField>
                <TextField
                    required
                    id="boutique"
                    placeholder="Maria couture"
                    sx={{backgroundColor:"#E4E4EC",
                    mb:"20px",
                    width: { sm: 200, md: 300 },
                    "& .MuiInputBase-root": {
                        height: 40
                    }}}
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
                        height: 40
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
                     S’enregistrer
                </Button>
                </Stack>
            </form>
       </Stack>
    </Paper>
  )
}
