import { AppBar, Box, Button, Stack, styled,createTheme, Toolbar,Typography } from '@mui/material'
import React from 'react'
import imageHome from '../../assets/workshop-with-clothes-sewing-machine 1.png'
import Logo from '../../assets/Logo.svg'
import iconLogo from '../../assets/Icon_molato.png'
// import { Dehaze } from '@mui/icons-material'

const HomePage = () => {
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
  });
    const styles = {
        ImageContainer: {
            height: "48vw",
            backgroundImage:` url('${imageHome}' )`,
            backgroundRepeat: "no-repeat",
            backgroundSize: 'cover',
            [theme.breakpoints.down("sm")] :{
              height:"100vh",
              backgroud:"red"
            }
        }
    }
 

    const StyledBox = styled(Toolbar)({
        display: "flex",
        justifyContent:"space-between",
        alignItems :"center"
    })

  return (
    <Box 
    style={styles.ImageContainer} 
    sx={{height:"100vw",  }}>
      <AppBar 
      position="static"  
      style={{ background: 'transparent', boxShadow: 'none'}} 
      sx={{height:90}} >
         <StyledBox 
         sx={{
         }}>
           <Stack 
           sx={{
             width: 40,
             height: 40,
           }}>
            <Box
                 component="img"
                 sx={{
                   height: 300,
                   width: 180,
                   padding :"40px ",
                   display: {xs:"none", sm:"block"}
                 }}
                 alt="logo of molato"
                 src={Logo}
            />
             <Box
                 component="img"
                 sx={{
                   height: 50,
                   width: 50,
                   display: {xs:"block", sm:"none"}
                 }}
                 alt="logo of molato"
                 src={iconLogo}
                 
            />
           </Stack>
           <Box sx={{
                display:"flex",
                paddingTop: "30px",
                paddingRight: "30px",
                justifyContent:"space-between"
           }}>
            {/* <Dehaze/> */}
                <Button 
                variant="contained" 
                sx={{
                    background:"#D2282D", 
                    texTransform: "none", 
                    "&:hover": {
                        background:"#fff", 
                        color:"#D2282D"}}}>Se connecter
                </Button>
                <Button 
                variant="contained" 
                sx={{
                    marginLeft:"30px",
                    width:"140px",
                    background: "#D2282D",
                    texTransform: "none",
                    "&:hover": {
                        background:"#fff", 
                        color:"#D2282D"}}}>S'inscrire
                </Button>
           </Box>
         </StyledBox>
      </AppBar>
      <Stack 
      sx={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        textAlign:"center",
        marginTop:"15%",
        width:"55vw",
        paddingLeft:"20%"}}>

        <Typography 
        variant="h1" 
        component="h2"
        sx={{
          fontSize:"64px",
          fontWeight:"900",
          color:"#D2282D"
        }}>Une autre façon de gérer votre maison de couture
        </Typography>
        
        <Typography
         variant="p" 
         component="h1"
        sx={{
          fontSize:"24px",
          fontWeight:"400",
          color:"#fff",
          textTransform :"uppercase"
        }}>
          Avoir une vue sur toutes les activités et clients 
        </Typography>
      </Stack>
    </Box>
  )
}

export default HomePage
