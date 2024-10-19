// Contact.js
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_urwwif9', // Replace with your Email.js Service ID
      'template_q2frhfp', // Replace with your Email.js Template ID
      formData,
      '6ZYV29O5WN3Bzrx7V' // Replace with your Email.js User ID
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' }); // Reset form
    })
    .catch((error) => {
      console.error('FAILED...', error);
      alert('Message sending failed. Please try again.');
    });
  };

  return (
    <section id="contact" className="bg-white text-center py-16 px-4">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6">Contact</h2>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="border p-2 w-full rounded-md text-sm sm:text-base"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="border p-2 w-full rounded-md text-sm sm:text-base"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className="border p-2 w-full rounded-md text-sm sm:text-base"
          rows="5"
          required
        ></textarea>
        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-2 rounded-md w-full sm:w-auto hover:bg-blue-600"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
