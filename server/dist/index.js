"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
require("colors");
const connectDB_1 = require("./config/connectDB");
const routes_1 = require("./routes");
const app = (0, express_1.default)();
const port = process.env.PORT || 4747;
dotenv_1.default.config();
(0, connectDB_1.connectDB)();
const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200,
    credentials: true,
    accessControlAllowOrigin: '*',
};
app.use((0, morgan_1.default)(':method :url :status :response-time ms'.bgWhite));
app.use((0, cors_1.default)(corsOptions));
app.use(express_1.default.json());
app.use('/api/auth', routes_1.authRoutes);
app.use('/api/tickets', routes_1.ticketRoutes);
app.use('/api/posts', routes_1.postRoutes);
app.use('/api/users', routes_1.userRoutes);
app.get('*', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '../client/build/index.html'));
});
app.listen(port, () => {
    console.log(`~~ Server running on port ${port} ~~`.green.bold);
});
