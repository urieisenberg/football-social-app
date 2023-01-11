"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleErrors = void 0;
const handleErrors = (res, error) => {
    res.status(500).send('Something went wrong');
};
exports.handleErrors = handleErrors;
