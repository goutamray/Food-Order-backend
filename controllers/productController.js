

import asyncHandler from "express-async-handler";
import Product from "../models/Product.js";
import { 
        fileDeleteFromCloud, 
        fileUploadToCloud } from "../utilis/cloudinary.js";
import { findPublicId } from "../helpers/helpers.js";

/**
 * @DESC  GET ALL PRODUCT
 * @METHOD GET
 * @ROUTE /api/v1/product
 * @ACCESS PUBLIC 
 * 
 */

