import mongoose from 'mongoose';

const onboardFormSchema = new mongoose.Schema({
    buNumber: { type: Number, required: true },
    billType: { type: String, required: true },
    accountNumber: { type: String, required: true },
});

const OnboardFormModel = mongoose.models.onboardForm || mongoose.model('onboardForm', onboardFormSchema);

export default OnboardFormModel;
