const express = require("express")
const router = express.Router()
const userSchema = require("../Model/Usermodel")

router.post("/create",async(req,res) =>{
    try{
        const CreateUser = await userSchema.create(req.body)
        res.status(200).json(CreateUser)
        
    } catch(error){
        res.status(500).json(error)
        
    }
})

//  get method
router.get("/findall",async(req,res) =>{
    try{
        const CreateUser = await userSchema.find()
        res.status(200).json(CreateUser)
        
    } catch(error){
        res.status(500).json(error)
        
    }
})
// get method to getbyid
router.get("/findone/:id",async(req,res) =>{

    // const id = req.params;
    try{
        const CreateUser = await userSchema.findById(req.params.id)
        res.status(200).json(CreateUser)
        
    } catch(error){
        res.status(500).json(error)
        
    }
})
// get method for findbyid and update
router.put("/update/:id", async (req, res) => {
    try {
        const {id} = req.params;
        // const userId = req.params; 
         const updateData = req.body; 
 
       
        // if (!updateData) {
        //     return res.status(400).json({ message: "No update data provided" });
        // }

        
        const updatedUser = await userSchema.findByIdAndUpdate(id,req.body ,{
            new: true, 
            runValidators: true 
        });

        
        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json(updatedUser); 

    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message }); 
    }
});

// to delete
router.delete("/deleteduser/:id", async (req, res) => {
    try {
        
        const result = await userSchema.findByIdAndDelete(req.params.id);

        
        if (!result) {
            return res.status(404).json({ message: "User not found" });
        }

        
        res.status(200).json({ message: "User successfully deleted" });
    } catch (error) {
        
        res.status(500).json({ message: "Error deleting user", error });
    }
});

// to delete all 
router.delete("/deleteall", async (req, res) => {
    try {
        
        const result = await userSchema.deleteMany();

        
        if (!result) {
            return res.status(404).json({ message: "User not found" });
        }

        
        res.status(200).json({ message: "User successfully deleted" });
    } catch (error) {
        
        res.status(500).json({ message: "Error deleting user", error });
    }
});


module.exports= router;