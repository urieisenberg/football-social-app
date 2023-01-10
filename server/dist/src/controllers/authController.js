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
exports.login = exports.register = void 0;
const userModel_1 = require("../models/userModel");
const token_1 = require("../config/token");
const bcrypt_1 = require("../config/bcrypt");
const validators_1 = require("../validators");
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, password, team } = req.body;
        const validated = validators_1.validateRegister.safeParse({
            name,
            email,
            password,
            team,
        });
        if (!validated.success) {
            return res.status(400).json({ message: validated.error.message });
        }
        const userEmailExists = yield userModel_1.User.findOne({ email });
        if (userEmailExists) {
            return res.status(400).json({ message: 'Email already exists' });
        }
        const usernameExists = yield userModel_1.User.findOne({ name });
        if (usernameExists) {
            return res.status(400).json({ message: 'Username already exists' });
        }
        const hashedPassword = yield (0, bcrypt_1.hashPassword)(password);
        const user = new userModel_1.User({
            name,
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
            });
            yield user.save();
        }
        else {
            res.status(400);
            throw new Error('Invalid user data');
        }
    }
    catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
});
exports.register = register;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const validated = validators_1.validateLogin.safeParse({ email, password });
        if (!validated.success) {
            return res.status(400).json({ message: validated.error.message });
        }
        const user = yield userModel_1.User.findOne({ email });
        if (user && (yield (0, bcrypt_1.comparePassword)(password, user.password))) {
            res.json({
                _id: user._id,
                username: user.username,
                email: user.email,
                team: user.team,
                token: (0, token_1.generateToken)(user._id),
            });
        }
    }
    catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
});
exports.login = login;
