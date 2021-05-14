import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
import IconButton from "@material-ui/core/IconButton";
import Dropdwon from "./components/Dropdown";
import logo from "../Lgog.jpeg"

const useStyles = makeStyles(theme => ({
  logoContainer: {
    flexGrow: 1,
    justifyContent: "left"
  },
  logo: { height: 60, margin: 3 },
  nav: { background: "#333"},
  study: {
    padding: "2px 10px",
    margin: 2,
    marginLeft: 5
  },
  themeicon: { marginLeft: 4 },
  "@media (max-width: 600px)": {
    logo:{height:45}
  },

}));

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function Navbar({ props }) {
  const classes = useStyles();
  return (
    <div>
      <HideOnScroll {...props}>
        <AppBar color="transparent" className={classes.nav}>
          <Toolbar>
            <div className={classes.logoContainer}>
              <IconButton onClick={()=>window.scrollTo(0, 0)} color="inherit" component={Link} to="/" size="large">
                
                  <img
                  className={classes.logo}
                  src={logo}
                  alt="Mahmoud Hammad"
                />
                
              </IconButton>
            </div>

            <Hidden smDown={true}>
              <Button
                size="large"
                className={classes.study}
                variant="outlined"
                color="secondary"
                component={Link}
                to={{
                  pathname: "/",
                  state: {
                    scrollTo: "shop"
                  }
                }}
              >
              Shop
              </Button>
            </Hidden>
            <Hidden mdUp={true}>
              <Dropdwon />
            </Hidden>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </div>
  );
}