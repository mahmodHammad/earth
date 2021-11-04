import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Badge from "@material-ui/core/Badge";

import IconButton from "@material-ui/core/IconButton";
import Dropdwon from "./components/Dropdown";
import logo from "../assets/logo.png"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

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


export default function Navbar({ toggleDrawer ,isHomePage,cartData}) {
  const classes = useStyles();
  const itemsNumberOnCart= isHomePage?0:cartData.length
  return (
    <div>
        <AppBar color="transparent" className={classes.nav}>
          <Toolbar>
            <div className={classes.logoContainer}>
              <IconButton disableRipple={false} color="secondary"  onClick={()=>{
                  window.scrollTo(0,0)
                }} component={Link} to="/" size="large">
                  <img
                  className={classes.logo}
                  src={logo}
                  alt="Terraform"
                />
                
              </IconButton>
            </div>
              <Dropdwon toggleDrawer={toggleDrawer}  />
          </Toolbar>
        </AppBar>
    </div>
  );
}


