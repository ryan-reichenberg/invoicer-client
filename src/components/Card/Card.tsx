import React, { Component } from 'react'

type CardProps = {
    padding: string
}
export default class Card extends Component<CardProps> {
    static defaultProps = {
        padding: "" 
    }

    render() {
        return (
            // px-4 pt-5
            <div className={"shadow-md rounded-md bg-white border border-gray-200 w-full h-full -my-2 overflow-x-auto"}>
                <div className={"shadow rounded-md w-full h-full " + this.props.padding}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}
