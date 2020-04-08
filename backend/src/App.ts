import "reflect-metadata";
import { createConnection } from "typeorm";
import * as bodyParser from "body-parser";
import { Request, Response } from "express";
import * as express from "express";
import { Routes } from "./routes";

createConnection()
  .then(async connection => {
    //Initializes express server
    const app = express();
    app.use(bodyParser.json());
    app.use((req, res, next) => {
      res.header("Access-Control-Allow-Origin", "*");

      // authorized headers for preflight requests
      // https://developer.mozilla.org/en-US/docs/Glossary/preflight_request
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
      );
      next();

      app.options("*", (req, res) => {
        // allowed XHR methods
        res.header(
          "Access-Control-Allow-Methods",
          "GET, PATCH, PUT, POST, DELETE, OPTIONS"
        );
        res.send();
      });
    });

    // register express routes from defined application routes
    Routes.forEach(route => {
      (app as any)[route.method](
        route.route,
        (req: Request, res: Response, next: Function) => {
          const result = new (route.controller as any)()[route.action](
            req,
            res,
            next
          );
          if (result instanceof Promise) {
            result.then(result =>
              result !== null && result !== undefined
                ? res.send(result)
                : undefined
            );
          } else if (result !== null && result !== undefined) {
            res.json(result);
          }
        }
      );
    });

    const port = process.env.PORT || 8080
    app.listen(port);

    console.log(`Server has started at port ${port}`);
  })
  .catch(error =>
    console.log(`An error has been encountered starting the server: ${error}`)
  );
