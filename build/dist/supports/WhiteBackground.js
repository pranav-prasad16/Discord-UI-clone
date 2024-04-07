import React from '../../_snowpack/pkg/react.js';
const WhiteBackground = props => {
  return /*#__PURE__*/React.createElement(React.Fragment, null, React.Children.map(props.children, child => /*#__PURE__*/React.cloneElement(child, {
    ...child.props,
    className: `${child.props.className} rounded-full`
  })));
};
export default WhiteBackground;