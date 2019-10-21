import React, { Component } from 'react';
import large1 from '../images/large1.jpg';
import large2 from '../images/large2.jpg';
import large3 from '../images/large3.jpg';
import large4 from '../images/large4.jpg';
import large5 from '../images/large5.jpg';
import large6 from '../images/large6.jpg';

let getImgSrc = "";

export default class LightBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            setImgSrc: "",
            selected: false
        }
    }

    onMouseOverHandler = (e) => {
        getImgSrc = e.target.src
        this.setState({
            selected: true,
            setImgSrc: getImgSrc
        })
    }

    render() {
        return (
            <div className="lightbox_wrapper">
                <img src={this.state.selected ? `${this.state.setImgSrc}` : `${large1}`} alt="img-large" />
                <ul>
                    <li><img src={large1} alt="img-small" onMouseOver={this.onMouseOverHandler} /></li>
                    <li><img src={large2} alt="img-small" onMouseOver={this.onMouseOverHandler} /></li>
                    <li><img src={large3} alt="img-small" onMouseOver={this.onMouseOverHandler} /></li>
                    <li><img src={large4} alt="img-small" onMouseOver={this.onMouseOverHandler} /></li>
                    <li><img src={large5} alt="img-small" onMouseOver={this.onMouseOverHandler} /></li>
                    <li><img src={large6} alt="img-small" onMouseOver={this.onMouseOverHandler} /></li>
                </ul>
            </div>
        )
    }
}