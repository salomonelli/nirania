import React, {Component} from 'react';
import './explanation.css';


class ExplanationComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            text: ''
        };
    }

    async componentDidMount() {}

    componentWillUnmount() {}

    display(text) {
        this.setState({
            text,
            visible: true
        });
    }

    hide() {
        if(!this.state.text) return;
        this.setState({
            text: null,
            visible: false
        });
    }



    render() {
        return (
            <div className={this.state.visible
                ? 'explanation'
                : 'explanation hidden'}>
                <p>{this.state.text}</p>
            </div>
        );
    }
}

export default ExplanationComponent;
