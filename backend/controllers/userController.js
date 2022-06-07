const User = require("../models/User");

exports.enterName = async (req, res) => {
  try {
    let { name } = req.body;

    let user = await User.findOne({ name: name });
    console.log(Boolean(user));
    if (user) {
      if (new Date().getTime() <= user.expiryDate && user.count === 2) {
        user.status = false;
        await user.save({ validateBeforeSave: false });
      } else if (new Date().getTime() > user.expiryDate) {
        user.expiryDate += 24 * 60 * 60 * 1000;
        user.count = 1;
        await user.save({ validateBeforeSave: false });
      } else if (new Date().getTime() < user.expiryDate && user.count < 2) {
        user.count = 2;
        await user.save({ validateBeforeSave: false });
      }
    }

    if (!user) {
      user = await User.create({ name, count: 1 });
    }
    res.status(200).json({
      user,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.getUser = async (req, res) => {
  const user = await User.find({ name: req.params.name });
  res.status(200).json({
    user,
  });
};
exports.submitAnswer = async (req, res) => {
  try {
    const name = req.params.name;
    const user = await User.findOne({ name });
    user.count += 1;
    await user.save({ validateBeforeSave: false });
    res.status(200).json({
      user,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
