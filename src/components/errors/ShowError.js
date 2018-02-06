import React from "react";
import {Alert} from "reactstrap";
const ShowError = (props) => {
  return (
    <span>
      {props.error &&
        <Alert color="danger">
            {props.error}
        </Alert>
      }
    </span>
  )
}
export default ShowError;