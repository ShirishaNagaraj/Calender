// backend/models/Company.js
const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  linkedin: { type: String },
  email: { type: String, required: true },
  phone: { type: String },
  comments: { type: String },
  communicationPeriodicity: { type: Number, default: 14 }, // Default: every 2 weeks
}, { timestamps: true });

const Company = mongoose.model('Company', companySchema);

module.exports = Company;
