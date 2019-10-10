import React from 'react';


const Skip = ({skip}) => {
  return (
    <div className="skip-button-wrapper">
		  <div className="skip-button" onClick={() => skip()}>
			   <p>Skip</p>
		   </div>
	  </div>
  );
}

export default Skip;
