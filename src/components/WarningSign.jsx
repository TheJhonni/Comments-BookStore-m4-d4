import { Alert } from "react-bootstrap";

const WarningSign = (props) => {
  return (
    <div>
      {" "}
      <Alert key={0} variant="primary" className="">
        {props.text}
      </Alert>
    </div>
  );
};

export default WarningSign;
