type Direction = 'left' | 'right'

export interface ConfigurableSlotDisplayProperties {
  x: number
  y: number
  labelDirection: Direction
}

export const slotPosition = (x: number, y: number, labelDirection: Direction): ConfigurableSlotDisplayProperties => ({
  x,
  y,
  labelDirection
})