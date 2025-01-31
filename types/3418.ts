/**
 * Electrical monitor
 *
 * The uCIFI electrical monitor object provides attributes related to the
 * analysis of electrical consumption in an outdoor luminaire or in a
 * streetlight cabinet. It also identifies electrical anomalies.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/3418.xml
 *
 * ID: 3418
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: true
 * Mandatory: false
 */
export type Electricalmonitor_3418 = Readonly<
	Array<{
		'1'?: Supplyvoltage_1
		'2'?: Supplycurrent_2
		'3'?: Frequency_3
		'4'?: Activepower_4
		'5'?: Powerfactor_5
		'6'?: Cumulatedactiveenergy_6
		'8'?: Lowpowerfactorthreshold_8
		'9'?: Lowpowerfactor_9
		'10'?: Lowpowerthreshold_10
		'11'?: Lowpowerthresholdatlowdimlevel_11
		'12'?: Lowpower_12
		'13'?: Highpowerthreshold_13
		'14'?: Highpowerthresholdatlowdimlevel_14
		'15'?: Highpower_15
		'16'?: Lowcurrentthreshold_16
		'17'?: Lowcurrent_17
		'18'?: Highcurrentthreshold_18
		'19'?: Highcurrent_19
		'20'?: Lowvoltagethreshold_20
		'21'?: Lowvoltage_21
		'22'?: Highvoltagethreshold_22
		'23'?: Highvoltage_23
		'24'?: Criticalinrushthreshold_24
		'25'?: Criticalinrushcurrent_25
		'26'?: MinimuminrushCurrent_26
		'27'?: MaximuminrushCurrent_27
		'28'?: LatestinrushCurrent_28
		'29'?: Reactivepower_29
		'30'?: Reactiveenergy_30
	}>
>
/**
 * Supply voltage
 *
 * Electrical voltage supplied to the device.
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: false
 * Units: V
 */
type Supplyvoltage_1 = number
/**
 * Supply current
 *
 * Electrical current supplied to the device.
 *
 * ID: 2
 * MultipleInstances: false
 * Mandatory: false
 * Units: A
 */
type Supplycurrent_2 = number
/**
 * Frequency
 *
 * Frequency of the supply current to the device.
 *
 * ID: 3
 * MultipleInstances: false
 * Mandatory: false
 * Units: Hz
 */
type Frequency_3 = number
/**
 * Active power
 *
 * Active power consumed by the device and its electrical load.
 *
 * ID: 4
 * MultipleInstances: false
 * Mandatory: false
 * Units: W
 */
type Activepower_4 = number
/**
 * Power factor
 *
 * Power factor is equal to active power divided by apparent power. The value is
 * between -1 and +1.
 *
 * ID: 5
 * MultipleInstances: false
 * Mandatory: false
 */
type Powerfactor_5 = number
/**
 * Cumulated active energy
 *
 * Cumulated number of kWh measured by the device and its load since last energy
 * counter reset.
 *
 * ID: 6
 * MultipleInstances: false
 * Mandatory: false
 * Units: kWh
 */
type Cumulatedactiveenergy_6 = number
/**
 * Low power factor threshold
 *
 * Threshold below which the device should trigger a low power factor event.
 *
 * ID: 8
 * MultipleInstances: false
 * Mandatory: false
 */
type Lowpowerfactorthreshold_8 = number
/**
 * Low power factor
 *
 * Set to True if the power factor is below threshold. This is an absolute value
 * threshold.
 *
 * ID: 9
 * MultipleInstances: false
 * Mandatory: false
 */
type Lowpowerfactor_9 = boolean
/**
 * Low power threshold
 *
 * Threshold below which the device should trigger a low power event.
 *
 * ID: 10
 * MultipleInstances: false
 * Mandatory: false
 * Units: W
 */
type Lowpowerthreshold_10 = number
/**
 * Low power threshold at low dim level
 *
 * Threshold below which the device should trigger a low power event. This is an
 * addition to the low power threshold to allow a separated threshold when dim
 * level is low.
 *
 * ID: 11
 * MultipleInstances: false
 * Mandatory: false
 * Units: W
 */
type Lowpowerthresholdatlowdimlevel_11 = number
/**
 * Low power
 *
 * Set to True if the power is below threshold. Vendor may consider the Low
 * power threshold at low dim level to set this resource to True, taking into
 * account the lamp dim level.
 *
 * ID: 12
 * MultipleInstances: false
 * Mandatory: false
 */
type Lowpower_12 = boolean
/**
 * High power threshold
 *
 * Threshold above which the device should trigger a high power event.
 *
 * ID: 13
 * MultipleInstances: false
 * Mandatory: false
 * Units: W
 */
type Highpowerthreshold_13 = number
/**
 * High power threshold at low dim level
 *
 * Threshold above which the device should trigger a high power event. This is
 * an addition to the high power threshold to allow a separated threshold when
 * dim level is low.
 *
 * ID: 14
 * MultipleInstances: false
 * Mandatory: false
 * Units: W
 */
type Highpowerthresholdatlowdimlevel_14 = number
/**
 * High power
 *
 * Set to True if the power is above threshold. Vendor may consider the High
 * power threshold at low dim level to set this resource to True, taking into
 * account the lamp dim level.
 *
 * ID: 15
 * MultipleInstances: false
 * Mandatory: false
 */
type Highpower_15 = boolean
/**
 * Low current threshold
 *
 * Threshold below which the device should trigger a low current event.
 *
 * ID: 16
 * MultipleInstances: false
 * Mandatory: false
 * Units: A
 */
type Lowcurrentthreshold_16 = number
/**
 * Low current
 *
 * Set to True if the current is below threshold.
 *
 * ID: 17
 * MultipleInstances: false
 * Mandatory: false
 */
type Lowcurrent_17 = boolean
/**
 * High current threshold
 *
 * Threshold above which the device should trigger a high current event.
 *
 * ID: 18
 * MultipleInstances: false
 * Mandatory: false
 * Units: A
 */
type Highcurrentthreshold_18 = number
/**
 * High current
 *
 * Set to True if the current is above threshold.
 *
 * ID: 19
 * MultipleInstances: false
 * Mandatory: false
 */
type Highcurrent_19 = boolean
/**
 * Low voltage threshold
 *
 * Threshold below which the device should trigger a low voltage event.
 *
 * ID: 20
 * MultipleInstances: false
 * Mandatory: false
 * Units: V
 */
type Lowvoltagethreshold_20 = number
/**
 * Low voltage
 *
 * Set to True if the voltage is below threshold.
 *
 * ID: 21
 * MultipleInstances: false
 * Mandatory: false
 */
type Lowvoltage_21 = boolean
/**
 * High voltage threshold
 *
 * Threshold above which the device should trigger a high voltage event.
 *
 * ID: 22
 * MultipleInstances: false
 * Mandatory: false
 * Units: V
 */
type Highvoltagethreshold_22 = number
/**
 * High voltage
 *
 * Set to True if the voltage is above threshold.
 *
 * ID: 23
 * MultipleInstances: false
 * Mandatory: false
 */
type Highvoltage_23 = boolean
/**
 * Critical inrush threshold
 *
 * Threshold above which the device should trigger a critical inrush event.
 *
 * ID: 24
 * MultipleInstances: false
 * Mandatory: false
 * Units: A
 */
type Criticalinrushthreshold_24 = number
/**
 * Critical inrush current
 *
 * Set to True if the inrush current is above threshold.
 *
 * ID: 25
 * MultipleInstances: false
 * Mandatory: false
 */
type Criticalinrushcurrent_25 = boolean
/**
 * Minimum inrush Current
 *
 * Minimum inrush current since last configuration.
 *
 * ID: 26
 * MultipleInstances: false
 * Mandatory: false
 * Units: A
 */
type MinimuminrushCurrent_26 = number
/**
 * Maximum inrush Current
 *
 * Maximum inrush current since last configuration.
 *
 * ID: 27
 * MultipleInstances: false
 * Mandatory: false
 * Units: A
 */
type MaximuminrushCurrent_27 = number
/**
 * Latest inrush Current
 *
 * Latest inrush current measured since last time the relay switched ON.
 *
 * ID: 28
 * MultipleInstances: false
 * Mandatory: false
 * Units: A
 */
type LatestinrushCurrent_28 = number
/**
 * Reactive power
 *
 * Instantaneous reactive power measured by the device and its electrical load.
 *
 * ID: 29
 * MultipleInstances: false
 * Mandatory: false
 * Units: var
 */
type Reactivepower_29 = number
/**
 * Reactive energy
 *
 * Cumulative reactive power measured by the device and its electrical load
 * since last energy counter reset.
 *
 * ID: 30
 * MultipleInstances: false
 * Mandatory: false
 * Units: varh
 */
type Reactiveenergy_30 = number
/**
 * The objectURN for Electrical monitor
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '3418'
