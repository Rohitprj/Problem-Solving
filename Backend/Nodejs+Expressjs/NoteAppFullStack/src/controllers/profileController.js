import Profile from "../models/profileModel.js";

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
    const { userName, bio, profilePicture, age, gender } = req.body;

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
