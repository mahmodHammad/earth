import React,{useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import CartItem from "../../pages/cart/components/Cart"
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles({
    root:{
      paddingTop:600
      // background:"#883355"
    },btn:{
      width:180,
      background:"#000",
      borderRadius:0,
      display:"block",
      textAlign:"right",
      fontSize:18,
      paddingRight:30
    },btnIcon:{

      background:"#000",
      borderRadius:0,
      display:"block",
      textAlign:"right",
      paddingRight:30,
      marginTop:20
    }

});

export default function TemporaryDrawer({removeItem,setsize,increaseQuantitly,draweOpen,toggleDrawer,cartData}) {
 
    useEffect(() => {
        
        // const info = AllProjects.find(e => e.id === projId);
      },[cartData]);
    
    const classes = useStyles();
  return (
    <Drawer className={classes.root} anchor="right" open={draweOpen} onClose={()=>toggleDrawer( false)}>
      
              <IconButton    className={classes.btnIcon} disableRipple={true} color="primary" onClick={()=>toggleDrawer(false)} size="large">
                <MenuIcon  color="primary" fontSize="small" />                
              </IconButton>
            <Button
              size="small"
              color="primary"
              className={classes.btn}
              onClick={()=> toggleDrawer(false)}
              fullWidth
              component={Link}
              to={{
                pathname: "/project",
              }}
            >
              em tee
            </Button>

            <Button
                size="small"
                color="inherit"
                className={classes.btn}
                onClick={()=> toggleDrawer(false)}
                fullWidth
                component={Link}
                to={{
                  pathname: "/Providence",
                }}
              >
              Providence
              </Button>


        {/* <CartItem removeItem={removeItem} setsize={setsize} increaseQuantitly={increaseQuantitly} cartData={cartData} toggleDrawer={toggleDrawer}/> */}
    </Drawer>
  );
}
