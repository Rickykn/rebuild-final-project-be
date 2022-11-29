"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const port = 2000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.send("<h1>Rebuild final project</h1>");
});
app.get("/hi", (req, res) => {
    res.send("HIII!!!");
});
app.listen(port, () => {
    console.log("Listening in port", port);
});
