'use server';

export async function submitContact(formData: FormData) {
  const name = formData.get('name');
  const email = formData.get('email');
  const phone = formData.get('phone');
  const message = formData.get('message');

  // Simulate network delay and sending email
  await new Promise((resolve) => setTimeout(resolve, 1500));

  console.log('Sending Contact to wamuritu@gmail.com: ', { name, email, phone, message });

  return { success: true, message: 'Thank you, we’ll contact you shortly.' };
}

export async function submitQuote(formData: FormData) {
  const name = formData.get('name');
  const business = formData.get('business');
  const service = formData.get('service');
  const budget = formData.get('budget');
  const message = formData.get('message');

  // Simulate network delay and sending email
  await new Promise((resolve) => setTimeout(resolve, 1500));

  console.log('Sending Quote Request to wamuritu@gmail.com: ', { name, business, service, budget, message });

  return { success: true, message: 'Thank you, we’ll contact you shortly.' };
}
