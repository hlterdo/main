import { React } from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import tweetImg from "./tweet.png";
import startupImg from "./startup.png";
import paperImg from "./paper.png";
import eventImg from "./event.png";
import newsImg from "./news.png";
import Accordion from "react-bootstrap/Accordion";
import data from "./empty-home-tax100.json";

import { Container, Badge, Row, Col, Button, Image } from "react-bootstrap";
import { useState } from "react";

import { Heart, Lightbulb, Lightning } from "react-bootstrap-icons";

import { Modal, Form } from "react-bootstrap";

import {
  Sigma,
  RandomizeNodePositions,
  RelativeSize,
  NOverlap,
} from "react-sigma";
import Dagre from "react-sigma/lib/Dagre";
import ForceLink from "react-sigma/lib/ForceLink";
import ReactSigmaLayoutPlugin from "react-sigma/lib/ReactSigmaLayoutPlugin";

data.edges.forEach((edge) => {
  edge.id = Math.random();
});

const Home = () => {
  const [showModal, setShowModal] = useState(true);
  const [inputValue, setInputValue] = useState("");

  const handleCloseModal = () => setShowModal(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Input Value:", inputValue);
    handleCloseModal();
  };

  return (
    <>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Enter your innovation mission</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicText">
              <Form.Control
                as="textarea"
                placeholder="Mission"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

const Feed = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Image src={tweetImg} alt="Tweet" fluid />
        </Col>
        <Col>
          <Heart size={15} color="red" />{" "}
          <Badge bg="success">Customer service chatbots</Badge>{" "}
          <Badge bg="info">Tweet</Badge>
        </Col>
      </Row>
      <Row>
        <Col>
          <Image src={startupImg} alt="Tweet" fluid />
        </Col>
        <Col>
          <Heart size={15} color="red" />{" "}
          <Badge bg="danger">Writing Assistance</Badge>{" "}
          <Badge bg="secondary">Startup</Badge>
        </Col>
      </Row>
      <Row>
        <Col>
          <Image src={paperImg} alt="Tweet" fluid />
        </Col>
        <Col>
          <Heart size={15} color="red" />{" "}
          <Badge bg="warning">Writing Assistance</Badge>{" "}
          <Badge bg="info">Publication</Badge>
        </Col>
      </Row>
      <Row>
        <Col>
          <Image src={newsImg} alt="Tweet" fluid />
        </Col>
        <Col>
          <Heart size={15} color="red" />{" "}
          <Badge bg="success">Insurance Fraud Detection</Badge>{" "}
          <Badge bg="danger">News</Badge>
        </Col>
      </Row>
      <Row>
        <Col>
          <Image src={eventImg} alt="Tweet" fluid />
        </Col>
        <Col>
          <Heart size={15} color="red" />{" "}
          <Badge bg="warning">Writing Assistance</Badge>{" "}
          <Badge bg="success">Event</Badge>
        </Col>
      </Row>
    </Container>
  );
};

const Documents = () => {
  return (
    <div>
      <iframe
        src="https://drive.google.com/embeddedfolderview?id=1mJXo4sA2p_Mw9sWDRAEHu-LP4XUrNFU_#grid"
        style={{ width: "100%", height: "600px", border: 0 }}
      ></iframe>
    </div>
  );
};

const Ideas = () => {
  return (
    <div>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <h1 style={{ color: "#9DA136" }}>
              <Lightbulb /> Claims Processing Chatbot
            </h1>
          </Accordion.Header>
          <Accordion.Body>
            AI can help automate the claims processing workflow, which can speed
            up the process and reduce the likelihood of errors. Chatbots and
            virtual assistants can also be used to handle simple claims and
            answer customer questions, freeing up staff to handle more complex
            cases.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <h1 style={{ color: "#9DA136" }}>
              <Lightbulb /> Customer Service Chatbot
            </h1>
          </Accordion.Header>
          <Accordion.Body>
            AI-powered chatbots and virtual assistants can be used to provide
            personalized support to customers, answer their questions, and guide
            them through the insurance-buying process. This can help you provide
            better customer service and reduce the workload on your staff.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <h1 style={{ color: "#9DA136" }}>
              <Lightbulb /> Personalized Insurance Products
            </h1>
          </Accordion.Header>
          <Accordion.Body>
            AI can be used to analyze data on individual customers to create
            customized insurance products that meet their specific needs. This
            can help you differentiate your offerings and provide more value to
            your customers.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            <h1 style={{ color: "#9DA136" }}>
              <Lightbulb /> Use AI to Write Insurance Marketing Content
            </h1>
          </Accordion.Header>
          <Accordion.Body>
            AI can be used to detect patterns of fraud in claims data, which can
            help you identify and prevent fraudulent activity. This can reduce
            the cost of insurance fraud and improve your bottom line.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>
            <h1 style={{ color: "#9DA136" }}>
              <Lightbulb /> AI-Powered Risk Management
            </h1>
          </Accordion.Header>
          <Accordion.Body>
            AI can be used to analyze large amounts of data to identify risks
            and predict the likelihood of claims. This can help you price
            policies more accurately, avoid risky business, and reduce the
            likelihood of fraud.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

const Insights = () => {
  return (
    <div>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <h1 style={{ color: "#9DA136" }}>
              <Lightning /> Conversational chatbots will get much better
            </h1>
          </Accordion.Header>
          <Accordion.Body>
            AI can help automate the claims processing workflow, which can speed
            up the process and reduce the likelihood of errors. Chatbots and
            virtual assistants can also be used to handle simple claims and
            answer customer questions, freeing up staff to handle more complex
            cases.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <h1 style={{ color: "#9DA136" }}>
              <Lightning /> AI-assisted content writers are on the rise.
            </h1>
          </Accordion.Header>
          <Accordion.Body>
            AI-powered chatbots and virtual assistants can be used to provide
            personalized support to customers, answer their questions, and guide
            them through the insurance-buying process. This can help you provide
            better customer service and reduce the workload on your staff.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <h1 style={{ color: "#9DA136" }}>
              <Lightning /> No-code ML systems make it easy to train models
            </h1>
          </Accordion.Header>
          <Accordion.Body>
            AI can be used to analyze data on individual customers to create
            customized insurance products that meet their specific needs. This
            can help you differentiate your offerings and provide more value to
            your customers.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

const Map = () => {
  return (
    <div>
      <Badge bg="success">Ideas</Badge> <Badge bg="info">Insights</Badge>{" "}
      <Badge bg="danger">Tweets</Badge> <Badge bg="warning">Documents</Badge>{" "}
      <Badge bg="info">News</Badge> <Badge bg="success">Events</Badge>{" "}
      <Badge bg="warning">Papers</Badge> <Badge bg="secondary">Startups</Badge>
      <Sigma
        graph={data}
        settings={{
          animationsTime: 3000,
          defaultLabelSize: 15,
          drawLabels: true,
          labelSize: "fixed",
          labelThreshold: 5,
        }}
        style={{
          height: "1000px",
          maxWidth: "inherit",
        }}
      >
        <RandomizeNodePositions>
          <ForceLink
            background
            easing="cubicInOut"
            iterationsPerRender={1}
            linLogMode
            timeout={1000}
            worker
            outboundAttractionDistribution={false}
          />

          <NOverlap
            duration={3000}
            easing="quadraticInOut"
            gridSize={20}
            maxIterations={100}
            nodeMargin={10}
            scaleNodes={4}
            speed={10}
          />
          <RelativeSize initialSize={5} />
        </RandomizeNodePositions>

        {/* <RandomizeNodePositions /> */}
        {/* <ReactSigmaLayoutPlugin
          start={Sigma.layouts.dagre.start}
          config={Sigma.layouts.dagre.configure}
          stop={() => console.warn("dagre stop not implemented")}
        /> */}
      </Sigma>
    </div>
  );
};

function App() {
  const [page, setPage] = useState(-1);

  const handleHomeClick = () => {
    setPage(0);
  };

  const handleFeedClick = () => {
    setPage(1);
  };

  const handleIdeasClick = () => {
    setPage(2);
  };

  const handleInsightsClick = () => {
    setPage(3);
  };

  const handleDocumentsClick = () => {
    setPage(4);
  };

  const handleMapClick = () => {
    setPage(5);
  };

  return (
    <Container>
      <Row className="mb-5">
        <Button variant="primary" onClick={handleHomeClick}>
          Home
        </Button>

        <Button variant="primary" onClick={handleFeedClick}>
          Feed
        </Button>

        <Button variant="primary" onClick={handleIdeasClick}>
          Ideas
        </Button>

        <Button variant="primary" onClick={handleInsightsClick}>
          Insights
        </Button>

        <Button variant="primary" onClick={handleDocumentsClick}>
          Documents
        </Button>

        <Button variant="primary" onClick={handleDocumentsClick}>
          Experiments
        </Button>

        <Button variant="primary" onClick={handleDocumentsClick}>
          Datasets
        </Button>

        <Button variant="primary" onClick={handleDocumentsClick}>
          Code
        </Button>

        <Button variant="primary" onClick={handleMapClick}>
          Brain Map
        </Button>
      </Row>
      <hr></hr>
      <Row>
        {page === 0 && <Home></Home>}
        {page === 1 && <Feed></Feed>}
        {page === 2 && <Ideas></Ideas>}
        {page === 3 && <Insights></Insights>}
        {page === 4 && <Documents></Documents>}
        {page === 5 && <Map></Map>}
      </Row>
    </Container>
  );
}

export default App;
