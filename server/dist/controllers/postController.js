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
exports.likePost = exports.searchUserPosts = exports.searchPosts = exports.getLikedPosts = exports.getUserPosts = exports.getTeamPosts = exports.getPosts = exports.deletePost = exports.updatePost = exports.createPost = void 0;
const models_1 = require("../models");
const postSchema_1 = require("../schemas/postSchema");
const helpers_1 = require("../helpers");
const createPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        (0, helpers_1.validateSchema)({ schema: postSchema_1.postSchema, req, res });
        const user = req.user;
        const post = new models_1.Post({
            user: req.user.id,
            type: req.body.type,
            text: req.body.text,
            pic: user.team.logo,
            username: user.username,
            team: user.team.name,
            comments: [],
            likes: [],
        });
        if (post)
            yield post.save();
        res.status(200).json(post);
    }
    catch (error) {
        (0, helpers_1.handleErrors)(res, error);
    }
});
exports.createPost = createPost;
const updatePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        (0, helpers_1.validateSchema)({ schema: postSchema_1.postSchema, req, res });
        (0, helpers_1.validateUpdate)({
            req,
            res,
            Model: models_1.Post,
            id: req.params.id,
        });
        const updatedPost = yield models_1.Post.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        if (updatedPost)
            res.status(200).json(updatedPost);
    }
    catch (error) {
        (0, helpers_1.handleErrors)(res, error);
    }
});
exports.updatePost = updatePost;
const deletePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        (0, helpers_1.validateUpdate)({
            req,
            res,
            Model: models_1.Post,
            id: req.params.id,
        });
        yield models_1.Post.findByIdAndDelete(req.params.id);
        res.status(200).send('Post removed');
    }
    catch (error) {
        (0, helpers_1.handleErrors)(res, error);
    }
});
exports.deletePost = deletePost;
const getPosts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const posts = yield models_1.Post.find({
            type: 'feed',
        }).sort({ date: -1 });
        if (posts)
            res.status(200).json(posts);
    }
    catch (error) {
        (0, helpers_1.handleErrors)(res, error);
    }
});
exports.getPosts = getPosts;
const getTeamPosts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { teamname } = req.params;
        const posts = yield models_1.Post.find({
            type: 'team',
            team: teamname,
        }).sort({ createdAt: -1 });
        if (posts)
            res.status(200).json(posts);
        else
            res.status(404).send(`No posts found for ${req.user.team.name}`);
    }
    catch (error) {
        (0, helpers_1.handleErrors)(res, error);
    }
});
exports.getTeamPosts = getTeamPosts;
const getUserPosts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield models_1.User.findOne({ username: req.params.username });
        if (!user)
            return res.status(404).send('User not found');
        const posts = yield models_1.Post.find({
            type: 'feed',
            username: user === null || user === void 0 ? void 0 : user.username,
        }).sort({ createdAt: -1 });
        if (posts)
            res.status(200).json(posts);
        else
            res.status(404).send(`No posts found for ${user === null || user === void 0 ? void 0 : user.username}`);
    }
    catch (error) {
        (0, helpers_1.handleErrors)(res, error);
    }
});
exports.getUserPosts = getUserPosts;
const getLikedPosts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield models_1.User.findOne({ username: req.params.username });
        if (!user)
            return res.status(404).send('User not found');
        const posts = yield models_1.Post.find({
            type: 'feed',
            likes: user.id,
        }).sort({ createdAt: -1 });
        if (posts)
            res.status(200).json(posts);
        else
            res.status(404).send(`No liked posts found for ${user.username}`);
    }
    catch (error) {
        (0, helpers_1.handleErrors)(res, error);
    }
});
exports.getLikedPosts = getLikedPosts;
const searchPosts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { searchTerm } = req.params;
        const posts = yield models_1.Post.find({
            type: 'feed',
            text: { $regex: searchTerm, $options: 'i' },
        })
            .sort({ createdAt: -1 })
            .exec();
        if (posts)
            res.status(200).json(posts);
        else
            res.status(404).send(`No posts found for ${searchTerm}`);
    }
    catch (error) {
        (0, helpers_1.handleErrors)(res, error);
    }
});
exports.searchPosts = searchPosts;
const searchUserPosts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield models_1.User.findOne({ username: req.params.username });
        if (!user)
            return res.status(404).send('User not found');
        const { searchTerm } = req.params;
        const posts = yield models_1.Post.find({
            type: 'feed',
            username: user.username,
            text: { $regex: searchTerm, $options: 'i' },
        })
            .sort({ createdAt: -1 })
            .exec();
        if (posts)
            res.status(200).json(posts);
        else
            res.status(404).send(`No posts found for ${searchTerm}`);
    }
    catch (error) {
        (0, helpers_1.handleErrors)(res, error);
    }
});
exports.searchUserPosts = searchUserPosts;
const likePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const post = yield (0, helpers_1.findPost)(req.params.id);
        const likes = post.likes.findIndex((id) => id === req.user.id);
        if (likes === -1) {
            post.likes.push(req.user.id);
        }
        else {
            post.likes = post.likes.filter((id) => id !== req.user.id);
        }
        const updatedPost = yield models_1.Post.findByIdAndUpdate(req.params.id, post, {
            new: true,
            timestamps: false,
        });
        if (updatedPost)
            res.status(200).json(updatedPost);
        else
            res.status(404).send('Something went wrong');
    }
    catch (error) {
        (0, helpers_1.handleErrors)(res, error);
    }
});
exports.likePost = likePost;
