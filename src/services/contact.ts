/**
 * Represents a contact form submission.
 */
export interface ContactForm {
  /**
   * The name of the person submitting the form.
   */
  name: string;
  /**
   * The email address of the person submitting the form.
   */
  email: string;
  /**
   * The message content.
   */
  message: string;
}

/**
 * Asynchronously submits the contact form data to an API.
 *
 * @param form The contact form data to submit.
 * @returns A promise that resolves when the submission is successful.
 */
export async function submitContactForm(form: ContactForm): Promise<void> {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    });

    if (!response.ok) {
      throw new Error('Failed to submit the form');
    }

    console.log('Form submitted successfully');
  } catch (error) {
    console.error('Error submitting form:', error);
  }
}
