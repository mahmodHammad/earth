import React,{useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CartItem from "../../pages/cart/components/Cart"

const useStyles = makeStyles({
    root:{
    },

});

export default function TemporaryDrawer({increaseQuantitly,draweOpen,toggleDrawer,cartData}) {
 
    useEffect(() => {
        
        // const info = AllProjects.find(e => e.id === projId);
      },[cartData]);
    
    const classes = useStyles();
  console.log("CART DATA AT DRAWER",cartData)
  return (
    <Drawer className={classes.root} anchor="right" open={draweOpen} onClose={()=>toggleDrawer( false)}>
        <CartItem increaseQuantitly={increaseQuantitly} cartData={cartData} toggleDrawer={toggleDrawer}/>
    </Drawer>
  );
}