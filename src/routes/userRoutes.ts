import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

//USER
//create
router.post('/', async (req, res)=>{
    const { email, name, username } = req.body;
    console.log(req.body);
    try{
        const result = await prisma.user.create({
            data: {
                email,
                name, 
                username, 
                bio: "test bio",
            },
        });
        res.json(result);
    } catch (e) {
        res.status(400).json({ error : "username and email should be unique" })
    }

});

//list
router.get('/', async (req, res)=>{
    const allUsers = await prisma.user.findMany();
    res.json(allUsers);
})

//get a user
router.get('/:id', async (req, res) =>{
    const { id } = req.params;
    const user = await prisma.user.findUnique({ where : {id :Number(id) } });
    res.json(user);
})

//update user
router.put('/:id', async (req, res) =>{
    const { id } = req.params;
    const { bio, name, image } = req.body;
    try{
        const result = await prisma.user.update({
            where: { id: Number(id)}, 
            data: {bio, name, image}
        });
        res.json(result);
    } catch(e) {
        res.status(400).json({error: `failed to update user`});
    }
})

//delete user
router.delete('/:id', async(req, res) =>{
    const {id} = req.params;
    await prisma.user.delete({ where: {id: Number(id) } });
    res.sendStatus(200);
})

export default router;