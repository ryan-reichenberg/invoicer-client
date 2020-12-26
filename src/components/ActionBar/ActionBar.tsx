import React, { Component, FunctionComponent, SyntheticEvent } from 'react'
import Dropdown from '../Dropdown/Dropdown'
import { IDropdownLinkItem, IToggleComponentProps } from '../Dropdown/DropdownHOC'
import AccountSettings from './AccountSettings'
import NotificationIndicator from './NotificationIndicator'

// Private Component
const ToggleComponent: FunctionComponent<IToggleComponentProps> = (props) => {
    return (
        <button type="button" className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" id="options-menu" aria-haspopup="true" aria-expanded="true" onClick={props.onClick}>
            Options
            <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
        </button>
    )
}

export default class ActionBar extends Component {
    render() {
        const data: IDropdownLinkItem[] = [
            {
                link: '/test1',
                displayName: "Test"
            },
            {
                link: '/test2',
                displayName: "Test2"
            },
        ]
        return (
            <div  className='mt-2 mr-14 px-8 absolute top-0 right-0 flex items-center justify-center'>
                {/* <Button>New</Button> */}
                {/* onSelect might need to change here. */}
                <Dropdown toggleComponent={ToggleComponent} data={data} onSelect={(e: SyntheticEvent<any, Event>) => console.log(e.currentTarget.text)}/>
                <NotificationIndicator />
                <AccountSettings />
            </div>
        )
    }
}
