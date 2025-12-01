import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import "./Home.css";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // EmailJS Configuration
  // Replace these values with your EmailJS credentials from https://dashboard.emailjs.com
  // You can also use environment variables: process.env.REACT_APP_EMAILJS_SERVICE_ID, etc.
  const EMAILJS_CONFIG = {

    SERVICE_ID: process.env.REACT_APP_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID",
    TEMPLATE_ID_TO_USER: process.env.REACT_APP_EMAILJS_TEMPLATE_USER || "YOUR_TEMPLATE_ID_TO_USER",
    TEMPLATE_ID_TO_OWNER: process.env.REACT_APP_EMAILJS_TEMPLATE_OWNER || "YOUR_TEMPLATE_ID_TO_OWNER",
    PUBLIC_KEY: process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY",
    // Your email where you want to receive contact form submissions
    OWNER_EMAIL: process.env.REACT_APP_OWNER_EMAIL || "your-email@example.com",
    
  };

  // Initialize EmailJS
  useEffect(() => {
    if (EMAILJS_CONFIG.PUBLIC_KEY && EMAILJS_CONFIG.PUBLIC_KEY !== "YOUR_PUBLIC_KEY") {
      emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
    }
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    // Validate EmailJS configuration
    if (
      EMAILJS_CONFIG.SERVICE_ID === "YOUR_SERVICE_ID" ||
      EMAILJS_CONFIG.PUBLIC_KEY === "YOUR_PUBLIC_KEY"
    ) {
      setStatus({
        type: "warning",
        message: "Email service is not configured. Please set up EmailJS credentials. Check the ContactForm.js file for instructions.",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // Template parameters for user confirmation email
      const userEmailParams = {
        to_name: formData.name,
        to_email: formData.email,
        from_name: "Priyanshu Bidhuri",
        subject: `Thank you for contacting me - ${formData.subject}`,
        message: `Hi ${formData.name},\n\nThank you for reaching out! I've received your message regarding "${formData.subject}" and will get back to you soon.\n\nBest regards,\nPriyanshu Bidhuri`,
      };

      // Template parameters for owner notification email
      const ownerEmailParams = {
        from_name: formData.name,
        from_email: formData.email,
        to_email: EMAILJS_CONFIG.OWNER_EMAIL,
        subject: `New Contact Form Submission: ${formData.subject}`,
        message: formData.message,
        reply_to: formData.email,
        user_name: formData.name,
        user_email: formData.email,
      };

      // Send both emails
      await Promise.all([
        emailjs.send(
          EMAILJS_CONFIG.SERVICE_ID,
          EMAILJS_CONFIG.TEMPLATE_ID_TO_USER,
          userEmailParams,
          EMAILJS_CONFIG.PUBLIC_KEY
        ),
        emailjs.send(
          EMAILJS_CONFIG.SERVICE_ID,
          EMAILJS_CONFIG.TEMPLATE_ID_TO_OWNER,
          ownerEmailParams,
          EMAILJS_CONFIG.PUBLIC_KEY
        ),
      ]);

      setStatus({
        type: "success",
        message: "Thank you! Your message has been sent successfully. A confirmation email has been sent to your inbox. I'll get back to you soon.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus({
        type: "danger",
        message: "Oops! Something went wrong while sending your message. Please try again later or contact me directly via email.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container fluid className="contact-section" id="contact">
      <Container>
        <div className="contact-container">
          <Row>
            <Col md={12} className="contact-header">
              <h1 className="contact-title">
                GET IN <span className="purple">TOUCH</span>
              </h1>
              <p className="contact-subtitle">
                Have a question or want to work together? Feel free to reach out!
              </p>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg={8} md={10}>
              <div className="contact-form-wrapper">
                {status.message && (
                  <Alert
                    variant={status.type}
                    className="contact-alert"
                    dismissible
                    onClose={() => setStatus({ type: "", message: "" })}
                  >
                    {status.message}
                  </Alert>
                )}

                <Form onSubmit={handleSubmit} className="contact-form">
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3 form-group">
                        <Form.Label className="form-label">Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your Name"
                          required
                          className="form-control-custom"
                        />
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group className="mb-3 form-group">
                        <Form.Label className="form-label">Email</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your.email@example.com"
                          required
                          className="form-control-custom"
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-3 form-group">
                    <Form.Label className="form-label">Subject</Form.Label>
                    <Form.Control
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      required
                      className="form-control-custom"
                    />
                  </Form.Group>

                  <Form.Group className="mb-4 form-group">
                    <Form.Label className="form-label">Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={6}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message here..."
                      required
                      className="form-control-custom textarea-custom"
                    />
                  </Form.Group>

                  <div className="form-button-container">
                    <Button
                      type="submit"
                      className="contact-submit-button"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </div>
                </Form>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </Container>
  );
}

export default ContactForm;

