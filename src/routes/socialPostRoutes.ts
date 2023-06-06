import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

//socialpost
//create
router.post('/', async (req, res)=>{
    const { content, image, user } = req.body;
    console.log(req.body);
    try{
        const result = await prisma.socialPost.create({
            data: {
                content,
                image,
                user
            },
        });
        console.trace(result);
        res.json(result);
    } catch (e) {
        res.status(400).json({ error : "username and email should be unique" })
    }

});

//list
router.get('/', async (req, res)=>{
    const allPosts = await prisma.socialPost.findMany();
    res.json(allPosts);
})

//get a socialPost
router.get('/:id', async (req, res) =>{
    const { id } = req.params;
    const socialPost = await prisma.socialPost.findUnique({ where : {id :Number(id) } });
    res.json(socialPost);
})

//update socialPost
router.put('/:id', async (req, res) =>{
    const { id } = req.params;
    const { content, image } = req.body;
    try{
        const result = await prisma.socialPost.update({
            where: { id: Number(id)}, 
            data: {content, image}
        });
        res.json(result);
    } catch(e) {
        res.status(400).json({error: `failed to update socialPost`});
    }
})

//delete socialPost
router.delete('/:id', async(req, res) =>{
    const {id} = req.params;
    await prisma.socialPost.delete({ where: {id: Number(id) } });
    res.sendStatus(200);
})

export default router;