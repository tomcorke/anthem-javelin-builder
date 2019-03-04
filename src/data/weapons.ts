export const MACHINE_PISTOL = 'machine-pistol'
export const ASSAULT_RIFLE = 'assault-rifle'

export type WeaponType =
  | typeof MACHINE_PISTOL
  | typeof ASSAULT_RIFLE

export const WEAPON_TYPES: WeaponType[] = [
  MACHINE_PISTOL,
  ASSAULT_RIFLE
]