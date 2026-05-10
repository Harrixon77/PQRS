import Router from "express";
import { CreatePqrsController  } from "./pqrs.controller.js";
import { GetAllPqrsController } from "./pqrs.controller.js";
import { GetPqrsByIdController } from "./pqrs.controller.js";
import { UpdatePqrsController } from "./pqrs.controller.js";
import { DisablePqrsController } from "./pqrs.controller.js";

const router = Router ();

router.post ("/", CreatePqrsController);
router.get("/", GetAllPqrsController);
router.get("/:id", GetPqrsByIdController);
router.patch("/:id", UpdatePqrsController);
router.delete("/:id", DisablePqrsController);

export default router;
