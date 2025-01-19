import { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: ''});
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value});
    }

    const validateEmail = (email) => {
        return /\S+@\S+\.\S+/.test(email);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, message } = formData;

        if (!name || !email || !message) {
            setError("All fields are required.");
            return;
        }

        if (!validateEmail(email)) {
            setError("Please enter a valid email address.");
            return;
        }

        setError('');

        try {
            const response = await fetch("http://localhost/turismo/api/contact/contact-form-handler.php", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSuccess(true);
                setFormData({ name: '', email: '', message: '' });
            } else {
                setError('Failed to send message. Please try again');
            }
        } catch (error) {
            setError('An error occurred. Please try again later.');
        }
    };


    return (
        <section id="contact" className="bg-green text-white py-5">
            <Container>
                <h2 className="text-center mb-4">Contact Us</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                {success && <Alert variant="success">Message sent successfully!</Alert>}
                <Form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: '600px' }}>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Control 
                            type="text" 
                            placeholder="Your Name" 
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="email">
                        <Form.Control 
                            type="email" 
                            placeholder="Your Email" 
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="message">
                        <Form.Control 
                            as="textarea" 
                            rows={3} 
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleChange}
                        />
                    </Form.Group>
                        <Button type="submit" variant="light">Send Message</Button>
                    </Form>
            </Container>
      </section>
    );
}
export default ContactForm;