import React, { useEffect, useRef } from "react";
import { sceneSetup, scene ,controls} from "./setup";
import { startAnimationLoop ,requestID} from "./Animate";
import { makeStyles } from '@material-ui/core/styles';
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer"

const useStyles = makeStyles((theme) => ({
  btnContainer:{
  },
  body:{
    overflow:"hidden",
    height:"100vh",
    width:"100vw"
  }
}))
        

export default function Cat( ) {
  const classes = useStyles();
  const textInput = useRef(null);

  useEffect(() => {
      if(scene){
        console.log("HEU SCENE",scene)
        scene.clear()
      }
      const canvasTarget = textInput.current;
      sceneSetup(canvasTarget);
      startAnimationLoop();
    
    return () => {
      // Anything in here is fired on component unmount.
      // window.cancelAnimationFrame(requestID);
          // controls.dispose();
  }
  }, []);

  return (
    <div className={classes.body}>
  

         
      <div ref={textInput} className="canvas"></div>
      <Footer/>


  
    </div>
  );
}

//clean up to prevent memory leak
//   componentWillUnmount() {
//     window.cancelAnimationFrame(requestID);
//     controls.dispose();
//   }
