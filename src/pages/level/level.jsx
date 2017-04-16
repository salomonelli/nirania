import React, {Component} from 'react';
import {get as LevelModelGet} from '../../models/level.model';
import './level.css';

import DividerComponent from '../../components/divider/divider';

class LevelPage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    async componentDidMount() {
      this.levelModel = await LevelModelGet();
      const levelNr = this.props.match.params.level;
      this.levelDoc = await this.levelModel.getByNr(levelNr);
      const canBePlayed = await this.levelDoc.canBePlayed();
      if(canBePlayed) {
        // yes : build level
        this.dividerComponent.open();
      } else{
        // no : redirect, alert ..

      }
    }

    componentWillUnmount() {}

    render() {
        return (
            <div>
                <h1>Nirania {this.props.match.params.level}</h1>
                <DividerComponent ref={instance => this.dividerComponent = instance}/>
                <div className="game"></div>
            </div>
        );
    }
}

export default LevelPage;
