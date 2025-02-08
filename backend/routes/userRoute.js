import express from 'express';
import { User } from '../models/userModel.js';

import { userRegister, userLogin, userUpdate, check } from '../controllers/user.js';

const router = express.Router();

router.post("/login", userLogin);
router.post("/register", userRegister);
router.post("/update", userUpdate);
router.get("/test", check);

router.get("/resume/:resumeId", async (req, res) => {
    try {
        const user = await User.findOne({ resumeId: req.params.resumeId });
        if (!user) return res.status(404).json({ message: "Resume not found" });

        res.json({
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            mobileNumber: user.mobileNumber,
            portfolio: user.portfolio,
            carrierObjective: user.carrierObjective,
            education: user.education,
            skills: user.skills,
            experience: user.experience,
            projects: user.projects,
        });
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
});

export default router;