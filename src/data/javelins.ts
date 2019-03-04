import { WeaponType, ASSAULT_RIFLE, MACHINE_PISTOL } from "./weapons";
import { ConfigurableSlotDisplayProperties, slotPosition } from "./displayProperties";

export const COLOSSUS = 'colossus'
export const INTERCEPTOR = 'interceptor'
export const RANGER = 'ranger'
export const STORM = 'storm'

export type JavelinType =
  | typeof COLOSSUS
  | typeof INTERCEPTOR
  | typeof RANGER
  | typeof STORM

export const JAVELIN_TYPES: JavelinType[] = [
  COLOSSUS,
  INTERCEPTOR,
  RANGER,
  STORM,
]

export interface JavelinDisplayProperties {
  weapons: ConfigurableSlotDisplayProperties
  primaryAbility: ConfigurableSlotDisplayProperties
  secondaryAbility: ConfigurableSlotDisplayProperties
  components: ConfigurableSlotDisplayProperties
  supportAbility: ConfigurableSlotDisplayProperties
}

export interface Javelin {
  javelinType: JavelinType
  allowedWeaponTypes: WeaponType[]
  displayProperties: JavelinDisplayProperties
}

export const ranger: Javelin = {
  javelinType: RANGER,
  allowedWeaponTypes: [
    ASSAULT_RIFLE,
    MACHINE_PISTOL,
  ],
  displayProperties: {
    weapons: slotPosition(-10, 0, 'left'),
    primaryAbility: slotPosition(-10, -5, 'left'),
    secondaryAbility: slotPosition(-10, 7, 'left'),
    components: slotPosition(10, -10, 'right'),
    supportAbility: slotPosition(10, 5, 'right'),
  }
}

export const JAVELINS: Javelin[] = [
  ranger,
]