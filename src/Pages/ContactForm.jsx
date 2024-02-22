import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import './ContactForm.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      errors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email address is invalid';
      isValid = false;
    }

    if (!formData.message.trim()) {
      errors.message = 'Message is required';
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Submit the form data
      console.log('Form data:', formData);
      // You can send the form data to your backend here
    }
  };

  return (
    <Container className='contactForm'>
      <Row className="justify-content-md-center">
        <Col md={6}>
          <Form onSubmit={handleSubmit} id='contact-form'>
          <h2>Contact Us</h2>

            <Form.Group controlId="formName" className='formGroup'>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Your Name"
                className='formInput'
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <Form.Text className="text-danger">{errors.name}</Form.Text>}
            </Form.Group>
            <Form.Group controlId="formEmail" className='formGroup'>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                className='formInput'
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <Form.Text className="text-danger">{errors.email}</Form.Text>}
            </Form.Group>
            <Form.Group controlId="formMessage" className='formGroup'>
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="message"
                className='formInput_textarea'
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
              />
              {errors.message && <Form.Text className="text-danger">{errors.message}</Form.Text>}
            </Form.Group>
            <Button className="submitBtn" variant="primary" type="submit">
              Send
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactForm;
