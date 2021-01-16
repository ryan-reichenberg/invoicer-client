import React, { Component } from 'react'

interface TodoState {
    isLargeVieport: boolean
    isXLargeViewport: boolean
}
export default class Todo extends Component {
    state: TodoState = {
        isLargeVieport: false,
        isXLargeViewport: false
    }
    updateMedia = () => {
        this.setState({
            isLargeVieport: window.innerWidth > 1900,
            isXLargeViewport: window.innerWidth > 2200
        })

    }
    componentDidMount() {
        this.updateMedia();
        window.addEventListener("resize", this.updateMedia);
    }
    
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateMedia);
    }
      

    render() {
        return (
            <div>
                <ul>
                    <li className='text-gray-700 mb-1'>Today</li>
                    <li className='flex justify-between text-sm text-gray-500'><span className='items-center justify-center'>Mockups</span><span className='flex items-center justify-center'><span className='text-xs text-gray-400'>12:00PM</span><span><svg className="w-6 h-6 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></span></span></li>
                    <li className='flex justify-between text-sm text-gray-500'><span className='items-center justify-center'>Graphic Design</span><span className='flex items-center justify-center'><span className='text-xs text-gray-400'>2:00PM</span><span><svg className="w-6 h-6 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></span></span></li>
                    <li className="text-gray-400 text-xs">+2 more</li>
                </ul>
                <ul className="mt-5">
                    <li className='text-gray-700 mb-1'>Tomorrow</li>
                    <li className='flex justify-between text-sm text-gray-500'><span className='items-center justify-center'>Mockups</span><span className='flex items-center justify-center'><span className='text-xs text-gray-400'>12:00PM</span><span><svg className="w-6 h-6 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></span></span></li>
                </ul>
                <ul className="mt-5">
                    <li className='text-gray-700 mb-1'>Wednesday</li>
                    <li className='flex justify-between text-sm text-gray-500'><span className='items-center justify-center'>Mockups</span><span className='flex items-center justify-center'><span className='text-xs text-gray-400'>12:00PM</span><span><svg className="w-6 h-6 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></span></span></li>
                    <li className='flex justify-between text-sm text-gray-500'><span className='items-center justify-center'>Graphic Design</span><span className='flex items-center justify-center'><span className='text-xs text-gray-400'>2:00PM</span><span><svg className="w-6 h-6 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></span></span></li>
                </ul>
                { this.state.isLargeVieport && 
                    <ul className="mt-5">
                        <li className='text-gray-700 mb-1'>Saturday</li>
                        <li className='flex justify-between text-sm text-gray-500'><span className='items-center justify-center'>Mockups</span><span className='flex items-center justify-center'><span className='text-xs text-gray-400'>12:00PM</span><span><svg className="w-6 h-6 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></span></span></li>
                        <li className='flex justify-between text-sm text-gray-500'><span className='items-center justify-center'>Graphic Design</span><span className='flex items-center justify-center'><span className='text-xs text-gray-400'>2:00PM</span><span><svg className="w-6 h-6 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></span></span></li>
                    </ul>
                }
                { this.state.isXLargeViewport &&
                    <ul className="mt-5">
                        <li className='text-gray-700 mb-1'>Saturday</li>
                        <li className='flex justify-between text-sm text-gray-500'><span className='items-center justify-center'>Mockups</span><span className='flex items-center justify-center'><span className='text-xs text-gray-400'>12:00PM</span><span><svg className="w-6 h-6 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></span></span></li>
                        <li className='flex justify-between text-sm text-gray-500'><span className='items-center justify-center'>Graphic Design</span><span className='flex items-center justify-center'><span className='text-xs text-gray-400'>2:00PM</span><span><svg className="w-6 h-6 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></span></span></li>
                    </ul>
                }
                {/* <ul className="mt-4 lg:mt-6">
                   <li className="text-green-500 text-xs cursor-pointer hover:underline">View More...</li>
                </ul> */}
            </div>
        )
    }
}
