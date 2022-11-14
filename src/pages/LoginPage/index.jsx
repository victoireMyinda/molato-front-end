import React from 'react'
import { AppBar, Paper,Box ,TextField, Stack, Typography, Button, Link} from '@mui/material'
import BgLogin from '../../assets/workspace-concept-with-sewing-machine-min.jpg'
import LogoHome from '../../assets/Logo-min.svg'
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';


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
       direction="column"
       justifyContent="center"
       alignItems="center"
       sx={{
        height:"85%",
        }}
       >

        <Stack 
            sx={{
                backgroundColor:"#fff",
                height:"70%",
                borderRadius:"20px",
                
                }}
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={{ xs: 1, md: 2,lg:2, sm:2}}
            maxWidth={{
                xs:"100%",
                sm:"60%",
                md:"50%",
                lg:"30%"
            }}
            >
                <Typography 
                variant="h6" 
                align="center"
                sx={{
                    width:"70%",
                    color:"#D2282D",
                    fontWeight:"600",
                    lineHeight:"25px",
                    mb:"20px",
                }}
                    >Apprendre à mieux gérer commence aujourd’hui</Typography>
                <form style={styles.positionForm} >
                    <TextField
                        required
                        id="name"
                        placeholder='Maria Lozo'
                        sx={{backgroundColor:"#E4E4EC",
                        mb:"20px",
                        width:{ sm: 300, md: 300, xs:300, lg:300 },
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
                        width: { sm: 300, md: 300, xs:300, lg:300 },
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
                        width:{ sm: 300, md: 300, xs:300, lg:300 },
                        "& .MuiInputBase-root": {
                            height: 40
                        }}}
                        >
                    </TextField>
                    <Button 
                    alignItems="center"
                    variant="contained" 
                    type="submit"
                    sx={{
                    backgroundColor: "#D2282D",
                    color : "#fff",
                    borderRadius:"10px",
                    '&:hover':{
                    backgroundColor:"#fff",
                    color:"#D2282D"
                    }}}
                    >
                        Envoyer
                    </Button>
                </form>
        </Stack>
  </Stack>
</Paper>
)
}

