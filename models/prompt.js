import mongoose, { Schema, model } from "mongoose";

let Prompt;

try {
    const PromptSchema = new Schema({
        creator:{
            type:Schema.Types.ObjectId,
            ref:'User'
        },
        prompt:{
            type:String,
            required:[true,'prompt is required']
        },
        tag:{
            type:String,
            required:[true,'Tag is required']
        }
    });
    Prompt = model("Prompt");
}catch(error){
    Prompt = model("Prompt", new Schema({
        creator: {
          type: Schema.Types.ObjectId,
          ref: 'User'
        },
        prompt: {
          type: String,
          required: [true, 'prompt is required']
        },
        tag: {
          type: String,
          required: [true, 'Tag is required']
        }
      }));
}


// const || model('Prompt',PromptSchema);


export default Prompt;
