import {type Request, type Response } from "express";
import type { Category } from "./category.model.js";
import { CategoryService } from "./category.services.js";

export class CategoryController {
    private categoryService = new CategoryService();

    create = async (req: Request, res: Response) => {
        try {
            const result = await this.categoryService.createCategory(req.body);
            res.status(201).json({
                message: "Categoría creada con éxito",
                data: result
            });
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }

    getAll = async (_req: Request, res: Response) => {
        try {
            const result = await this.categoryService.getAllCategories();
            res.status(200).json(result);
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }
}