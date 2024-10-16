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
exports.getUser = exports.register = void 0;
const serviceUser_1 = require("../services/serviceUser");
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const responsDTO = yield (0, serviceUser_1.createUser)(req.body);
        res.status(responsDTO.status).json(responsDTO);
    }
    catch (err) {
        console.log(err);
        res.status(500);
    }
});
exports.register = register;
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const responsDTO = yield (0, serviceUser_1.getAllUsers)();
        res.status(responsDTO.status).json(responsDTO);
    }
    catch (err) {
        console.log(err);
        res.status(500);
    }
});
exports.getUser = getUser;
