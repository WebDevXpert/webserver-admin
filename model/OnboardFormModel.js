import mongoose from 'mongoose';

const onboardFormSchema = new mongoose.Schema(
    {
        buNumber: { type: String, required: true, unique: true },
        billType: { type: String, required: true },
        accountNumber: {
            type: Number,
            required: true,
            validate: {
                validator: function (value) {
                    return /^\d{1,11}$/.test(value);
                },
                message: 'Account Number should be 11 digits',
            },
        },
        grid: { type: String, required: true },
    },
    { timestamps: true }
);

const OnboardFormModel =
    mongoose.models.onboardForm || mongoose.model('onboardForm', onboardFormSchema);

export default OnboardFormModel;