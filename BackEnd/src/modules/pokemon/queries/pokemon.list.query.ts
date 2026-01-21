import { prisma } from '../../../config/database';
import { Prisma } from '../../../generated/prisma';
import { PokemonMapper } from '../pokemon.mapper';

export class GetPokemonsQuery {
  async execute(page: number, take: number, search?: string) {
    const skip = (page - 1) * take;

    const searchCondition : Prisma.PokemonWhereInput = search ? 
        {
          name : {
            contains: search,
            mode: 'insensitive',
          },
          deleted: null
        } : {deleted: null};

    const [items, total] = await Promise.all([
      prisma.pokemon.findMany({
        skip,
        take,
        orderBy: { createdAt: 'asc' },
        where: searchCondition
      }),
      prisma.pokemon.count({where: searchCondition})
    ]);

    return {
      data: items.map(PokemonMapper.toListDto),
      meta: {
        page,
        take,
        total,
        totalPages: Math.ceil(total / take)
      }
    };
  }
}
