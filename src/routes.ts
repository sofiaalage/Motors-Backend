import { Router } from "express";

const routes = Router();

import { vehicleCreateController } from "./controllers/vehicle/vehicleCreate.controller";
import vehicleDeleteController from "./controllers/vehicle/vehicleDelete.controller";
import { vehicleListController } from "./controllers/vehicle/vehicleList.controller";
import { vehicleUpdateController } from "./controllers/vehicle/vehicleUpdate.controller";

routes.post("/vehicles", vehicleCreateController);
routes.get("/vehicles", vehicleListController);
routes.patch("/vehicles", vehicleUpdateController);
routes.patch("/vehicles", vehicleDeleteController);

export default routes;