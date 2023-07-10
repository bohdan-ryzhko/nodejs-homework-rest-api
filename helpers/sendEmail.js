const sgMail = require('@sendgrid/mail');
require("dotenv").config();

const { SENDGRID_API_KEY } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const sendEmail = async (dataEmail) => {
	await sgMail.send({ ...dataEmail, from: "m3meizumini@gmail.com" });
	return true;
}

module.exports = { sendEmail };