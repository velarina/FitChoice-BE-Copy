const express = require("express");
const router = express.Router();

const adminController = require("../controllers/admin_controller");
const categoryController = require("../controllers/category_controller");
const favoriteController = require("../controllers/favorite_controller");
const ingredientController = require("../controllers/ingredient_controller");
const memberController = require("../controllers/member_controller");
const nutritionistController = require("../controllers/nutritionist_controller");
const productController = require("../controllers/product_controller");
const healthIssueController = require("../controllers/health_issue_controller");

router.get("/admin", adminController.data);
router.get("/admin/:id", adminController.index);
router.post("/admin", adminController.store);
router.put("/admin/:id", adminController.update);
router.delete("/admin/:id", adminController.delete);

router.get("/category/", categoryController.data);
router.get("/category/id/:id", categoryController.index);
router.post("/category", categoryController.store);
router.put("/category/:id", categoryController.update);
router.delete("/category/:id", categoryController.delete);

router.get("/favorite/", favoriteController.data);
router.get("/favorite/id/:id", favoriteController.index);
router.post("/favorite", favoriteController.store);
router.put("/favorite/:id", favoriteController.update);
router.delete("/favorite/:id", favoriteController.delete);

router.get("/ingredient/", ingredientController.data);
router.get("/ingredient/id/:id", ingredientController.index);
router.post("/ingredient", ingredientController.store);
router.put("/ingredient/:id", ingredientController.update);
router.delete("/ingredient/:id", ingredientController.delete);

router.get("/member/", memberController.data);
router.get("/member/id/:id", memberController.index);
router.post("/member", memberController.store);
router.put("/member/:id", memberController.update);
router.delete("/member/:id", memberController.delete);
router.post("/member/login", memberController.login);

router.get("/nutritionist/", nutritionistController.data);
router.get("/nutritionist/id/:id", nutritionistController.index);
router.post("/nutritionist", nutritionistController.store);
router.put("/nutritionist/:id", nutritionistController.update);
router.delete("/nutritionist/:id", nutritionistController.delete);

router.get("/product/", productController.data);
router.get("/product/id/:id", productController.index);
router.post("/product", productController.store);
router.put("/product/:id", productController.update);
router.delete("/product/:id", productController.delete);

router.get("/healthissue/", healthIssueController.data);
router.get("/healthissue/id/:id", healthIssueController.index);
router.post("/healthissue", healthIssueController.store);
router.put("/healthissue/:id", healthIssueController.update);
router.delete("/healthissue/:id", healthIssueController.delete);

module.exports = router;
