import { uploadFile } from "../config/storage.js";
import Profile from "../models/profileModel.js";

export const createProfile = async (req, res) => {
  try {
    const { userName, bio, age, gender } = req.body;
    const profilePicture = req.file;
    const userId = req.user.id;

    const existingProfile = await Profile.findOne({ user: userId });
    if (existingProfile) {
      return res.status(400).json({ message: 'Profile already exists' });
    }

    const uploadedProfilePicture =  await uploadFile(profilePicture.buffer);

    const profile = new Profile({
      user: userId,
      userName,
      bio,
      profilePicture,
      age,
      gender,
    });

    await profile.save();
    res.status(201).json({ profile });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getProfile = async (req, res) => {
  try {
    const userId = req.user.id;
    const profile = await Profile.findOne({ user: userId });

    if (!profile) {
      return res.status(404).json({ message: 'Profile not found' });
    }

    res.status(200).json({ profile });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateProfile = async (req, res) => {
  try {
    const userId = req.user.id;
    const { userName, bio, age, gender } = req.body;
    const profilePicture = req.file;

    const updatedProfile = await Profile.findOneAndUpdate(
      { user: userId },
      { userName, bio, profilePicture, age, gender },
      { new: true, runValidators: true }
    );
    if (!updatedProfile) {
      return res.status(404).json({ message: 'Profile not found' });
    }
    res.status(200).json({ profile: updatedProfile });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
