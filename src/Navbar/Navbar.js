import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Badge from "@material-ui/core/Badge";
import Drawer from "./components/Drawer"

import IconButton from "@material-ui/core/IconButton";
import Dropdwon from "./components/Dropdown";
import logo from "../assets/logo.png"
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles(theme => ({
  logoContainer: {
    flexGrow: 1,
    justifyContent: "left"
  },
  logo: { height: 60, marginLeft: -10 },
  nav: { background: "#000"},
  study: {
    padding: "2px 10px",
    margin: 2,
  },
  themeicon: { marginLeft: 4 },
  "@media (max-width: 600px)": {
    logo:{height:45},
    // nav:{marginBottom:100}
  },badge:{
    marginRight:10,
    marginBottom: -1
  },
  badgeContainer:{
    padding: 20,
    paddingRight: 0
  }

}));


export default function Navbar({  isHomePage,cartData}) {
const [draweOpen, SetdraweOpen] = useState(false);

  const classes = useStyles();

  return (
    <div>
            <Drawer   toggleDrawer={(open)=>SetdraweOpen(open)} draweOpen={draweOpen}  />

        <AppBar color="transparent" className={classes.nav}>
          <Toolbar>
            <div className={classes.logoContainer}>
              <IconButton disableRipple={false} color="secondary" component={Link} to="/" size="large">
                  <img
                  className={classes.logo}
                  src={logo}
                  alt="Terraform"
                />
                
              </IconButton>
            </div>


              <div className={classes.badgeContainer} onClick={()=>SetdraweOpen(true)}>
                 <MenuIcon   color="primary" fontSize="small" />
             </div> 

          </Toolbar>
        </AppBar>
    </div>
  );
}


