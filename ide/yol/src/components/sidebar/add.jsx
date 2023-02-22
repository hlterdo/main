import React, { useState } from "react";

import SelectNew from "../selectpane/selectNew";
import SelectDataset from "../selectpane/selectDataset";
import SelectSampleDataset from "../selectpane/selectSampleDataset";

const PlusNew = (props) => {
  const [modalIndex, setModalIndex] = useState(0);

  // === SELECT NEW PANE ===

  const handleSelectDatasetClick = () => {
    setModalIndex(1);
  };

  const selectNewModal = (
    <SelectNew
      {...props}
      key="selectNew"
      onSelectDatasetClick={handleSelectDatasetClick}
    ></SelectNew>
  );

  // === SELECT DATASET PANE ===

  const handleSelectSampleDatasetClick = () => {
    setModalIndex(2);
  };

  const selectDatasetModal = (
    <SelectDataset
      {...props}
      key="selectDataset"
      onSelectSampleDatasetClick={handleSelectSampleDatasetClick}
    ></SelectDataset>
  );

  // === SELECT SAMPLE DATASET PANE ===
  const [importDisabled, setImportDisabled] = useState(true);

  const handleHotelReservationsClick = () => {
    setImportDisabled(false);
  };

  const selectSampleDatasetModal = (
    <SelectSampleDataset
      {...props}
      importDisabled={importDisabled}
      onHotelReservationsClick={handleHotelReservationsClick}
      key="selectSampleDataset"
      onImportClick={props.onImportClick}
    ></SelectSampleDataset>
  );

  // === ALL THE MODALS ===

  const modals = [selectNewModal, selectDatasetModal, selectSampleDatasetModal];

  return <>{modals[modalIndex]}</>;
};

export default PlusNew;
