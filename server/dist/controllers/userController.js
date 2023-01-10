"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFavFixtures = exports.deleteFavFixture = exports.saveFavFixtures = exports.getFollowing = exports.getFollowers = exports.unfollowUser = exports.followUser = exports.updateUser = exports.deleteUser = exports.getUser = void 0;
const models_1 = require("../models");
const schemas_1 = require("../schemas");
const helpers_1 = require("../helpers");
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield models_1.User.findOne({ username: req.params.username }).select('-password');
        if (!user)
            return res.status(404).send('User not found');
        res.status(200).json(user);
    }
    catch (error) {
        (0, helpers_1.handleErrors)(res, error);
    }
});
exports.getUser = getUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = req.user;
        yield user.remove();
        res.status(200).send('User deleted');
    }
    catch (error) {
        (0, helpers_1.handleErrors)(res, error);
    }
});
exports.deleteUser = deleteUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = req.user;
        (0, helpers_1.validateSchema)({ schema: schemas_1.userUpdateSchema, req, res });
        const { username, email, password } = req.body;
        if (username)
            user.username = username;
        if (email)
            user.email = email;
        if (password)
            user.password = password;
        yield user.save();
        res.status(200).json(user);
    }
    catch (error) {
        (0, helpers_1.handleErrors)(res, error);
    }
});
exports.updateUser = updateUser;
const followUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (req.user.id === req.params.id)
            return res.status(400).send('You cannot follow yourself');
        const currentUser = yield (0, helpers_1.findUser)(req.user.id);
        const userToFollow = yield (0, helpers_1.findUser)(req.params.id);
        if (currentUser.following.includes(req.params.id))
            return res.status(400).send('You already follow this user');
        yield models_1.User.findOneAndUpdate({ _id: currentUser._id }, { $push: { following: req.params.id } });
        yield models_1.User.findOneAndUpdate({ _id: userToFollow._id }, { $push: { followers: req.user.id } });
        res.status(200).json(userToFollow.following);
    }
    catch (error) {
        (0, helpers_1.handleErrors)(res, error);
    }
});
exports.followUser = followUser;
const unfollowUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (req.user.id === req.params.id)
            return res.status(400).send('You cannot unfollow yourself');
        const currentUser = yield (0, helpers_1.findUser)(req.user.id);
        const userToUnfollow = yield (0, helpers_1.findUser)(req.params.id);
        if (!currentUser.following.includes(req.params.id))
            return res.status(400).send('You do not follow this user');
        yield models_1.User.findOneAndUpdate({ _id: currentUser._id }, { $pull: { following: req.params.id } });
        yield models_1.User.findOneAndUpdate({ _id: userToUnfollow._id }, { $pull: { followers: req.user.id } });
        res.status(200).json(userToUnfollow.following);
    }
    catch (error) {
        (0, helpers_1.handleErrors)(res, error);
    }
});
exports.unfollowUser = unfollowUser;
const getFollowers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield (0, helpers_1.findUser)(req.params.id);
        const followers = yield Promise.all(user.followers.map((follower) => {
            return (0, helpers_1.findUser)(follower);
        }));
        let followersList = [];
        followers.push(followersList);
        res.status(200).json(followers);
    }
    catch (error) {
        (0, helpers_1.handleErrors)(res, error);
    }
});
exports.getFollowers = getFollowers;
const getFollowing = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield (0, helpers_1.findUser)(req.params.id);
        const following = yield Promise.all(user.following.map((follow) => {
            return (0, helpers_1.findUser)(follow);
        }));
        let followingList = [];
        following.push(followingList);
        res.status(200).json(following);
    }
    catch (error) {
        (0, helpers_1.handleErrors)(res, error);
    }
});
exports.getFollowing = getFollowing;
const saveFavFixtures = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield (0, helpers_1.findUser)(req.params.id);
        if (user.favFixtures.some((f) => (f === null || f === void 0 ? void 0 : f.id) === req.body.id)) {
            return res.status(400).send('You already have this fixture saved');
        }
        user.favFixtures.push(req.body);
        yield user.save();
        res.status(200).json(user.favFixtures);
    }
    catch (error) {
        (0, helpers_1.handleErrors)(res, error);
    }
});
exports.saveFavFixtures = saveFavFixtures;
const deleteFavFixture = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield (0, helpers_1.findUser)(req.params.id);
        if (!user.favFixtures.some((f) => { var _a; return (f === null || f === void 0 ? void 0 : f.id) === ((_a = req.body) === null || _a === void 0 ? void 0 : _a.id); })) {
            return res.status(400).send('You do not have this fixture saved');
        }
        user.favFixtures = user.favFixtures.filter((f) => { var _a; return (f === null || f === void 0 ? void 0 : f.id) !== ((_a = req.body) === null || _a === void 0 ? void 0 : _a.id); });
        yield user.save();
        res.status(200).json(user.favFixtures);
    }
    catch (error) {
        (0, helpers_1.handleErrors)(res, error);
    }
});
exports.deleteFavFixture = deleteFavFixture;
const getFavFixtures = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield (0, helpers_1.findUser)(req.params.id);
        res.status(200).json(user.favFixtures);
    }
    catch (error) {
        (0, helpers_1.handleErrors)(res, error);
    }
});
exports.getFavFixtures = getFavFixtures;
// const followUser = async (req: Request, res: Response) => {
//   try {
//     if (req.user.id === req.params.id)
//       return res.status(400).send('You cannot follow yourself');
//     const userToFollow = await User.findById(req.params.id);
//     const currentUser = await User.findById(req.user.id);
//     if (!currentUser || !userToFollow)
//       return res.status(404).send('User not found');
//     if (currentUser.following.includes(req.params.id))
//       return res.status(400).send('You already follow this user');
//     currentUser.following.push(req.params.id);
//     userToFollow.followers.push(req.user.id);
//     await currentUser.save();
//     await userToFollow.save();
//     res.status(200).json(req.params.id);
//   } catch (error: any) {
//     res.status(500).send('Something went wrong');
//   }
// };
// const unfollowUser = async (req: Request, res: Response) => {
//   try {
//     if (req.user.id === req.params.id)
//       return res.status(400).send('You cannot unfollow yourself');
//     const userToUnfollow = await User.findById(req.params.id);
//     const currentUser = await User.findById(req.user.id);
//     if (!currentUser || !userToUnfollow)
//       return res.status(404).send('User not found');
//     if (!currentUser.following.includes(req.params.id))
//       return res.status(400).send('You do not follow this user');
//     currentUser.following = currentUser.following.filter(
//       (id) => id !== req.params.id
//     );
//     userToUnfollow.followers = userToUnfollow.followers.filter(
//       (id) => id !== req.user.id
//     );
//     await currentUser.save();
//     await userToUnfollow.save();
//     res.status(200).json(req.params.id);
//   } catch (error: any) {
//     res.status(500).send('Something went wrong');
//   }
// };
