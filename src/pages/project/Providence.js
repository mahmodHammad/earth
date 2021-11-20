import React, { useState, useEffect } from "react";

import Button from "@material-ui/core/Button";

import Container from "@material-ui/core/Container";
// import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Link from '@material-ui/core/Link';

// import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Navbar from "../../Navbar/Navbar"

import header from "../../Images/EMblob.png"

import ImageGalary from "./ProvGalary"

const useStyles = makeStyles(theme => ({
  root: {
    // padding: 10,
    display:"flex",
    justifyContent:"center",
    background:"#080808",
    padding:"80px 00px 0",
    minHeight:"100vh",
    // textAlign: "center"
  },
  headerContainer:{
    display:"flex",
    justifyContent:"center",
    marginBottom:80,
    marginLeft:-8
  },
 header:{
    backgroundImage:`url(${header})`,
    width:"400px",
    height:"400px",
    backgroundSize: "cover"
 },

 link:{
     textDecoration:"underline",
     fontSize: "1.4rem",

     fontWeight:"bold",
     display:"inline",
     textAlign:"center",
     marginBottom:20,
     marginTop:50,
 },
 underlineLink:{
     textDecoration:"underline"
 },
 textContainer:{
  //  maxWidth:800,
     marginTop:60,
     marginBottom:200,
     padding:"0 225px",
 },
 center:{
   justifyContent:"center",
   textAlign:"center"
 },
 content:{
  fontSize: "1.4rem"

},
 "@media (max-width: 600px)": {
 textContainer:{
  padding:0 },
  headerContainer:{
      marginBottom:50,
},
root:{
  padding:"60px 10px 0",
},header:{
  width:"280px",
  height:"280px",
},
content:{
  fontSize: "1rem"
},
link:{
   fontSize: "1rem",
   display:"inline"
}
}
}));

export default function Projec({ }) {
  const classes = useStyles();
  useEffect(() => {
      window.scrollTo(0,0)
    // const info = AllProjects.find(e => e.id === projId);
  });

  return (
    <div className={classes.root}>
        <Container maxWidth="lg" className = {classes.body}>
            <div className={classes.headerContainer}>
                {/* <div className={classes.header} ></div> */}
            </div>

            <Typography className={`${classes.content}  ${classes.center}`}  variant="body1">
              Providence Capsule By  <Link href="https://www.instagram.com/_petrich0r.us/" target="_blank" className={classes.link}>Petrichor</Link>-
            </Typography>

            <Typography className={`${classes.content}  ${classes.center}`} variant="body1">
                Protective care, spiritual power, & perpetration for timely eventualities
            </Typography>

                 <ImageGalary/>

        <div className = {classes.textContainer} >
            <Typography  className={classes.content}>
                <b>Production  </b> by  <Link href="https://www.instagram.com/terraform___/?hl=en" target="_blank" className={classes.underlineHover}>Terraform</Link>
            </Typography >
            <Typography  className={classes.content}>
                <b> Garments </b> by  <Link href="https://www.instagram.com/_petrich0r.us/" target="_blank" className={classes.underlineHover}>Petrichor</Link>
            </Typography >

            <Typography  className={classes.content}>
                <b> Direction, casting, & web design </b> by  <Link href="https://www.instagram.com/hugomaxwelll/" target="_blank" className={classes.underlineHover}>Hugo Garibaldi </Link>
            </Typography >
            <Typography  className={classes.content}>
                <b> Styled</b> by  <Link href="https://www.instagram.com/m.a.r.i.s.s.a_______/" target="_blank" className={classes.underlineHover}>Marissa Macias</Link> & <Link href="https://www.instagram.com/hugomaxwelll/" target="_blank" className={classes.underlineHover}>Hugo Garibaldi </Link>
            </Typography >
            <Typography  className={classes.content}>
                <b>Hair & makeup</b> by  <Link href="https://www.instagram.com/bratmobile1999/" target="_blank" className={classes.underlineHover}>Gianna Guerino </Link>
            </Typography >
            <Typography  className={classes.content}>
                <b>Edits</b> by <Link href="https://www.instagram.com/gabeoviawe/" target="_blank" className={classes.underlineHover}> Gabe Oviawe</Link> &  <Link href="https://www.instagram.com/hugomaxwelll/" target="_blank" className={classes.underlineHover}>Hugo Garibaldi </Link>
            </Typography >
            <Typography  className={classes.content}>
                <b>Modeled</b> by <Link href="https://www.instagram.com/amandathekidd/" target="_blank" className={classes.underlineHover}> Amanda Fong</Link>
            </Typography >
            <Typography  className={classes.content}>
                <b>Web development</b> by  <Link href="https://www.instagram.com/mahmoud.hammmad/" target="_blank" className={classes.underlineHover}>Mahmoud Hammad </Link>
            </Typography >
        </div>
        </Container>
    </div>
  );
}

/* 
 - 
- 
 - 
- 
 - 
- 
- 





*/