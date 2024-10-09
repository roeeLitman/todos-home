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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllUsers = exports.createUser = void 0;
const userModel_1 = __importDefault(require("../types/models/userModel"));
const createUser = (newUser) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { password, name } = newUser;
        //check if password and user not undfin
        if (!password || !name) {
            return {
                err: true,
                message: "pssword or name is empty",
                status: 400
            };
        }
        //creat class for user
        const user = new userModel_1.default();
        user.password = password;
        user.name = name;
        //insert user into db and returen new user
        const userCretede = yield user.save();
        if (!userCretede)
            throw new Error("user not save");
        //returen id
        return {
            err: false,
            data: userCretede.id,
            message: "user created and saved",
            status: 201
        };
    }
    catch (err) {
        console.log(err);
        throw err;
    }
});
exports.createUser = createUser;
const getAllUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //found all users
        const users = yield userModel_1.default.find({});
        //returen all users
        return {
            err: false,
            data: users,
            status: 200
        };
    }
    catch (err) {
        console.log(err);
        throw err;
    }
});
exports.getAllUsers = getAllUsers;
