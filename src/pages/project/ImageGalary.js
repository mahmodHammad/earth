import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    borderRadius:10

  },
  imageList: {
    borderRadius:10,
    // width: 500,
    // height:200
  },
}));

const allImages = [
    [require("../../Images/Product Pic.png")],
    [require("../../Images/Photo 1.png")],
    [require("../../Images/Photo 2.png")],
    [require("../../Images/Photo 3.png")],
    [require("../../Images/Photo 4.png")],
    [require("../../Images/Photo 5.png")],
    // [require("../../Images/Photo 6.png")],
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
      <GridList cellHeight={300}  className={classes.imageList} cols={2}>
        {allImages.map((item,index) => (
          <GridListTile key={index*100} cols={item[1] || 1}>
            <img src={item[0].default} alt={index} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}