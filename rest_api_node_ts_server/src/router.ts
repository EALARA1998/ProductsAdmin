import { Router } from "express";
import { createProduct, deleteProduct, getProduct, getProductById, updateAvailability, updateProduct } from "./handlers/products";
import { body, param } from "express-validator"
import { handleInputErrors } from "./middleware";

const router = Router()

//Routing
router.get("/", getProduct)
router.get("/:id",
  param("id").isInt().withMessage("Id no valido."),
  handleInputErrors,
  getProductById
)
router.post("/", 
  body("name")
    .notEmpty().withMessage("El nombre de Producto no puede ir vacio."),
  body("price")
    .isNumeric().withMessage("Valor no valido.")
    .notEmpty().withMessage("El precio de Producto no puede ir vacio.")
    .custom( value => value > 0 ).withMessage("Precio no valido."),
  handleInputErrors,
  createProduct
)
router.put("/:id", 
  param("id").isInt().withMessage("Id no valido."),
  body("name")
    .notEmpty().withMessage("El nombre de Producto no puede ir vacio."),
  body("price")
    .isNumeric().withMessage("Valor no valido.")
    .notEmpty().withMessage("El precio de Producto no puede ir vacio.")
    .custom( value => value > 0 ).withMessage("Precio no valido."),
  body("availability")
    .isBoolean().withMessage("Valor para disponibilidad no valido."),
  handleInputErrors,
  updateProduct
)

router.patch("/:id", 
  param("id").isInt().withMessage("Id no valido."),
  handleInputErrors,
  updateAvailability
)

router.delete("/:id", 
  param("id").isInt().withMessage("Id no valido."),
  handleInputErrors,
  deleteProduct
)

export default router