import React from 'react';
const WhiteBackground = (props) => {
    return <>
        {
            React.Children.map(props.children, child => React.cloneElement(child, { ...child.props, className: `${child.props.className} rounded-full` }))
        }
    </>
}

export default WhiteBackground
