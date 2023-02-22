import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Plus } from "react-bootstrap-icons";

import Add from "./add";

const Bottom = (props) => {
  const [showSelectpane, setShowSelectpane] = React.useState(false);
  const [addKey, setAddKey] = useState(0);

  const handleOnHide = () => {
    setAddKey("addKey" + (addKey + 1));
    setShowSelectpane(false);
  };

  return (
    <div>
      <Button
        key="newButton"
        variant="primary"
        onClick={() => setShowSelectpane(true)}
      >
        Add
      </Button>

      {showSelectpane && (
        <Add
          key={addKey}
          show={showSelectpane}
          onHide={() => handleOnHide()}
        ></Add>
      )}
    </div>
  );
};

export default Bottom;
