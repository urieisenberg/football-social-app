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
exports.deleteComment = exports.updateComment = exports.createComment = void 0;
const models_1 = require("../models");
const schemas_1 = require("../schemas");
const helpers_1 = require("../helpers");
const createComment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = req.user;
        const post = yield (0, helpers_1.findPost)(req.params.postId);
        (0, helpers_1.validateSchema)({ schema: schemas_1.commentSchema, req, res });
        const newComment = new models_1.Comment({
            user: req.user.id,
            post: req.params.postId,
            comment: req.body.comment,
            pic: user.team.logo,
            username: user.username,
        });
        if (newComment)
            post.comments.push(newComment);
        yield post.save({
            timestamps: false,
        });
        yield newComment.save();
        res.status(200).json(newComment);
    }
    catch (error) {
        (0, helpers_1.handleErrors)(res, error);
    }
});
exports.createComment = createComment;
const updateComment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const comment = yield (0, helpers_1.findComment)(req.params.commentId);
        (0, helpers_1.validateUpdate)({
            req,
            res,
            Model: models_1.Comment,
            id: req.params.commentId,
        });
        (0, helpers_1.validateSchema)({ schema: schemas_1.commentSchema, req, res });
        comment.comment = req.body.updatedComment;
        if (comment)
            res.status(200).json(comment);
        yield comment.save();
    }
    catch (error) {
        (0, helpers_1.handleErrors)(res, error);
    }
});
exports.updateComment = updateComment;
const deleteComment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const post = yield (0, helpers_1.findPost)(req.params.postId);
        (0, helpers_1.validateUpdate)({
            req,
            res,
            Model: models_1.Comment,
            id: req.params.commentId,
        });
        yield models_1.Comment.findByIdAndDelete(req.params.commentId);
        post.comments = post.comments.filter((comment) => comment._id.toString() !== req.params.commentId);
        yield post.save({
            timestamps: false,
        });
        res.status(200).json({ message: 'Comment deleted' });
    }
    catch (error) {
        (0, helpers_1.handleErrors)(res, error);
    }
});
exports.deleteComment = deleteComment;
