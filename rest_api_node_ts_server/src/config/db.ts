import { Sequelize } from "sequelize-typescript"
import dotenv from "dotenv"

dotenv.config()

const db = new Sequelize(process.env.DATABASE_URL!, {
  models: [__dirname + "/../models/**/*.ts"]
})
// const db = new Sequelize("postgresql://rest_api_node_typescript_x2lw_user:d0Ql5evaQ1IASqTBdqlWoknmnGqQvwKM@dpg-d2p4pvur433s73csap60-a.oregon-postgres.render.com/rest_api_node_typescript_x2lw", {
//   dialectOptions: {
//     ssl: {
//       require: false
//     }
//   }
// })

export default db