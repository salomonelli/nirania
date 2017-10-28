import React, {Component} from 'react';
import ChevronLeft from 'material-ui-icons/ChevronLeft';
import ChevronRight from 'material-ui-icons/ChevronRight';
import './explanation.css';


class ExplanationComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            text: '',
            iconType: null
        };
    }

    async componentDidMount() {}

    componentWillUnmount() {}

    display(text, iconType) {
        this.setState({
            text,
            visible: true,
            iconType
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
                <div className="text">
                  <p>{this.state.text}</p>
                </div>
                <div className="keyboard">
                  <div className="row-1">
                    <div className="arrow-up"><ChevronLeft /></div>
                  </div>
                  <div className="row-2">
                    <div className="arrow-left active"><ChevronLeft /></div>
                    <div className="arrow-down"><ChevronLeft /></div>
                    <div className="arrow-right"><ChevronRight /></div>
                  </div>
                </div>
            </div>
        );
    }
}

export default ExplanationComponent;
