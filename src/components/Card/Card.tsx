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
            // px-4 pt-5
            <div className={[classes.card, "shadow-md", "rounded-md bg-white border border-gray-200 md:max-h-80 2xl:max-h-96", this.props.width].join(" ")}>
                <div className={"shadow rounded-md md:max-h-80  2xl:max-h-96 " + this.props.padding}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}
