import React, { Component, SyntheticEvent } from 'react'
import { Link } from 'react-router-dom'

interface Props {
    linkTo: string,
    className?: string,
    onSelect?: (event: SyntheticEvent<any, Event>) => void
    
}
interface State {
    
}

export default class DropdownLinkItem extends Component<Props, State> {
    state = {}

    render() {
        return (
            <Link to={this.props.linkTo} className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900' onClick={this.props.onSelect}>
                { this.props.children }
            </Link>
        )
    }
}
