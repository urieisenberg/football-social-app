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
exports.logout = exports.login = exports.register = void 0;
const userModel_1 = require("../models/userModel");
const token_1 = require("../config/token");
const bcrypt_1 = require("../config/bcrypt");
const schemas_1 = require("../schemas");
const helpers_1 = require("../helpers");
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        (0, helpers_1.validateSchema)({ schema: schemas_1.registerSchema, req, res });
        const { username, email, password, team } = req.body;
        const userEmailExists = yield userModel_1.User.findOne({ email });
        if (userEmailExists) {
            return res.status(400).send('Email already exists');
        }
        const usernameExists = yield userModel_1.User.findOne({ username });
        if (usernameExists) {
            return res.status(400).send('Username already exists');
        }
        const hashedPassword = yield (0, bcrypt_1.hashPassword)(password);
        const user = new userModel_1.User({
            username,
            email,
            password: hashedPassword,
            team,
        });
        if (user) {
            res.status(201).json({
                _id: user._id,
                username: user.username,
                email: user.email,
                team: user.team,
                token: (0, token_1.generateToken)(user._id),
                following: user.following,
                followers: user.followers,
                profilePicture: user.team.logo,
                favFixtures: user.favFixtures,
            });
            yield user.save();
        }
        else {
            res.status(400).send('Oops! Something went wrong');
        }
    }
    catch (error) {
        (0, helpers_1.handleErrors)(res, error);
    }
});
exports.register = register;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        (0, helpers_1.validateSchema)({ schema: schemas_1.loginSchema, req, res });
        const { email, password } = req.body;
        const user = yield userModel_1.User.findOne({ email });
        if (user && (yield (0, bcrypt_1.comparePassword)(password, user.password))) {
            res.status(200).json({
                _id: user._id,
                username: user.username,
                email: user.email,
                team: user.team,
                token: (0, token_1.generateToken)(user._id),
                following: user.following,
                followers: user.followers,
                profilePicture: user.team.logo,
                favFixtures: user.favFixtures,
            });
        }
        else {
            res.status(401).send('Email or Password is incorrect');
        }
    }
    catch (error) {
        (0, helpers_1.handleErrors)(res, error);
    }
});
exports.login = login;
const logout = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.json({ message: 'Logout' });
    }
    catch (error) {
        (0, helpers_1.handleErrors)(res, error);
    }
});
exports.logout = logout;
