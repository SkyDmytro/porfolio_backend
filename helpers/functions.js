export const emailHtml = (name, email, message) => {
  return `
  <h1>Message From ${name}</h1>
  <h2><b>Email:</b> ${email}</h2>
  <p><b>Message:</b> ${message}</p>
  `
}