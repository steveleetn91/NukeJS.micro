import NukeJSRouter from "nukejs-router/dist/libs/NukeJSRouter";
import Router from "./routers/router.nuk";
const ModuleConfig = new NukeJSRouter();
ModuleConfig.import(Router.routers,Router.notFound);