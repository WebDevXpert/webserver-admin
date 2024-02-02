import mongoose from 'mongoose';

const onboardFormSchema = new mongoose.Schema(
    {
        buNumber: { type: String, required: true, unique: true, match: /^BU\d{2}[A-Z]?$/ },
        billType: { type: String, required: true },
        accountNumber: {
            type: String,
            required: true,
            validate: {
                validator: function (value) {
                    return /^[\d\-]+$/.test(value);
                },
                message: 'Account Number should only contain digits and hyphens',
            },
        },
        grid: { type: String, required: true },
    },
    { timestamps: true }
);

const OnboardFormModel = mongoose.models.onboardForm || mongoose.model('onboardForm', onboardFormSchema);

export default OnboardFormModel;
