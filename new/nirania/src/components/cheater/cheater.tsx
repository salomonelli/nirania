import React, {Component} from 'react';
import ViewListIcon from 'material-ui-icons/ViewList';
import './cheater.css';

class CheaterComponent extends Component<any, any> {

    async componentDidMount() {}

    componentWillUnmount() {}

    render() {
        return (
            <div className="cheater">
                <h1>You are trying to cheat! :(</h1>
                <p>Play previous levels and collect diamonds to get here.</p>
                <div className='level-list' onClick={this.props.onAllLevels}>
                  <ViewListIcon></ViewListIcon>
                  <div>Overview</div>
                </div>
            </div>
        );
    }
}

export default CheaterComponent;
/*
<table>
  <tr>
    <td>Diamonds</td>
    <td>{this.props.diamonds}</td>
  </tr>
</table>
 */
