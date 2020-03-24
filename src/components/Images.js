import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import blueRing from './static/blueRing.png';
import controllerCoaster from './static/controllerCoaster.png';
import inceptionTotem from './static/inceptionTotem.png';
import spinner from './static/spinner.JPG'
import pocketWatch from './static/pocketWatch.JPG'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,

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
    },
    {
        img: controllerCoaster,
        title: 'Controller Coaster',
        featured: false,
      },
      {
        img: inceptionTotem,
        title: 'Inception Totem',
        featured: false,
      },
      {
        img: spinner,
        title: 'Ninjas in Pyjamas Spinner',
        featured: false,
      },
      {
        img: pocketWatch,
        title: 'Pocket Watch',
        featured: false,
      }
  ];

  return (
    <div className={classes.root}>
      <GridList cellHeight={200} spacing={1} className={classes.gridList} cols={3}>
        {tileData.map(tile => (
          <GridListTile key={tile.img} cols={tile.featured ? 2 : 1} rows={tile.featured ? 2 : 1}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              titlePosition="top"
              actionPosition="left"
              className={classes.titleBar}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}