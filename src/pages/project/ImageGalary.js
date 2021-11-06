import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Hidden from '@material-ui/core/Hidden';
import { SimpleImg } from 'react-simple-img';



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
    width:"100%"
  },
  imageListPhone: {
    // maxWidth: 500,
    width:"100%"
    // height:200
  },
  col:{
    height :"500px",
    // display:"none"
  }
}));
const allImages = [
    [require("../../Images/Product Pic.png")],
    [require("../../Images/Photo 1.png")],
    [require("../../Images/Photo 2.png")],
    [require("../../Images/Photo 3.png")],
    [require("../../Images/Photo 4.png")],
    [require("../../Images/Photo 5.png")],
    [require("../../Images/Photo 6.png")],
    [require("../../Images/Photo 7.png")],
    [require("../../Images/Photo 8.png")],
    [require("../../Images/Photo 9.png")],
    [require("../../Images/Photo 10.png")],
    [require("../../Images/Photo 11.png")],
    [require("../../Images/Photo 12.png")],
    [require("../../Images/Photo 13.png"),2],
]
export default function BasicImageList() {
  const classes = useStyles();
  return (
    <div className={classes.root}>

<Hidden smDown={true}>
<GridList spacing={25}  className={classes.imageList} cols={2}>
        {allImages.map((item,index) => (
         index!== allImages.length-2? <GridListTile className={classes.col} key={index*100} cols={item[1] || 1}>
           <SimpleImg height={item[1]?518: "100%"} width="100%" src={item[0].default} />
          </GridListTile>:null
        ))}
      </GridList>
</Hidden>
<Hidden mdUp={true}>
      <div className={classes.imageListPhone} >
        {allImages.map((item,index) => (
         index!== allImages.length-2?<div className={classes.imgcontainer} key={index*100} >
           <SimpleImg className={classes.img}  height="100%" width="100%" alt={index} src={item[0].default} />
          </div>:null
        ))}
      </div>
  </Hidden>
    </div>
  );
}
