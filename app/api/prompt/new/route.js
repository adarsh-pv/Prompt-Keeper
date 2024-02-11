import Prompt from "@models/prompt"
import { connectToDB } from "@utils/databasse"

export const POST = async (req,res) =>{
    const {userId, prompt, tag} = await req.json()
    try {
        console.log("mjjj");
        await connectToDB()
        const newPrompt = new Prompt({
            creator:userId,
            prompt,
            tag
        })
        console.log(newPrompt,"newConsoling");
        await newPrompt.save()
        return new Response(JSON.stringify(newPrompt),
        {status:201})
    } catch (error) {
        console.log(error,"error");
        return new Response("Failed to create a new prompt",{status:500})
    }
}