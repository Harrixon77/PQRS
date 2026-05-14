// src/modules/categories/category.service.ts
import { CategoryRepository } from "./category.repository.js";
import type { Category } from "./category.model.js";

export class CategoryService {
    private repository = new CategoryRepository();

    async createCategory(data: any) {
        // Validación simple
        if (!data.nombre || data.nombre.trim() === "") {
            throw new Error("El nombre de la categoría es obligatorio");
        }

        const nuevaCategoria: Category = {
            nombre: data.nombre,
            descripcion: data.descripcion || "",
            activo: true,
            createdAt: new Date(),
            updatedAt: new Date()
        };

        return await this.repository.save(nuevaCategoria);
    }

    async getAllCategories() {
        return await this.repository.findAll();
    }
}