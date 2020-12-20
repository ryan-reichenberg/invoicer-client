import React, { Component } from 'react'
import  classes from './Card.module.css';

type CardProps = {
    width: string
}
export default class Card extends Component<CardProps> {
    static defaultProps = {
        width: "w-2/5"
    }

    render() {
        return (
            <div className={[classes.card, "shadow-md", "rounded-md bg-white border border-gray-200", this.props.width].join(" ")}>
                <div className="shadow p-6 rounded-md">
                    {this.props.children}
                </div>
            </div>
        )
    }
}
