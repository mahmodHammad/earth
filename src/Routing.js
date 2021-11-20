import React, { useState, useEffect } from "react";
import Navbar from "./Navbar/Navbar";
import Cat from "./three/Cat"
import Shop from "./pages/shop/Shop"
import Projects from "./pages/projects/Projects"
import Project from "./pages/project/Project"
import Providence from "./pages/project/Providence"

import Checkout from "./pages/checkout/Checkout"
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Drawer from "./Navbar/components/Drawer"
import Button from '@material-ui/core/Button';
import "./App.css";
import Sucess from "./pages/feedback/Sucess"
import Dash from "./pages/Dash/Dash"
import p1 from "./assets/p1.jpeg"
import p2 from "./assets/p2.jpeg"
import l1 from "./assets/l1.jpeg"
import l2 from "./assets/l2.jpeg"
import Avatar from "./assets/avatar.jpeg"


const products = [
  {
    id:"prod1",
    title:"EM tee",
    size:"L",
    price:4000,
    avatar:Avatar,
    description:"  THE EM TEE, A REDISCOVERY OF THE FLEXIBLE CAGE THAT GIVES OUR BODIES SHAPE.",
    images:[
      {
        img: p1,
        alt: 'Image',
        cols: 2,
      },
      {
          img: p2,
          alt: 'Image',
          cols: 2,
        },
        {
          img: l1,
          alt: 'Image',
          cols: 1,
        },
      {
          img: l2,
          alt: 'Image',
          cols: 1,
        },
      
    ]
  },
  // {
  //   id:"Mahmoud",
  //   title:"Mahmoud",
  //   size:"L",
  //   price:1899,
  //   avatar:Avatar,
  //   description:"  I need to sleep :( ",
  //   images:[
  //     {
  //       img: l1,
  //       alt: 'Image',
  //       cols: 2,
  //     },
  //     {
  //         img: p2,
  //         alt: 'Image',
  //         cols: 1,
  //       },
  //     {
  //         img: l2,
  //         alt: 'Image',
  //         cols: 2,
  //       },
  //       {
  //         img: p1,
  //         alt: 'Image',
  //         cols: 1,
  //       },
  //   ]
  // }
  ]
const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: 90,
  },
  button:{
    margin:20,
    float:"right"
  }
}));

export default function Projec({ Cart,theme }) {
  const classes = useStyles();
  const [cartData, SetcartData] = useState([
  ]); 

  const addToCart = (item,openDrawer)=>{
    const newItem = {...item}

    newItem.quan=1
    const uniqueID = Math.ceil(Math.random()*100000000)
    newItem.id = uniqueID
    SetcartData([...cartData,newItem])

   
  }

  return (
        <div style={{ minHeight:"100%"}}>
       
            <BrowserRouter>
            <Navbar
              isHomePage={true}
              isDarkMode={true}
        />
              <Switch>
                <Route exact path="/" render={props => <Cat/>} />
                <Route exact path="/dash" render={props => <Dash/>} />
                <Route exact path="/success" render={props => <Sucess/>} />
                <Route exact path="/shop" render={props => <Shop cartData={cartData} addToCart={addToCart} toggleDrawer={()=>{}} products={products}/>}/>
                <Route exact path="/projects" render={props => <Projects/> }/>
                <Route exact path="/project" render={props => <Project/> }/>
                <Route exact path="/providence" render={props => <Providence/> }/>
                <Route exact path="/checkout" render={props => <Checkout cartData={cartData}/>} />
              </Switch>
              {/* <Footer /> */}
            </BrowserRouter>
          </div>
  );
}

