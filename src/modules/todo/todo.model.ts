import {ObjectId} from 'mongodb'; 

export interface ToDo {
    _id?: ObjectId;
    name: string;
    done: boolean;
   
}