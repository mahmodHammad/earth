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

import ImageGalary from "./ImageGalary"

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
 content:{
    marginBottom:30,
    marginTop:30,
    // fontSize:30,
    fontSize: "1.4rem"
 },
 link:{
     textDecoration:"underline",
     fontSize: "1.4rem",
     fontWeight:"bold",
     display:"block",
     textAlign:"center",
     marginBottom:20,
     marginTop:50,
 },
 underlineLink:{
     textDecoration:"underline"
 },
 textContainer:{
  width:800,

 //  border:"1px solid red",
    marginTop:60,

    marginBottom:200,
   //  padding:"0 225px",
},
 "@media (max-width: 600px)": {
  headerContainer:{
      marginBottom:50,
},
textContainer:{
  width:600
},
content:{
  // fontSize: "1rem"
},root:{
  padding:"60px 10px 0",
},header:{
  width:"280px",
  height:"280px",
},
link:{
  //  fontSize: "1rem",
}
},
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
                <div className={classes.header} ></div>
            </div>

            <Typography className={classes.content} variant="body1">
                The Extracellular Matrix (EM), also known as the ECM or Interstitial Matrix, is an
                extensive molecular network that exists
                within the tissues and organs of every living
                creature. Proteins, Glycosaminoglycan, and
                Glycoconjugate components dynamically
                interact with a special mixture of proteins
                (ground molecules) that surround every
                single cell in our bodies.
            </Typography>

            <Typography  className={classes.content} variant="body1">
                The ECM can be thought of as a flexible
                cage that forms the shape of our bodies, &
                is constantly interacting with our cells in a
                dynamic way. Rather than a physical barrier,
                it instructs cells to form and function in
                specific ways.
            </Typography>

            <Typography  className={classes.content}>
                If we learn how to harness these specific
                proteins, possibilities of tissue regeneration
                and even specific customization of organic
                structures will be within reach.
            </Typography >
            <Link href="https://www.youtube.com/watch?v=LajvidhBK2Y&list=LL&index=4" target="_blank" className={classes.link}>Visualization of the ECM </Link>
            <Link href="https://www.youtube.com/watch?v=cMNx17H3dRU&list=LL&index=3" target="_blank" className={classes.link}>How cells interact with the ECM</Link>
            <ImageGalary/>

        <div style={{display:"flex",justifyContent:"center"}}> 
          <div className = {classes.textContainer} >
            <Typography  className={classes.content}>
               <b>Production & tee design </b> by  <Link href="https://www.instagram.com/terraform___/?hl=en" target="_blank" className={classes.underlineHover}>Terraform</Link>

            </Typography >

            <Typography  className={classes.content}>
                <b>Photography & edits</b> by  <Link href="https://www.instagram.com/gabeoviawe/?hl=en" target="_blank" className={classes.underlineHover}> Gabe Oviawe</Link>

            </Typography >

            <Typography  className={classes.content}>
                <b>Modeled</b> by            <Link href="https://www.instagram.com/jarcor__/?hl=en" target="_blank" className={classes.underlineHover}> Jem Mendoza </Link>
                
            </Typography >

            <Typography  className={classes.content}>
                <b>Casting, styling, direction, graphics & web design</b> by  <Link href="https://www.instagram.com/hugomaxwelll/" target="_blank" className={classes.underlineHover}>Hugo Garibaldi</Link>

            </Typography >
            <Typography  className={classes.content}>
                <b>Web development</b> by  <Link href="https://www.instagram.com/mahmoud.hammmad/" target="_blank" className={classes.underlineHover}>Mahmoud Hammad </Link>
            </Typography >
          </div>
        </div>
        </Container>
    </div>
  );
}