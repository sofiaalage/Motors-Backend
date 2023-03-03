import { Router } from "express";
import { authTokenMiddleware } from '../middlewares/authToken.middleware';

import { listUsersController } from './../controllers/user/userList.controller';
import { userCreateController } from './../controllers/user/userCreate.controller';
import { userUpdateController } from '../controllers/user/userUpdate.controller';
import { userDeleteController } from '../controllers/user/userDelete.controller';
import { userListProfileController } from "../controllers/user/userListProfile.controller";

const userRoutes = Router();

userRoutes.post("",userCreateController );
userRoutes.get("", authTokenMiddleware, listUsersController );
userRoutes.get("/me", authTokenMiddleware, userListProfileController );
userRoutes.patch("/:id", authTokenMiddleware, userUpdateController );
userRoutes.delete("/:id", authTokenMiddleware, userDeleteController );

export default userRoutes;