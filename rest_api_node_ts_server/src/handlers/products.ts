import { Request, Response } from "express"
import Product from "../models/Product.model."

export const getProduct = async (req: Request, res: Response) => {
  try {
    const products = await Product.findAll({
      order: [
        ["id", "DESC"]
      ],
      // limit: 10,
      // attributes: { exclude: ["createdAt", "updatedAt", "availability"] }
    })
    res.json({data: products})
  } catch (error) {
    console.log(error)
  }
}
export const getProductById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const product = await Product.findByPk(id)
    
    if (!product) {
      return res.status(404).json({
        error: "Producto No Encontrado"
      })
    }

    res.json({ data: product })
  } catch (error) {
    console.log(error)
  }
}

export const createProduct = async (req: Request, res: Response)=>{
  //Validacion
  // await check("name")
    // .notEmpty().withMessage("El nombre de Producto no puede ir vacio.")
    // .run(req)
  // await check("price")
    // .isNumeric().withMessage("Valor no valido.")
    // .notEmpty().withMessage("El precio de Producto no puede ir vacio.")
    // .custom( value => value > 0 ).withMessage("Precio no valido.")
    // .run(req)
// 
  try {
    const product = new Product(req.body)
    const savedProduct = await product.save()
    
    // const product = await Product.create(req.body) // es: new Product y await product.save() en uno solo.
    // res.send(datos)
    res.json({data: savedProduct})
  } catch (error) {
    console.log(error)
  }

}

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const product = await Product.findByPk(id)
    
    if (!product) {
      return res.status(404).json({
        error: "Producto No Encontrado"
      })
    }

    //Actualizacion
    await product.update(req.body)
    
    res.json({ data: product })
  } catch (error) {
    console.log(error)
  }
}

export const updateAvailability = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const product = await Product.findByPk(id)
    
    if (!product) {
      return res.status(404).json({
        error: "Producto No Encontrado"
      })
    }

    //Actualizacion
    product.availability = !product.dataValues.availability
    await product.save()
    
    res.json({ data: product })
  } catch (error) {
    console.log(error)
  }
}

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const product = await Product.findByPk(id)
    
    if (!product) {
      return res.status(404).json({
        error: "Producto No Encontrado"
      })
    }

    //Eliminar
    await product.destroy()
    
    res.json({ data: "Producto Eliminado" })
  } catch (error) {
    console.log(error)
  }
}