export const ASSAULT_LAUNCHER = 'assault-launcher'
export const GRENADE = 'grenade'

export type AbilityType =
  | typeof ASSAULT_LAUNCHER
  | typeof GRENADE

export const ABILITY_TYPES: AbilityType[] = [
  ASSAULT_LAUNCHER,
  GRENADE
]

export interface Ability {
  abilityType: AbilityType
}