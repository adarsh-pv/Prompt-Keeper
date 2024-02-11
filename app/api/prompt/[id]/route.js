import Prompt from "@models/prompt";
import { connectToDB } from "@utils/databasse";


export const GET = async (req,{params}) =>{
    console.log(params,"ding");
    try {
        await connectToDB()
        const prompt = await Prompt.findById(params.id).populate('creator')
        if(!prompt) return new Response("Prompt not found",{status:404})
        return new Response(JSON.stringify(prompt),{status:200})
    } catch (error) {
        console.log(error,"err");
        return  new Response("failed to fetch prompt",{status:500})
    }
}
export const PATCH = async (request,{params}) =>{
    const {prompt,tag} = await request.json()
    try {
        await connectToDB()
        const existingPrompt = await Prompt.findById(params?.id)
        if(!existingPrompt) return new Response("Prompt not found",{status:404})

        existingPrompt.prompt = prompt;
        existingPrompt.tag = tag;
        await existingPrompt.save()
        return new Response(JSON.stringify(existingPrompt),{status:200})
    } catch (error) {
        console.log(error);
        return  new Response("failed to fetch prompt",{status:500})
    }
}

export const Delete = async (req,{params}) =>{
    try {
        await connectToDB()
        const response = await Prompt.findByIdAndRemove(params?.id)
        return new Response("Prompt deleted sucessfully",{status:200})
    } catch (error) {
        console.log(error);
        return  new Response("Failed to delete prompt",{status:500})
    }
}