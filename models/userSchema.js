const { Schema, model } = require("mongoose");
const { userSubscribeEnum } = require("../constants/userSubscribeEnum");
const { handleMongooseError } = require("../utils");
const Joi = require("joi");

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const userSchema = new Schema({
	password: {
		type: String,
		required: [true, 'Password is required'],
	},
	email: {
		type: String,
		match: emailRegex,
		// unique: true,
		required: [true, 'Email is required'],
		unique: true,
	},
	subscription: {
		type: String,
		enum: Object.values(userSubscribeEnum),
		default: userSubscribeEnum.STARTER
	},
	token: {
		type: String,
		default: null,
	},
	owner: {
		type: Schema.Types.ObjectId,
		ref: 'user',
	}
}, { versionKey: false, timestamps: true });

userSchema.post("save", handleMongooseError);

const validateUserData = Joi.object({
	password: Joi.string().min(6).required(),
	email: Joi.string().pattern(emailRegex).required(),
});

const schemas = {
	validateUserData,
}

const User = model("User", userSchema);

module.exports = {
	User,
	schemas,
};
