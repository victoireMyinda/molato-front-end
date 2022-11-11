import { Box , Toolbar,styled, AppBar,Stack, } from '@mui/material';
import React from 'react';
import bachgroudImage from "../../assets/istockphoto-525061117-612x612 1.png";
import Logo from '../../assets/Logo.svg';
import iconLogo from '../../assets/Icon_molato.png'


const Login = () => {
  const styles = {
    ImageContainer: {
        height: "48vw",
        backgroundImage:` url('${bachgroudImage}' )`,
        backgroundRepeat: "no-repeat",
        backgroundSize: 'cover',
     
    }
}

const StyledBox = styled(Toolbar)({
  display: "flex",
  margin:"7%"
  })

  return (
    <Stack style={styles.ImageContainer} elevation={3} >
      <AppBar
       position="static"  
      style={{ background: 'transparent', boxShadow: 'none'}} 
      sx={{height:90}}>
            <StyledBox>

              <Box 
                component="img"
                sx={{
                  height: 300,
                  width: 180,
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
      </StyledBox>
      </AppBar>

    </Stack>
  )
}

export default Login
