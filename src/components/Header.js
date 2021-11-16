import React from 'react';

function Header(props) {
  return (
    <div>
      <h1>{props.color} {props.branding}</h1>
    </div>
  )
}

export default Header;