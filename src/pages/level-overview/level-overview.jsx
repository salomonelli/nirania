import React, {Component} from 'react';
const THREE = require('three');
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {GridList, GridTile} from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';

import {get as LevelModelGet} from '../../models/level.model';
import {levels} from '../../components/game-frame/level/level';
import './level-overview.css';

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
    },
    gridList: {
        width: '100%',
    }
};


class LevelPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentLevel: 1,
            tilesData: [],
            playedLevels: [],
            levels: levels
        };
    }

    async componentDidMount() {
        this.levelModel = await LevelModelGet();
        // const levelNr = this.props.match.params.level;
        this.levelsDoc = await this.levelModel.find().exec();
        const playedLevels = this.levelsDoc.filter(level => !isNaN(parseInt(level.level)));
        console.dir(levels);
        const tilesData = levels.map(level => {
            level.active = playedLevels[level.id-1] && playedLevels[level.id-1].canBePlayed() ? 'active' : 'inactive';
            level.diamonds = playedLevels[level.id-1] && playedLevels[level.id-1].diamonds ?
               playedLevels[level.id].diamonds : 0;
            return level;
        });
        this.setState({tilesData: tilesData});
    }

    componentWillUnmount() {}

    levelColor(color) {
        return '#' +new THREE.Color(color).getHexString();
    }

    goToLevel(levelId) {
        this.props.history.push('/level/'+ levelId);
    }

    render() {
        return (
          <MuiThemeProvider>
            <div className="level-overview">
              <div style={styles.root}>
                 <GridList
                   cellHeight={180}
                   style={styles.gridList}
                 >
                   <Subheader>Levels</Subheader>
                   {this.state.tilesData.map((tile) => (
                     <GridTile
                       key={tile.img}
                       title={'Level ' + tile.id}
                       subtitle={<span>by <b>{tile.author}</b></span>}
                       actionIcon={
                         <div key={tile.img} className="level-diamonds">
                           <span key={tile.img}>{tile.diamonds} / {tile.requiredDiamonds}</span>
                            <span key={tile.img} className="diamonds">DIAMONDS</span>
                         </div>}
                       className={'tile ' + tile.active}
                       onClick={ tile.active === 'active' &&  this.goToLevel.bind(this, tile.id)}
                     >
                       <div key={'tile-background-'+tile.img} className='tile-background'
                         style={{backgroundColor: this.levelColor(tile.background)}}/>
                     </GridTile>
                   ))}
                 </GridList>
               </div>
            </div>
          </MuiThemeProvider>
        );
    }
}

export default LevelPage;
/*
<div>
  {this.state.playedLevels.map(level => <p>{level.level}</p>)}
</div>*/
/*<div>
  {this.state.levels.map(level => <LevelOverviewTile/>)}
</div>*/
