import React from 'react'
import { isArray } from 'util';
import classnames from 'classnames';

import STYLES from './javelin-builder.module.scss'

import { JAVELINS } from '../data/javelins'
import { ConfigurableSlotDisplayProperties } from '../data/displayProperties';
import { NUM_COMPONENT_SLOTS } from '../data/constants';

const javelinTypes = JAVELINS.map(j => j.javelinType)

const SLOT_SIZE = 20
const SLOT_UNITS = 'px'
const slotSizeUnit = (n: number) => `${n * SLOT_SIZE}${SLOT_UNITS}`
const createSlotElement = (key: string, props: ConfigurableSlotDisplayProperties, offsetX = 0, offsetY = 0) => {
  return (
    <div
      key={key}
      className={STYLES.slotAnchor}
      style={{ left: slotSizeUnit(props.x + offsetX), top: slotSizeUnit(props.y + offsetY) }}>
      <div className={classnames(STYLES.slot, STYLES[`slot-${props.labelDirection}`])}>
        <div className={STYLES.content}>
          Insert component here
        </div>
      </div>
    </div>
  )
}

export const JavelinBuilder = () => {

  const javelin = JAVELINS[0]

  const slots = [
    javelin.displayProperties.primaryAbility,
    javelin.displayProperties.secondaryAbility,
    Array<ConfigurableSlotDisplayProperties>(2).fill(javelin.displayProperties.weapons),
    Array<ConfigurableSlotDisplayProperties>(NUM_COMPONENT_SLOTS).fill(javelin.displayProperties.components),
    javelin.displayProperties.supportAbility,
  ]

  const slotElements = slots.reduce((spreadSlots, slot, slotIndex) => {
    if (isArray(slot)) {
      const slotArray = slot.map((s, subSlotIndex) => createSlotElement(`slot-${slotIndex}-${subSlotIndex}`, s, 0, subSlotIndex * 2))
      return spreadSlots.concat(slotArray)
    } else {
      return spreadSlots.concat(createSlotElement(`slot-${slotIndex}`, slot))
    }
  }, ([] as JSX.Element[]))

  return (
    <div className={STYLES.builder}>
      {/*<select>{javelinTypes.map(t => <option key={t} value={t}>{t}</option>)}</select>*/}
      <div className={STYLES.slotAnchor}>
        <div className={STYLES.slotsContainer}>
          {slotElements}
        </div>
      </div>

    </div>
  )

}