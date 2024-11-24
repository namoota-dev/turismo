import Head from 'next/head';
import { Container, Row, Col, Card, Button, Form, Image } from 'react-bootstrap';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Turismo | Explore Your World With US</title>
        <meta
          name="description"
          content="Discover unforgettable travel experiences with Turismo, your partner for tailored tourism adventures."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      {/* Hero Section */}
      <section id="heroSection" className="bg-green text-white text-center py-5">
        <Container>
          <h1 className="display-4">Discover the World with Turismo</h1>
          <p className="lead">Tailored tours, unforgettable experiences, and destinations to cherish forever.</p>
          <Button variant="light" href="tours">Explore Tours</Button>
        </Container>
      </section>

      {/* Services Section */}
      <section id="services" className="py-5">
        <Container>
          <h2 className="text-center mb-4">Our Services</h2>
          <Row>
            <Col md={4}>
              <Card className="service-card">
                <Card.Body>
                  <Card.Title>Custom Tours</Card.Title>
                  <Card.Text>
                    Personalized travel experiences that fit your unique preferences and schedule.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="service-card">
                <Card.Body>
                  <Card.Title>Travel Assistance</Card.Title>
                  <Card.Text>
                    24/7 support from our team to make your travel seamless and stress-free.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="service-card">
                <Card.Body>
                  <Card.Title>Local Experiences</Card.Title>
                  <Card.Text>
                    Immerse yourself in authentic local cultures with expert guides.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Tour Planners Section */}
      <section id="tourPlanners" className="bg-light py-5">
        <Container>
          <h2 className="text-center mb-4">Meet Our Tour Planners</h2>
          <Row>
            <Col md={4} className="text-center">
              <Image src="/images/lungi.png" roundedCircle fluid style={{ width: '150px', height: '150px' }} />
              <h5 className="mt-3">Lungi Mdletshe</h5>
              <p>Adventure Specialist</p>
            </Col>
            <Col md={4} className="text-center">
              <Image src="/images/gwen.png" roundedCircle fluid style={{ width: '150px', height: '150px' }} />
              <h5 className="mt-3">Gwen Lotter</h5>
              <p>Luxury & Safari Specialist</p>
            </Col>
            <Col md={4} className="text-center">
              <Image src="/images/zweli.png" roundedCircle fluid style={{ width: '150px', height: '150px' }} />
              <h5 className="mt-3">Zweli Mthethwa</h5>
              <p>Cultural Tour Specialist</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-5">
        <Container>
          <h2 className="text-center mb-4">What Our Clients Say</h2>
          <Row>
            <Col md={6}>
              <Card>
                <Card.Body>
                  <Card.Text>
                    "Turismo planned the perfect honeymoon for us. We’ll cherish these memories forever."
                  </Card.Text>
                  <Card.Footer>- Emily R.</Card.Footer>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card>
                <Card.Body>
                  <Card.Text>
                    "Their guides were fantastic, and the custom itinerary made all the difference."
                  </Card.Text>
                  <Card.Footer>- Alex K.</Card.Footer>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-green text-white py-5">
        <Container>
          <h2 className="text-center mb-4">Contact Us</h2>
          <Form className="mx-auto" style={{ maxWidth: '600px' }}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Control type="text" placeholder="Your Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Control type="email" placeholder="Your Email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="message">
              <Form.Control as="textarea" rows={3} placeholder="Your Message" />
            </Form.Group>
            <Button type="submit" variant="light">Send Message</Button>
          </Form>
        </Container>
      </section>

      <Footer />
    </div>
  );
}
