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
exports.validateUpdate = void 0;
const models_1 = require("../models");
const validateUpdate = ({ req, res, Model, id, }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const document = yield Model.findById(id);
        if (!document)
            return res.status(404).send(`${document} not found}`);
        if (document instanceof models_1.Comment ||
            document instanceof models_1.Note ||
            document instanceof models_1.Ticket) {
            if ((document === null || document === void 0 ? void 0 : document.user.toString()) !== req.user.id)
                return res.status(401).send('Not authorized');
        }
    }
    catch (error) {
        res.status(500).send('Something went wrong');
    }
});
exports.validateUpdate = validateUpdate;
