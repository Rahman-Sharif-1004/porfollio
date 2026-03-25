document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');

  form.addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevent page reload on form submit

    // Collect form data
    const formData = {
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      phone: form.phone.value.trim(),
      message: form.message.value.trim(),
    };

    try {
      // Send form data to backend API
      const response = await fetch('http://localhost:5000/api/contact', {  // Change URL when deployed
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // Parse JSON response from backend
      const result = await response.json();

      if (result.success) {
        alert('Thank you for getting in touch!');
        form.reset(); // Clear the form fields
      } else {
        alert('Oops! Something went wrong.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit the form. Please try again later.');
    }
  });
});
