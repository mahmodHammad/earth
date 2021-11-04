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
  "@media (max-width: 600px)": {
    headerContainer:{
        marginBottom:50,
  },
  content:{
    fontSize: "1rem"
  },root:{
    padding:"60px 10px 0",
  },header:{
    width:"280px",
    height:"280px",
  },
  link:{
     fontSize: "1rem",
     display:"inline"
  }
  },
 header:{
    backgroundImage:`url(${header})`,
    width:"400px",
    height:"400px",
    backgroundSize: "cover"
 },
 content:{
    textAlign:"center",
    marginBottom:30,
    marginTop:30,
    // fontSize:30,
    fontSize: "0.8rem"
 },
 link:{
     textDecoration:"underline",
     fontSize: "0.9rem",
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
     marginTop:60,
     marginBottom:200
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

            <Typography className={classes.content} variant="body1">
              Providence Capsule By  <Link href="https://www.youtube.com/watch?v=LajvidhBK2Y&list=LL&index=4" target="_blank" className={classes.link}>Petrichor</Link> -
            </Typography>

            <Typography  className={classes.content} variant="body1">
                Protective care, spiritual power, & perpetration for timely eventualities
            </Typography>

                 <ImageGalary/>

    <div className = {classes.textContainer} >

        <Typography  className={classes.content}>
            <b>Production & tee design </b> by  <Link href="https://www.instagram.com/terraform___/?hl=en" target="_blank" className={classes.underlineHover}>Terraform</Link>

        </Typography >

        <Typography  className={classes.content}>
            <b>Photography</b> by  <Link href="https://www.instagram.com/gabeoviawe/?hl=en" target="_blank" className={classes.underlineHover}> Gabe Oviawe</Link>

        </Typography >

        <Typography  className={classes.content}>
            <b>Modeled</b> by            <Link href="https://www.instagram.com/jarcor__/?hl=en" target="_blank" className={classes.underlineHover}> Jem Mendoza </Link>
            
        </Typography >

        <Typography  className={classes.content}>
            <b>Casting, styling, & direction</b> by  <Link href="https://www.instagram.com/hugomaxwelll/" target="_blank" className={classes.underlineHover}>Hugo Garibaldi</Link>

        </Typography >
    </div>

        </Container>
    </div>
  );
}