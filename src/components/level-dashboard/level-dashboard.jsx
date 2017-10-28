import React, {Component} from 'react';
import './level-dashboard.css';

class LevelDashboardComponent extends Component {

    async componentDidMount() {}

    componentWillUnmount() {}

    render() {
        return (
            <div className={'level-dashboard ' + this.props.pause}>
                <div className="diamond-wrapper">
                  <div id="diamond"></div>
                  <div className="diamond-quantity">{this.props.diamonds}</div>
                </div>
            </div>
        );
    }
}

export default LevelDashboardComponent;
/*
<table>
  <tr>
    <td>Diamonds</td>
    <td>{this.props.diamonds}</td>
  </tr>
</table>
 */
