import React, { Component, SyntheticEvent } from 'react'

interface Props {
    className?: string,
    onSelect?: (event: SyntheticEvent<any, Event>) => void
    
}
interface State {
    
}

export default class DropdownItem extends Component<Props, State> {
    state = {}

    render() {
        return (
            <div className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900' onClick={this.props.onSelect}>
                { this.props.children }
            </div>
        )
    }
}
