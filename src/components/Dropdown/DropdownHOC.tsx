import React, { ElementType, SyntheticEvent } from "react";


export interface IToggleComponentProps  {
    component: ElementType,
    onSelect?: (event: SyntheticEvent<any, Event>) => void,
    onToggle?: () => void,
    onClick?: () => void,
    data: (IDropdownItem | IDropdownLinkItem)[],
    isOpen?: boolean
}
export interface IDropdownLinkItem  {
    link: string,
    displayName: string,
}
export interface IDropdownItem  {
    displayName: string,
}

interface Props {
    data: (IDropdownItem | IDropdownLinkItem)[]
    component: ElementType
    onSelect?: (event: SyntheticEvent<any, Event>) => void
    
}
interface State {
    isOpen: boolean,  
}
// Tech debt: Not sure if HOC is needed
export const withDropdown = <P extends IToggleComponentProps>(
    Component: React.ComponentType<P>
  ) =>
    class Dropdown extends React.Component<Props, State> {
        state: State = {
            isOpen: false,
        };

        componentDidMount() {
            window.addEventListener('click', this.handleDocumentClick)
        }
        componentWillUnmount () {
            window.removeEventListener('click', this.handleDocumentClick)
        }
        handleDocumentClick = () =>{
            if(this.state.isOpen) {
                this.toggleDropDown();
            }
            
        }
        onSelect = (event: SyntheticEvent<any, Event>) => {
            this.toggleDropDown(); // Close dropdown
            if(this.props.onSelect) {
                console.log('onSelect')
                this.props.onSelect(event);
            }
        }
        toggleDropDown = () => {
            this.setState({isOpen: !this.state.isOpen})
        }
  
      render() {
        return (
            <div className="relative inline-block text-left">
            <div onClick={(e: React.MouseEvent<HTMLElement>) => e.stopPropagation()} >
                {/* Heroicon name: chevron-down */}
                {/* TODO: How would this work when I need to pass in my button component? */}
                <Component {...this.props as P} 
                    isOpen={this.state.isOpen} 
                    onToggle={this.toggleDropDown} 
                    onSelect={this.onSelect}
                     />
            </div>
          
            
              {/* Dropdown panel, show/hide based on dropdown state.
          
              Entering: "transition ease-out duration-100"
                From: "transform opacity-0 scale-95"
                To: "transform opacity-100 scale-100"
              Leaving: "transition ease-in duration-75"
                From: "transform opacity-100 scale-100"
                To: "transform opacity-0 scale-95"
              */}
          </div>
        );
      }
    };