import mongoose from "mongoose";
export const userschema=new mongoose.Schema({
name:{
    type:String,
    required:true
},
age:{
    type:Number,
},
email:{
    type:String,

}
})


import { Document } from "mongoose";
export interface User extends Document {
     readonly name:string;
     readonly age:number;
     readonly email:string


}