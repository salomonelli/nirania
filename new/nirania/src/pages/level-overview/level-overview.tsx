import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { GridList, GridTile } from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';

import { get as LevelModelGet } from '../../models/level.model';
import { levels } from '../../components/game-frame/level/level';
import './level-overview.css';
const THREE = require('three');

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


class LevelPage extends Component<any, any> {
  public subs: any[] = [];
  levelModel: any;
  constructor(props: any) {
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
    const sub = this.levelModel.find().$.subscribe((playedLevelsFromDb: any) => {
      const playedLevels = playedLevelsFromDb.filter((level: any) => !isNaN(parseInt(level.level, 10)));
      const tilesData = levels.map(level => {
        const levelData = playedLevels.filter((pL: any) => parseInt(pL.level, 10) === level.id);
        let prevLevel;
        if (level.id !== 1) prevLevel = playedLevels.filter((pL: any) => parseInt(pL.level, 10) === (level.id - 1));
        (level as any).active = (level.id === 1) || (prevLevel.length === 1 && prevLevel[0].success) ? 'active' : 'inactive';
        (level as any).diamonds = levelData.length === 1 ? levelData[0].diamonds : 0;
        return level;
      });
      this.setState({ tilesData: tilesData });
    });
    this.subs.push(sub);
  }

  componentWillUnmount() {
    this.subs.forEach(sub => sub.unsubscribe());
  }

  levelColor(color: any) {
    return '#' + new THREE.Color(color).getHexString();
  }

  goToLevel(levelId: any) {
    this.props.history.push('/level/' + levelId);
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="level-overview">
          <div style={styles.root as any}>
            <GridList
              cellHeight={180}
              style={styles.gridList}
            >
              <Subheader>Levels</Subheader>
              {this.state.tilesData.map((tile: any) => (
                <GridTile
                  key={tile.img}
                  title={'Level ' + tile.id}
                  subtitle={<span>by <b>{tile.author}</b></span>}
                  actionIcon={
                    <div key={tile.img} className="level-diamonds">
                      <span key={tile.img}>{tile.diamonds} / {tile.requiredDiamonds}</span>
                      <span key={tile.img} className="diamonds">DIAMONDS</span>
                    </div>}
                  // className="{'tile ' + tile.active}"
                  onClick={tile.active === 'active' && this.goToLevel.bind(this, tile.id) as any}
                >
                  <div key={'tile-background-' + tile.img} className='tile-background'
                    style={{ backgroundColor: this.levelColor(tile.background) }} />
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
