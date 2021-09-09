import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Hidden from '@material-ui/core/Hidden';



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    // backgroundColor: theme.palette.background.paper,
    marginTop:90

  },
  imageList: {
    maxWidth: 700,
    // height:200
  },
  imageListPhone: {
    maxWidth: 500,
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
            <img src={item[0].default} alt={index} />
          </GridListTile>:null
        ))}
      </GridList>
</Hidden>
<Hidden mdUp={true}>
      <GridList spacing={25} cellHeight={600}  className={classes.imageListPhone} cols={1}>
        {allImages.map((item,index) => (
         index!== allImages.length-1?<GridListTile key={index*100} cols={item[1] || 1}>
            <img src={item[0].default} alt={index} />
          </GridListTile>:null
        ))}
      </GridList>
  </Hidden>
    </div>
  );
}
