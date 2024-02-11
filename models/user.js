import { Schema, model } from 'mongoose';

let User;
try {
    
    const UserSchema = new Schema({
        email:{
            type:String,
            unique:[true,'Email already exists!'],
            required:[true,'Email is required!'],
        },
        username:{
            type:String,
            required:[true,'userName is required!'],
            match:[/^(?=.{8,20}$)(?![_.])([a-zA-Z0-9._]*[_.]){0,2}[a-zA-Z0-9._]+(?<![_.])$/
            , "username invalid it should contain 8-10 ahphanumeric letters and be unique"]
        },
        image:{
            type:String
        }
    })  
    User = model("User");
} catch (error) {
    User = model("User", new Schema({
        email: {
          type: String,
          unique: [true, 'Email already exists!'],
          required: [true, 'Email is required!'],
        },
        username: {
          type: String,
          required: [true, 'Username is required!'],
          match: [
            /^(?=.{8,20}$)(?![_.])([a-zA-Z0-9._]*[_.]){0,2}[a-zA-Z0-9._]+(?<![_.])$/,
            "Username is invalid. It should contain 8-10 alphanumeric letters and be unique"
          ]
        },
        image: {
          type: String
        }
      }));
}

export default User;