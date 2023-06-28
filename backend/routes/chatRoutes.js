const exprss=require("express");
const { accessChat ,fetchChats,createGroupChat,renameGroup,addToGroup,removeFromGroup}=require("../controllers/chatControllers");
const {protect}=require("../MIddleware/authMiddleware");

const router=express.Router();//or router

router.route("/").post(protect,accessChat);
router.route("/").get(protect,fetchChats);
router.route("/group").post(protect,createGroupChat);
router.route("/rename").put(protect,renameGroup);
router.route("/grouprename").put(protect,removeFromGroup);
router.route("/groupadd").put(protect,addToGroup);

module.exports=router;