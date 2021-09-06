import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import IconButton from "@material-ui/core/IconButton";

import InstagramIcon from '@material-ui/icons/Instagram';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

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

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className="footer">   
          <IconButton disableRipple={false} color="secondary" component={Link} href="https://www.instagram.com/terraform___/" size="large">
                    <InstagramIcon color="primary" fontSize="large" />
              </IconButton>
              <IconButton disableRipple={false} color="secondary" component={Link} href="mailto:hugogaribaldi@gmail.com" size="large">
                    <MailOutlineIcon color="primary" fontSize="large" />
              </IconButton>

     </div>
  );
}


