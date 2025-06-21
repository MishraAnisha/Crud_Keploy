import User from "../model/usermodel.js";

export const create = async (req, res) => {
  try {
    // Validate incoming request body
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // Check if user already exists
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(409).json({ message: "User already exists." }); // 409 Conflict
    }

    // Create and save new user
    const newUser = new User({ name, email, password });
    const savedUser = await newUser.save();

    return res.status(201).json({ message: "User created successfully", user: savedUser });
  } catch (error) {
    console.error("Error in create:", error); // Log detailed error
    return res.status(500).json({ error: "Internal Server Error." });
  }
};

export const fetch = async (req, res) => {
  try {
    const users = await User.find();

    if (!users || users.length === 0) {
      return res.status(404).json({ message: "No users found." });
    }

    return res.status(200).json(users);
  } catch (error) {
    console.error("Error in fetch:", error); // Log detailed error
    return res.status(500).json({ error: "No Server Error." });
  }
};

export const update = async (req, res) => {
    try{
        const id = req.params.id;
        const userExist = await User.findeOne({_id_:id})
        if(!userExist){
            return res.status(404).json({message: "user Not Found."})
        }
        const updateUser = await User.findNyIdAndUpdate(id,req.body, {new:true})
        res.status(201).json(updateUser);
    } catch (error) {
    console.error("Error in fetch:", error); // Log detailed error
    return res.status(500).json({ error: "No Server Error." });
  }

};

export const deleteUser = async (req, res) => {
    try{
         const id = req.params.id;
        const userExist = await User.findeOne({_id_:id})
        if(!userExist){
            return res.status(404).json({message: "user Not Found."})
        }
        await User.findByIdAndDelete(id);
        res.status(201).json({message: "User deleted successfully. "})
    } catch (error) {
    console.error("Error in fetch:", error); // Log detailed error
    return res.status(500).json({ error: "No Server Error." });
  }
};