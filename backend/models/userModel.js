import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        username: { type: String, required: true },
        password: { type: String, required: true },
        firstName: { type: String, default: "" },
        lastName: { type: String, default: "" },
        email: { type: String, default: "" },
        mobileNumber: { type: String, default: "" },
        portfolio: { type: String, default: "" },
        resume: { type: String, default: "" },
        address: { type: String, default: "" },
        carrierObjective: { type: String, default: "" },
        roles: { type: [String], default: [] },
        
        education: [
            {
                qualification: { type: String, required: true },
                institution: { type: String, required: true },
                percentage: { type: String, required: true },
                range: { type: String, required: true }
            }
        ],

        skills: { type: [String], default: [] },

        experience: [
            {
                company: { type: String, required: true },
                years: { type: String, required: true },
                place: { type: String, required: true },
                range: { type: String, required: true },
                description: { type: String, required: true }
            }
        ],
        
        projects: [
            {
                title: { type: String, required: true },
                image: { type: String, default: "" },
                description: { type: String, required: true },
                github: { type: String, default: "" },
                live: { type: String, default: "" },
                range: { type: String, required: true },
                category: { type: String, enum: ["web app", "Data Analysis and Visualization", "Others"], required: true }
            }
        ],
    },
    {
        timestamps: true,
    }
);

export const User = mongoose.model("User", userSchema);
