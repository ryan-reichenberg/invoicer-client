import React, { Component } from 'react'
import  classes from './Card.module.css';

type CardProps = {
    width: string,
    padding: string
}
export default class Card extends Component<CardProps> {
    static defaultProps = {
        width: "w-2/5",
        padding: "" 
    }

    render() {
        return (
            <div className={[classes.card, "shadow-md", "rounded-md bg-white border border-gray-200 max-h-96", this.props.width].join(" ")}>
                <div className={"shadow px-4 pt-5 rounded-md max-h-96 " + this.props.padding}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}
