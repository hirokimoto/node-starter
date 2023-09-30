import express, { Express } from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import fspath from 'path';
import dotenv from 'dotenv';
import passport from 'passport';
import session from 'express-session';
import routes from './routes';
import './utils/passport';

const app: Express = express();
dotenv.config({ path: fspath.resolve(__dirname, "./.env") });

app.use(
  session({
    secret: "keyboard cat",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.set("views", __dirname + "/views");
app.use(express.static(__dirname + "/assets"));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

routes(app);

app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";
  res.status(500).json({
    message: err.message,
  });
});

export default app;
