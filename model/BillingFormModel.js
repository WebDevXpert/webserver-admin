import mongoose from "mongoose";
const billingFormSchema = mongoose.Schema({
    accountNumber: { type: Number, required: true },
    billType: { type: String, required: true },
    serviceStartDate: { type: Date, required: true },
    serviceEndDate: { type: Date, required: true },
    billAmount: { type: Number, required: true },
    usageAmount: { type: Number, required: true },
    engineeringUnit: { type: String, required: true },
});

const billingFormModel = mongoose.models.billingForm || mongoose.model('billingForm', billingFormSchema);

export default billingFormModel;