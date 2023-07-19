const { PORT, BASE_URL } = process.env;

const generateVerifyEmailHtml = verificationCode =>
	`<a target="_blank" href="${BASE_URL}${PORT}/api/users/verify/${verificationCode}">Click verify email</a>`;

module.exports = generateVerifyEmailHtml;