import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import blueRing from './static/blueRing.png';
import controllerCoaster from './static/controllerCoaster.png';
import inceptionTotem from './static/inceptionTotem.png';
import spinner from './static/spinner.jpg'
import pocketWatch from './static/pocketWatch.jpg'
import tanjiro from './static/tanjiro.jpg'


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    overflow: 'hidden',
    backgroundColor: '#E5E4E2'
  },
  gridList: {
    width: 1110,
    height: 1300,

    transform: 'translateZ(0)',
  },
  titleBar: {
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  icon: {
    color: 'white',
  },
}));


export default function AdvancedGridList() {

  const classes = useStyles();
  const tileData = [
    {
      img: blueRing,
      title: 'Layered Veneer Ring',
      featured: false,
      message:"I made a ring by boiling veneer, then curling and gluing it around a pen. After building up layers to add the darker shades of veneer and the blue veneer I sealed it with clear varnish"
    },
    {
      img: controllerCoaster,
      title: 'Controller Coaster',
      featured: false,
      message:"I made a two-tone games controller tea coaster"
      },
    {
      img: inceptionTotem,
      title: 'Inception Totem',
      featured: false,
      message:"I like Inception and the totems used in the film so I carved my own totem using wood from my apple tree"
    },
    {
      img: spinner,
      title: 'Ninjas in Pyjamas Spinner',
      featured: false,
      message:"I like video games and esports, one of the teams I like is Ninjas in Pyjamas"
    },
    {
      img: pocketWatch,
      title: 'Pocket Watch',
      featured: false,
      message:"I made a pocket watch"
    },
    {
      img: tanjiro,
      title: 'Tanjiro Drawing',
      featured: false,
      message:"I rarely draw but decided to draw Tanjiro from Demon Slayer after watching the series"
    }
  ];
function clickHandler(message){
  alert(message);
}
  return (
    <div className={classes.root}>
    <Typography variant="h4">
      Gallery
      <GridList cellHeight={400} spacing={3} className={classes.gridList} cols={2}>
        {tileData.map(tile => (
          <GridListTile key={tile.img} cols={tile.featured ? 2 : 1} rows={tile.featured ? 2 : 1}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              titlePosition="top"
              actionPosition="left"
              className={classes.titleBar}
              actionIcon={
                <IconButton className={classes.icon} onClick={()=>clickHandler(tile.message)}>
                  <InfoIcon/>
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
      </Typography>
    </div>
  );
}