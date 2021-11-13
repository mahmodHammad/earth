import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Hidden from '@material-ui/core/Hidden';
import { SimpleImg } from './lazy';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    // backgroundColor: theme.palette.background.paper,
    marginTop:90

  },
  imgcontainer:{
    width:"100%",
    marginBottom:25,
  },
  imageList: {
    maxWidth: 800,
    // height:200
  },img:{
    width:"100%",
    height:"100%"
  },
  imageListPhone: {
    // maxWidth: 500,
    width:"100%"
    // height:200
  },
  col:{
    height :"600px",
    // display:"none"
  }
}));
                
                   
                    
                     
                    
                       
const allImages = [
    [require("../../prov/-328-Edit-2-2.jpg")],
    [require("../../prov/-332-Edit.jpg")],
    [require("../../prov/02.jpg")],
    [require("../../prov/-328-Edit-2.jpg")],
    [require("../../prov/-335-Edit.jpg")],
    [require("../../prov/-330-Edit-2.jpg")],
    [require("../../prov/-330-Edit-2.jpg")],
    [require("../../prov/-330-Edit.jpg")],
    [require("../../prov/-331-Edit-2.jpg")],
    [require("../../prov/-331-Edit.jpg")],
    [require("../../prov/-339-Edit.jpg")],
    [require("../../prov/-340-Edit.jpg")],
    [require("../../prov/-341-Edit.jpg")],
    [require("../../prov/IMG_2950.jpeg")],
    [require("../../prov/03.jpg")],
    [require("../../prov/04.jpg")],
    [require("../../prov/01-edit2.jpg")],
    [require("../../prov/PowerStanceBlue.jpg")],
    [require("../../prov/ProvidenceStance04.png")],
]
export default function BasicImageList() {
  const classes = useStyles();
  return (
    <div className={classes.root}>

<Hidden smDown={true}>
<GridList spacing={25}  className={classes.imageList} cols={2}>
        {allImages.map((item,index) => (
         index!== allImages.length-2? <GridListTile className={classes.col} key={index*100} cols={item[1] || 1}>
           <SimpleImg height={600} src={item[0].default} />

          </GridListTile>:null
        ))}
      </GridList>
</Hidden>
<Hidden mdUp={true}>
      <div className={classes.imageListPhone} >
        {allImages.map((item,index) => (
         index!== allImages.length-2?<div className={classes.imgcontainer} key={index*100} >
           <SimpleImg animationDuration={1} style={{background:"#000"}} height="100%" width="100%" className={classes.img} src={item[0].default} />

          </div>:null
        ))}
      </div>
  </Hidden>
    </div>
  );
}
