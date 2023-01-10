"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authController_1 = require("../controllers/authController");
const router = (0, express_1.Router)();
router.route('/register').post(authController_1.register);
router.route('/login').post(authController_1.login);
exports.default = router;
