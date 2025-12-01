# EmailJS Setup Guide for Contact Form

This guide will help you set up EmailJS to enable email notifications for your contact form.

## Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (200 emails/month on free tier)
3. Verify your email address

## Step 2: Add Email Service

1. Go to [Email Services](https://dashboard.emailjs.com/admin)
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. **Copy your Service ID** (you'll need this later)

## Step 3: Create Email Templates

You need to create **two templates**:

### Template 1: User Confirmation Email

1. Go to [Email Templates](https://dashboard.emailjs.com/admin/template/list)
2. Click "Create New Template"
3. Name it: "User Confirmation"
4. Set up the template with these variables:
   - `{{to_name}}` - User's name
   - `{{to_email}}` - User's email
   - `{{subject}}` - Email subject
   - `{{message}}` - Confirmation message

   Example template:
   ```
   Subject: {{subject}}
   
   Hi {{to_name}},
   
   {{message}}
   
   Best regards,
   Priyanshu Bidhuri
   ```

5. **Copy the Template ID**

### Template 2: Owner Notification Email

1. Create another template named "Owner Notification"
2. Set up the template with these variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{subject}}` - Email subject
   - `{{message}}` - User's message
   - `{{reply_to}}` - Reply-to email

   Example template:
   ```
   Subject: {{subject}}
   
   You have a new message from your portfolio contact form:
   
   From: {{from_name}} ({{from_email}})
   Subject: {{subject}}
   
   Message:
   {{message}}
   
   Reply to: {{reply_to}}
   ```

3. **Copy the Template ID**

## Step 4: Get Your Public Key

1. Go to [Account > API Keys](https://dashboard.emailjs.com/admin/integration)
2. **Copy your Public Key**

## Step 5: Configure Your Contact Form

You have two options:

### Option A: Using Environment Variables (Recommended)

1. Create a `.env` file in your project root (if it doesn't exist)
2. Add the following variables:

```env
REACT_APP_EMAILJS_SERVICE_ID=your_service_id_here
REACT_APP_EMAILJS_TEMPLATE_USER=your_user_template_id_here
REACT_APP_EMAILJS_TEMPLATE_OWNER=your_owner_template_id_here
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key_here
REACT_APP_OWNER_EMAIL=your-email@example.com
```

3. Restart your development server after adding the `.env` file

### Option B: Direct Configuration

1. Open `src/components/Home/ContactForm.js`
2. Find the `EMAILJS_CONFIG` object (around line 20)
3. Replace the placeholder values:
   - `YOUR_SERVICE_ID` → Your Service ID
   - `YOUR_TEMPLATE_ID_TO_USER` → Your User Confirmation Template ID
   - `YOUR_TEMPLATE_ID_TO_OWNER` → Your Owner Notification Template ID
   - `YOUR_PUBLIC_KEY` → Your Public Key
   - `your-email@example.com` → Your email address

## Step 6: Test Your Contact Form

1. Start your development server: `npm start`
2. Navigate to the contact form on your portfolio
3. Fill out and submit the form
4. Check:
   - You should receive a confirmation email
   - You (the owner) should receive a notification email

## Troubleshooting

- **"Email service is not configured"**: Make sure you've set all the EmailJS credentials
- **Emails not sending**: Check the browser console for errors and verify your EmailJS credentials
- **Template variables not working**: Make sure the variable names in your EmailJS templates match exactly (case-sensitive)
- **Rate limit errors**: Free tier allows 200 emails/month. Consider upgrading if you need more

## Security Note

- Never commit your `.env` file to version control
- The `.env` file should already be in your `.gitignore`
- Public Key is safe to expose in frontend code (it's designed for client-side use)

## Need Help?

- EmailJS Documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- EmailJS Dashboard: [https://dashboard.emailjs.com/](https://dashboard.emailjs.com/)

