import { prisma } from "../../../config/database";
import { BaseResponse } from "../../../utils/response";
import { IUpdatePokemon } from "../request/update-pokemon.request";


export class DeletePokemon {
    async execute(id: number) {
        try {
            // 1. Validación de entrada
            if (!id || isNaN(id)) {
                throw new Error("A valid ID parameter is required.");
            }

            // 2. Verificar existencia (solo si no está ya borrado)
            // Usamos findFirst porque findUnique no permite filtrar por otros campos como 'deleted'
            const existing = await prisma.pokemon.findFirst({ 
                where: { 
                    id: id, 
                    deleted: null 
                } 
            });

            if (!existing) {
                throw new Error("Pokemon not found or already deleted.");
            }

            // 3. Ejecutar Soft Delete
            await prisma.pokemon.update({
                where: { id: id },
                data: {
                    deleted: new Date(),
                }
            });

            return new BaseResponse(
                "Pokemon deleted successfully",
                true,
            );

        } catch (error: any) {
            // Lanzamos el error con su mensaje original para que el Alert lo capture bien
            throw new Error(error.message || "We couldn't delete your Pokémon.");
        }
    }
}