const ingredient = require("./ingredient");
const admin = require("./admin");
const category = require("./category");
const healthIssue = require("./healthIssue");
const member = require("./member");
const member_healthissue = require("./member_healthIssue");
const nutrient = require("./nutrient");
const nutritionist = require("./nutritionist");
const products = require("./product");
const product_ingredient = require("./product_ingredient");
const product_nutrient = require("./product_nutrient");

const sync = async () => {
  try {
    admin.hasMany(products);
    await admin
      .sync()
      .then(() => console.log("Admin table created successfully."))
      .catch((error) =>
        console.error("Error creating Admin table: ", error.message),
      );

    nutritionist.hasMany(products);
    await nutritionist
      .sync()
      .then(() => console.log("Nutritionist table created successfully."))
      .catch((error) =>
        console.error("Error creating Nutritionist table: ", error.message),
      );

    member.belongsToMany(healthIssue, { through: member_healthissue });
    await member
      .sync()
      .then(() => console.log("Member table created successfully."))
      .catch((error) =>
        console.error("Error creating Member table: ", error.message),
      );

    healthIssue.belongsToMany(member, { through: member_healthissue });
    await healthIssue
      .sync()
      .then(() => console.log("Health Issue table created successfully."))
      .catch((error) =>
        console.error("Error creating Health Issue table: ", error.message),
      );

    await member_healthissue
      .sync()
      .then(() =>
        console.log("Member Health Issue table created successfully."),
      )
      .catch((error) =>
        console.error(
          "Error creating Member Health Issue table: ",
          error.message,
        ),
      );

    category.hasMany(products);
    await category
      .sync()
      .then(() => console.log("Category table created sucessfully."))
      .catch((error) =>
        console.error("Error creating Category table: " < error.message),
      );

    ingredient.belongsToMany(products, {
      through: {
        model: product_ingredient,
        uniqueKey: "product_ingredient_unique",
      },
    });
    await ingredient
      .sync()
      .then(() => console.log("Ingredient table created successfully."))
      .catch((error) =>
        console.error("Error creating Ingredient table: ", error.message),
      );

    nutrient.belongsToMany(products, {
      through: {
        model: product_nutrient,
        uniqueKey: "product_nutrient_unique",
      },
    });
    await nutrient
      .sync()
      .then(() => console.log("Nutrient table created successfully."))
      .catch((error) =>
        console.error("Error creating Nutrient table: ", error.message),
      );

    products.belongsToMany(nutrient, { through: product_nutrient });
    products.belongsToMany(ingredient, { through: product_ingredient });
    await products
      .sync()
      .then(() => console.log("Product table created successfully."))
      .catch((error) =>
        console.error("Error creating Product table:", error.message),
      );

    await product_ingredient
      .sync()
      .then(() => console.log("Product Ingredient table created successfully."))
      .catch((error) =>
        console.error(
          "Error creating Product Ingredient table: ",
          error.message,
        ),
      );

    await product_nutrient
      .sync()
      .then(() => console.log("Product Nutrient table created successfully."))
      .catch((error) =>
        console.error("Error creating Product Nutrient table: ", error.message),
      );
  } catch (error) {
    console.error("Error syncing tables: ", error.message);
  }
};

module.exports = sync;