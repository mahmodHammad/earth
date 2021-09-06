import React from 'react';
import {ReactComponent as ReactLogo} from "./envelope.svg";

const Email = ({color , width, height}) => {
  return (
      <div  className="toggleLogo" >
          <ReactLogo color="#f00" width={width} height={height} />
      </div>
  );
}
export default Email;