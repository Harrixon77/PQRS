import {getDb} from '../../config/database.js';
import { ObjectId } from 'mongodb';
import type { Category } from './category.model.js';

export class CategoryRepository {
    private collection() {
        return getDb().collection('categories');

    }
    async save (category: Category ){
        return await this.collection().insertOne(category);

    }

    async findAll() {
        return await this.collection().find({activo: true}).toArray();  

    }

    async findById(id: string) {
        return await this.collection().findOne({_id: new ObjectId(id)});
    }
}