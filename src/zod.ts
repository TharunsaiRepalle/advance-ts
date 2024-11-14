import { z } from 'zod';
import express from 'express';

const app = express();

//Define the schema for update.
const userProfileSchema = z.object( {
    name : z.string().min(1, { message : "Name cannot be empty."}),
    email : z.string().email({ message: "Invalid email format "}),
    age : z.number().min(18, { message: "You must be at aleast 18"}).optional()
})

type FinalUserSchema = z.infer<typeof userProfileSchema>

app.put('/user', (req,res) => {
    const { success } = userProfileSchema.safeParse(req.body);

    const updateBody : FinalUserSchema = req.body;
    if(!success) {
        res.status(411).json({});
    }   

    //update database here.
    res.json({
        message: "User Updated"
    })
})

app.listen(3000, () => {
    console.log(`listening at 3000`)
})