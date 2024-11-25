import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "@/components/Header";
import Head from "next/head";
import Footer from "@/components/Footer";
const activities = [
  {
    id: 1,
    title: "Breakfast & Cultural Morning",
    description:
      "Dine on local South African cuisine, followed by a Zulu cultural village tour to learn about local traditions and folklore.",
    duration: "Breakfast + 2-hour cultural tour",
    provider: "Veyane Cultural Village or Isibindi Africa Lodges",
    suggestedLocation: "LoveRSA Cafe",
    image: "/images/theotours.png",
  },
  {
    id: 2,
    title: "Birding Tour",
    description:
      "Spot over 500 bird species in iSimangaliso or False Bay Nature Reserve, including fish eagles and pink-backed pelicans.",
    duration: "2–3 hours",
    provider: "St. Lucia Birding Tours",
    image: "/images/birding.png",
  },
  {
    id: 3,
    title: "Hippo & Crocodile Boat Cruise",
    description:
      "Enjoy a guided boat tour on the St. Lucia Estuary to see hippos and Nile crocodiles up close in the largest estuarine system in Africa.",
    duration: "2 hours",
    provider: "Advantage Tours or St. Lucia Eco Lodge & Conference Centre",
    image: "/images/hippocroc.png",
  },
  {
    id: 4,
    title: "Safari Adventure",
    description:
      "Explore iSimangaliso Wetland Park with a guided safari tour. Catch the Big Five in their natural morning routines.",
    duration: "3–4 hours",
    provider: "Bhangazi Horse Safari or Shoreline Safaris",
    image: "/images/safari.png",
  },
  {
    id: 5,
    title: "Hiking Trails in Cape Vidal",
    description:
      "Enjoy scenic trails at Cape Vidal with opportunities to spot marine life, antelope, and birds. Trails range from easy to moderate.",
    duration: "2–3 hours",
    provider: "Mission Rocks or Kosi Bay",
    image: "/images/hiking.png",
  },
  {
    id: 6,
    title: "Fishing Tour",
    description:
      "Set sail on a deep-sea fishing adventure off Cape Vidal to catch barracuda, kingfish, and more.",
    duration: "3–4 hours",
    provider: "Big Fish St. Lucia or St. Lucia Fishing Adventures",
    image: "/images/fishing.png",
  },
  {
    id: 7,
    title: "Spearfishing & Snorkeling",
    description:
      "Discover clear waters near Cape Vidal, perfect for spearfishing enthusiasts or snorkelers seeking marine life encounters.",
    duration: "2–3 hours",
    provider: "Kosi Bay Spearfishing or specialized spearfishing charters",
    image: "/images/snorkelling.png",
  },
  {
    id: 8,
    title: "Biking Trail Exploration",
    description:
      "Explore iSimangaliso’s bike trails along breathtaking coastal and forest routes.",
    duration: "1.5–2 hours",
    provider: "Local tour companies or lodges",
    image: "/images/bicycle.png",
  },
];

const Tours = () => {
  return (
    <>
        <Head>
        <title>Turismo | Explore Your World With US</title>
        <meta
          name="description"
          content="Discover unforgettable travel experiences with Turismo, your partner for tailored tourism adventures."
        />
        <link rel="icon" href="/logo.jpeg" />
      </Head>

      <Header />
   
    <div style={{ minHeight: "100vh", backgroundColor: "#eafaf1", padding: "40px 0" }}>
      <Container>
        <h1 className="text-center mb-5 display-6 header-text" style={{ color: "#2d6a4f" }}>
          Discover Our Tour Packages
        </h1>
        <Row className="justify-content-center">
          {activities.map((activity) => (
            <Col
              key={activity.id}
              xs={12}
              sm={6}
              md={4}
              lg={3}
              className="d-flex justify-content-center mb-4"
            >
              <Card style={{ width: "18rem", boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}>
                <Card.Img variant="top" src={activity.image} />
                <Card.Body>
                  <Card.Title className="header-text">{activity.title}</Card.Title>
                  <Card.Text className="text-muted">{activity.description}</Card.Text>
                  <Card.Text>
                    <strong>Duration:</strong> {activity.duration}
                  </Card.Text>
                  <Card.Text>
                    <strong>Provider:</strong> {activity.provider}
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="text-center">
                  <Button className="bg-green book-now-btn">Enquire Now</Button>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
    <Footer />
    </>
  );
};

export default Tours;
