# EmailJS Setup Guide for Your Portfolio Contact Form

This guide will help you set up EmailJS to receive emails from your portfolio contact form.

## Step 1: Create an EmailJS Account

1. Go to [EmailJS website](https://www.emailjs.com/) and sign up for a free account
2. The free tier allows 200 emails per month, which should be sufficient for a portfolio site

## Step 2: Connect Your Email Service

1. After signing in, go to the "Email Services" tab
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps to connect your email account
5. Give your service a name (e.g., "Portfolio Contact")
6. Note down the **Service ID** for later use

## Step 3: Create an Email Template

1. Go to the "Email Templates" tab
2. Click "Create New Template"
3. Design your email template using the visual editor
4. Make sure to include template variables that match your form field names:
   - `{{name}}` - For the sender's name
   - `{{email}}` - For the sender's email
   - `{{phone}}` - For the sender's phone number
   - `{{message}}` - For the sender's message
5. Save your template and note down the **Template ID**

## Step 4: Get Your Public Key

1. Go to the "Account" tab
2. Find your **Public Key** in the API keys section

## Step 5: Update Your Contact Component

1. Open `src/components/Contact.jsx`
2. Replace the placeholder values with your actual credentials:
   ```javascript
   const serviceId = 'YOUR_SERVICE_ID'  // Replace with your Service ID
   const templateId = 'YOUR_TEMPLATE_ID'  // Replace with your Template ID
   const publicKey = 'YOUR_PUBLIC_KEY'  // Replace with your Public Key
   ```

## Step 6: Test Your Form

1. Run your application
2. Fill out the contact form and submit it
3. Check your email to see if you received the test message
4. Check the browser console for any errors if the email wasn't sent

## Security Note

Your EmailJS Public Key is meant to be used in client-side code, so it's safe to include it in your React component. However, never include any private keys or sensitive information in your frontend code.

## Additional Customization

- You can customize the success and error messages in the Contact component
- You can add additional fields to your form if needed (just make sure to update your EmailJS template)
- Consider adding rate limiting or CAPTCHA to prevent spam

For more information, visit the [EmailJS documentation](https://www.emailjs.com/docs/). 