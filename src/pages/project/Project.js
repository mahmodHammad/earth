import React, { useState, useEffect } from "react";

import Button from "@material-ui/core/Button";

import Container from "@material-ui/core/Container";
// import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from '@material-ui/core/IconButton';
import { Link } from "react-router-dom";

// import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Navbar from "../../Navbar/Navbar"

import header from "../../Images/EMblob.png"

import ImageGalary from "./ImageGalary"

const useStyles = makeStyles(theme => ({
  root: {
    // padding: 10,
    background:"#080808",
    paddingTop: 120,
    minHeight:"100vh",
    // textAlign: "center"
  },
 header:{
    backgroundImage:`url(${header})`,
    width:"400",
    height:"400px",
    border:"1px solid red",
    backgroundSize: "cover"
 }
}));

export default function Projec({ }) {
  const classes = useStyles();
  useEffect(() => {
    // const info = AllProjects.find(e => e.id === projId);
  });

  return (
    <div className={classes.root}>
        <Container maxWidth="xs" className = {classes.body}>
            <div className={classes.header} ></div>
            <ImageGalary/>
        </Container>
    </div>
  );
}