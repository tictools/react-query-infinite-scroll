const STAT_NAME = {
  HP: "hp",
  ATTACK: "attack",
  DEFENSE: "defense",
  SPECIAL_ATTACK: "special-attack",
  SPECIAL_DEFENSE: "special-defense",
  SPEED: "speed",
};

const STAT_ABBR = {
  [STAT_NAME.HP]: "hp",
  [STAT_NAME.ATTACK]: "at",
  [STAT_NAME.DEFENSE]: "df",
  [STAT_NAME.SPECIAL_ATTACK]: "sat",
  [STAT_NAME.SPECIAL_DEFENSE]: "sdf",
  [STAT_NAME.SPEED]: "spd",
};

export const Stat = (stat) => ({
  name: stat.stat.name,
  abbr: STAT_ABBR[stat.stat.name],
  value: stat.base_stat,
});
