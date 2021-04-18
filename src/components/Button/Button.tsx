import React, { Component } from 'react'
import cx from 'classnames'

interface Props {
    type: string
    onClick: () => void,
    classNames?: string
    disabled: boolean
    
}
interface State {
    
}

export default class Button extends Component<Props, State> {
    state = {}
    render() {
        return (
            <button type="button" className={cx(this.props.classNames, (this.props.disabled ? "bg-gray-400 text-white cursor-not-allowed" : this.props.type === 'primary' ? 'bg-green-400 text-white' : this.props.type === 'secondary' ? 'bg-white ring-1 ring-gray-400 ring-inset text-gray-700' : "")," text-center px-8 py-2 rounded-md shadow font-bold")} onClick={this.props.onClick}>
                { this.props.children }
            </button>
        )
    }
}

