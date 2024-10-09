"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const todoSchma = new mongoose_1.default.Schema({
    titel: {
        type: String,
        required: [true, "giv my titel"],
    },
    body: {
        type: String,
        required: [true, "you need tall what are you doing"],
    },
});
const userSchma = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: [true, "user name is require"],
    },
    password: {
        type: String,
        required: [true, "worning password"],
    },
    todos: {
        type: [todoSchma],
    },
});
const UserNodel = mongoose_1.default.model("user", userSchma);
exports.default = UserNodel;
