import React, {Component} from 'react';
import './level-dashboard.css';

class LevelDashboardComponent extends Component {
    constructor(props) {
        super(props);
    }

    async componentDidMount() {}

    componentWillUnmount() {}

    render() {
        return (
            <div className="level-dashboard">
                <table>
                  <tr>
                    <td>Diamonds</td>
                    <td>{this.props.diamonds}</td>
                  </tr>
                </table>
            </div>
        );
    }
}

export default LevelDashboardComponent;
