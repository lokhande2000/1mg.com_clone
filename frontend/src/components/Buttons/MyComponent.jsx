import { useState } from "react";
import { Alert, AlertIcon } from "@chakra-ui/react";

function MyComponent() {
  const [showAlert, setShowAlert] = useState(false);

  const handleClick = () => {
    setShowAlert(true);
  };

  return (
    <>
      <button onClick={handleClick}>Upload Data</button>
      {showAlert && (
        <Alert status="success">
          <AlertIcon />
          Data uploaded to the server. Fire on!
        </Alert>
      )}
    </>
  );
}

export default MyComponent;
