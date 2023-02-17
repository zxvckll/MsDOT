// Import express
import express from "express";


import {
  getSizeType,
  getSizeTypeById,
  createSizeType,
  updateSizeType,
  deleteSizeType,
} from "../controllers/SizeType.js";

import {
} from "../controllers/Role.js";

import { getAdmin, Register, Login, Logout,tes } from "../controllers/Admin.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import {antiCors} from "../middleware/AntiCors.js"
import { refreshToken } from "../controllers/RefreshToken.js";



import {
  getMedia,
  getMediaById,
  createMedia,
  updateMedia,
  deleteMedia,
} from "../controllers/Media.js";

import {
  getMediaType,
  getMediaTypeById,
  createMediaType,
  updateMediaType,
  deleteMediaType,
} from "../controllers/MediaType.js";

import {
  getMediaInterface,
  getMediaInterfaceById,
  createMediaInterface,
  updateMediaInterface,
  deleteMediaInterface,
  getMediaInterfaceFiltered,
} from "../controllers/MediaInterface.js";

import {
  getCaseName,
  getCaseNameById,
  createCaseName,
  updateCaseName,
  deleteCaseName,
} from "../controllers/CaseName.js";


import {
  getOperatingSistem,
  getOperatingSistemById,
  createOperatingSistem,
  updateOperatingSistem,
  deleteOperatingSistem,
} from "../controllers/OperatingSistem.js";

import {
  getDate,
  getDateById,
  createDate,
  updateDate,
  deleteDate,
} from "../controllers/Date.js";

import {
  getMerk,
  getMerkById,
  createMerk,
  updateMerk,
  FindMerk,
  deleteMerk,
} from "../controllers/Merk.js";

import {
  getCase,
  getCaseById,
  createCase,
  updateCase,
  deleteCase,
} from "../controllers/Case.js";

import {
  getStatus,
  getStatusById,
  createStatus,
  updateStatus,
  deleteStatus,
} from "../controllers/Status.js";

import {
  getCaseType,
  getCaseTypeById,
  createCaseType,
  updateCaseType,
  deleteCaseType,
} from "../controllers/CaseType.js";




import {
  getProgressType,
  getProgressTypeById,
  createProgressType,
  updateProgressType,
  deleteProgressType,
} from "../controllers/ProgressType.js";

import {
  getProgress,
  getProgressById,
  createProgress,
  updateProgress,
  getProgressFiltered,
  deleteProgress,
} from "../controllers/Progress.js";

import {
  getNota,
  getNotaById,
  createNota,
  updateNota,
  deleteNota,
} from "../controllers/Nota.js";

import {
  getUser,
  getUserById,
  createUser,
  getUserByEmail,
  updateUser,
  deleteUser,
} from "../controllers/User.js";

import {
  getReport
} from "../controllers/Report.js";

import {
  getCost,
  getCostById,
  createCost,
  updateCost,
  deleteCost,
} from "../controllers/Cost.js";

var corsOptions = {
  origin: 'http://localhost:5173',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}



// Init express router
const router = express.Router();

router.get('/admin', verifyToken, getAdmin);
router.post('/admin', Register);
router.post('/login',antiCors, Login);

router.post('/report/:id', getReport);

// router.get('/token', refreshToken);
// router.delete('/logout', Logout);
// router.post('/tes', tes);


router.get("/case", getCase);

router.get("/case/:id", verifyToken, getCaseById);

router.post("/case", verifyToken, createCase);

router.put("/case/:id", verifyToken, updateCase);

router.delete("/case/:id", verifyToken, deleteCase);


router.get("/merk", getMerk);

router.get("/merk/:id", verifyToken, getMerkById);

router.post("/merk", verifyToken, createMerk);

router.put("/merk/:id", verifyToken, updateMerk);

router.post("/find/merk", verifyToken, FindMerk);

router.delete("/merk/:id", verifyToken, deleteMerk);


router.get("/mediaType", getMediaType);

router.get("/mediaType/:id", verifyToken, getMediaTypeById);

router.post("/mediaType", createMediaType);

router.put("/mediaType/:id", verifyToken, updateMediaType);

router.delete("/mediaType/:id", verifyToken, deleteMediaType);


router.get("/media", getMedia);
router.get("/media/:id", verifyToken, getMediaById);
router.post("/media", verifyToken, createMedia);
router.put("/media/:id", verifyToken, updateMedia);
router.delete("/media/:id", verifyToken, deleteMedia);


router.get("/mediaInterface", getMediaInterface);
router.get("/mediaInterface/:id", verifyToken, getMediaInterfaceById);
router.post("/mediaInterface", verifyToken, createMediaInterface);
router.post("/mediaInterfaceFiltered", getMediaInterfaceFiltered);
router.put("/mediaInterface/:id", verifyToken, updateMediaInterface);
router.delete("/mediaInterface/:id", verifyToken, deleteMediaInterface);


router.get("/caseName", getCaseName);
router.get("/caseName/:id", verifyToken, getCaseNameById);
router.post("/caseName", verifyToken, createCaseName);
router.put("/caseName/:id", verifyToken, updateCaseName);
router.delete("/caseName/:id", verifyToken, deleteCaseName);

router.get("/operatingSistem", getOperatingSistem);
router.get("/operatingSistem/:id", verifyToken, getOperatingSistemById);
router.post("/operatingSistem", verifyToken, createOperatingSistem);
router.put("/operatingSistem/:id", verifyToken, updateOperatingSistem);
router.delete("/operatingSistem/:id", verifyToken, deleteOperatingSistem);

router.get("/date", getDate);
// router.get("/date/:id", verifyToken, getDateById);
router.post("/find/date/", verifyToken, getDateById);
router.post("/date", verifyToken, createDate);
router.put("/date/:id", verifyToken, updateDate);
router.delete("/date/:id", verifyToken, deleteDate);


router.get("/status", getStatus);
router.get("/status/:id", verifyToken, getStatusById);
router.post("/status", verifyToken, createStatus);
router.put("/status/:id", verifyToken, updateStatus);
router.delete("/status/:id", verifyToken, deleteStatus);


router.get("/caseType", getCaseType);
router.get("/caseType/:id", verifyToken, getCaseTypeById);
router.post("/caseType", verifyToken, createCaseType);
router.put("/caseType/:id", verifyToken, updateCaseType);
router.delete("/caseType/:id", verifyToken, deleteCaseType);


router.get("/sizeType", getSizeType);
router.get("/sizeType/:id", verifyToken, getSizeTypeById);
router.post("/sizeType", verifyToken, createSizeType);
router.put("/sizeType/:id", verifyToken, updateSizeType);
router.delete("/sizeType/:id", verifyToken, deleteSizeType);

// router.get("/role", getRole);
// router.get("/role/:id", verifyToken, getRoleById);
// router.post("/role", verifyToken, createRole);
// router.put("/role/:id", verifyToken, updateRole);
// router.delete("/role/:id", verifyToken, deleteRole);


router.get("/progressType", getProgressType);
router.get("/progressType/:id", verifyToken, getProgressTypeById);
router.post("/progressType", verifyToken, createProgressType);
router.put("/progressType/:id", verifyToken, updateProgressType);
router.delete("/progressType/:id", verifyToken, deleteProgressType);


router.get("/progress", getProgress);
router.get("/progress/:id", verifyToken, getProgressById);
router.post("/progress", verifyToken, createProgress);
router.post("/progressFiltered", getProgressFiltered);
router.put("/progress/:id", verifyToken, updateProgress);
router.delete("/progress/:id", verifyToken, deleteProgress);


//USER
router.get("/user", getUser);
router.get("/user/:id", verifyToken, getUserById);
router.post("/user", verifyToken, createUser);
router.post("/user/email", getUserByEmail);
router.put("/user/:id", verifyToken, updateUser);
router.delete("/user/:id", verifyToken, deleteUser);


router.get("/cost", getCost);
router.get("/cost/:id", verifyToken, getCostById);
router.post("/cost", verifyToken, createCost);
router.put("/cost/:id", verifyToken, updateCost);
router.delete("/cost/:id", verifyToken, deleteCost);



router.get("/nota", getNota);

router.get("/nota/:id", verifyToken, getNotaById);

router.post("/nota", verifyToken, createNota);

router.put("/nota/:id", verifyToken, updateNota);

router.delete("/nota/:id", verifyToken, deleteNota);

// export router
export default router;
