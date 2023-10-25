const express = require('express');
const app = express();
const cors = require('cors');
const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const CLIENT_ID = '369180216057-qjd7mqn7ehp9todgun259fv7kvjr3csu.apps.googleusercontent.com';
const CLIENT_SECRET = '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';
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
const REFRESH_TOKEN = '1//04zlwpQq9zc0bCgYIARAAGAQSNwF-L9Ir2lSz5PQYw18_jxBqdjs77bmcKWyiR2jxzQrIeP2I09iVAYyjHslh6KNW-EUhz66uYio';

app.use('/api', cors());
const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN })

async function sendMail(to){
    try{
        const accessToken = await oAuth2Client.getAccessToken()

        const transport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: 'tbalog426@gmail.com',
                clientId: CLIENT_ID,
                clientSecret: CLIENT_SECRET,
                refreshToken: REFRESH_TOKEN,
                accessToken: accessToken
            }
        })

        const mailOptions = {
            from: 'FRONTDOOR <tbalog426@gmail.com>',
            to: to,            
            subject: 'INVITE FOR A CHAT',
            text: 'Hello, Kindly note that your profile has been received and you have been scheduled for a meeting with your client, Please be available. A link would be sent to you shortly, Regards.',
        };

        const result = await transport.sendMail(mailOptions)
        return result
    }
    catch(error){
        return error
    }
}

app.use(express.json());

app.post('/api/send-email', async (req, res) => {
    try {
      const { to } = req.body; 
  
      if (!to) {
        return res.status(400).json({ message: 'Email recipient not provided' });
      }
  
      const result = await sendMail(to); 
  
      return res.json({ message: 'Email sent successfully', result });
    } catch (error) {
      return res.status(500).json({ message: 'Email sending failed', error: error.message });
    }
  });

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Node.js server is running on port ${PORT}`);
});
