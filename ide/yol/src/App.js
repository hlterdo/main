import "./App.css";

import Sidebar from "./components/sidebar/sidebar";
import Mainpane from "./components/mainpane/mainpane";
import YolNavbar from "./components/navbar/yolNavbar";
import { Container, Row, Col } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

const NewType = {
  IMPORT_DATASET: "importDataset",
  COPY_DATASET: "copyDataset",
};

function App() {
  const handleNew = (newType, importDatasetPath) => {
    if (newType === IMPORT_DATASET) {
    }
  };

  return (
    <div className="App">
      <Container>
        <Row>
          <YolNavbar></YolNavbar>
        </Row>
        <Row>
          <Col>
            <Sidebar></Sidebar>
          </Col>
          <Col>
            <Mainpane></Mainpane>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
