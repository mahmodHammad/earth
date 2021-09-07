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
    paddingTop: 120,
    minHeight:"100vh",
    // textAlign: "center"
  },
  headerContainer:{
    display:"flex",
    justifyContent:"center",
    marginBottom:90
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
    fontSize: "1.3rem"
 },
 link:{
     textDecoration:"underline",
     fontSize: "1.3rem",
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
     marginTop:60,
     marginBottom:200
 }
}));

export default function Projec({ }) {
  const classes = useStyles();
  useEffect(() => {
    // const info = AllProjects.find(e => e.id === projId);
  });

  return (
    <div className={classes.root}>
        <Container maxWidth="lg" className = {classes.body}>
            <div className={classes.headerContainer}>
                <div className={classes.header} ></div>
            </div>

            <Typography className={classes.content} variant="body1">
                The Extracellular Matrix (EM), or ECM is an
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