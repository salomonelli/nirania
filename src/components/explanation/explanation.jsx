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
            visible: false,
            iconType: null
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
                <div className={this.state.iconType ? 'keyboard' : 'keyboard hidden'}>
                  <div className="row-1">
                    <div className={this.state.iconType === 'jump' ? 'arrow-up active' : 'arrow-up'}>
                      <ChevronLeft /></div>
                  </div>
                  <div className="row-2">
                    <div className={this.state.iconType === 'left-turn' ? 'arrow-left active' : 'arrow-left'}>
                      <ChevronLeft />
                      </div>
                    <div className="arrow-down"><ChevronLeft /></div>
                    <div className={this.state.iconType === 'right-turn' ? 'arrow-right active' : 'arrow-right'}>
                      <ChevronRight /></div>
                  </div>
                </div>
            </div>
        );
    }
}

export default ExplanationComponent;
