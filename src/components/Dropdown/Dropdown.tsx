import React, { ElementType,  } from 'react';
import { IToggleComponentProps, withDropdown } from './DropdownHOC';
import DropdownItem from './DropdownItem';
import DropdownLinkItem from './DropdownLinkItem';

const Dropdown = ({component, onToggle, ...props}: IToggleComponentProps) => {
  return (
    <div>
      { React.createElement(component, {onClick: onToggle, ...props}) }
      { props.isOpen  &&
      <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
          { props.data.map((item, index) => {
              if ('link' in item) {
                return (
                  <DropdownLinkItem key={`dropdownitem-${index}`} linkTo={item.link} onSelect={props.onSelect}>{item.displayName}</DropdownLinkItem>
                )
              } else {
                return (
                  <DropdownItem key={`dropdownitem-${index}`} onSelect={props.onSelect}>{item.displayName}</DropdownItem>
                )
              }
          })}
        </div>
      </div>
      }
    </div>
  );
}

export default withDropdown(Dropdown);