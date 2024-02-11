// const { default: Prompt } = require("@models/prompt");
import Prompt from '@models/prompt'
const { connectToDB } = require("@utils/databasse");


export const GET = async (request)=>{
    console.log("calling");
try {
    await connectToDB()
    const prompts = await Prompt.find({}).populate('creator');  
    return new Response(JSON.stringify(prompts),
    {status:200})
} catch (error) {
    console.log(error,"error");
    return new Response("server error",
    {status:500})
}
}