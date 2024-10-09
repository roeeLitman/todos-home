"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const usersRoute_1 = __importDefault(require("./routes/usersRoute"));
const todosRoute_1 = __importDefault(require("./routes/todosRoute"));
const PORT = (process.env.PORT || 1414);
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/user', usersRoute_1.default);
app.use('/user', todosRoute_1.default);
app.listen(PORT, () => console.log(`http://lochkost:${PORT}`));
