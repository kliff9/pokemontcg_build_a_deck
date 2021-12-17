import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Hourglass } from "react-spinners-css";
import MessageBox from "../componets/MessageBox";


export default function _CardViewScreen() {

return (
    <React.Fragment>
      {loading ? (
        <Hourglass color="purple" />
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : ( 
      <div></div>
        
        
        
        )}

        </React.Fragment>
 
)

}