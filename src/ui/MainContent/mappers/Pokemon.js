import { Species } from "@/ui/MainContent/mappers/Species";
import { Sprites } from "@/ui/MainContent/mappers/Sprites";
import { Stat } from "@/ui/MainContent/mappers/Stat";
import { Type } from "./Type";

export const Pokemon = (pokemonDTO, speciesDTO) => {
  return {
    abilities: pokemonDTO.abilities,
    height: pokemonDTO.height,
    name: pokemonDTO.name,
    sprites: Sprites(pokemonDTO.sprites),
    stats: pokemonDTO.stats.map(Stat),
    weight: pokemonDTO.weight,
    species: Species(speciesDTO),
    types: pokemonDTO.types.map(Type),
  };
};
