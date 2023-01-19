/**
 * Periodic Activity
 *
 *
 * Generic interface to set up periodic activity like hourly sensor reading/load
 * activation and mechanism to retrieve the periodic data.
 *
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/10376.xml
 *
 * ID: 10376
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: true
 * Mandatory: false
 */
export type PeriodicActivity_10376 = Readonly<
	Array<{
		'0': ActivityName_0
		'1': ActivityDescription_1
		'3': StartMask_3
		'4': PeriodicInterval_4
		'2'?: ActivitySettings_2
		'5'?: RunPeriod_5
		'6'?: Record_6
		'7'?: RecordHeadIndex_7
		'8'?: RecordTailIndex_8
		'9'?: RecordReadIndex_9
		'10'?: RecordDispatchStartMask_10
		'11'?: RecordDispatchInterval_11
	}>
>
/**
 * Activity Name
 *
 * This resource represents activity's name declared by device. It cannot be
 * modified externally. Device can support multiple activities by declaring
 * multiple instances of Periodic Activity object.
 *
 *
 * ID: 0
 * MultipleInstances: false
 * Mandatory: true
 */
type ActivityName_0 = string
/**
 * Activity Description
 *
 * This resource describes activity's operation including its supported options
 * and data returned.
 *
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: true
 */
type ActivityDescription_1 = string
/**
 * Start Mask
 *
 * This resource defines when to start the periodic activity. Start Mask needs
 * to adhere to following string format:
 * "YYMMDDHHmmss"
 * YY: year, e.g 21
 * MM: month, 01 to 12
 * DD: day, 01 to 31
 * HH: hour, 00 to 23
 * mm: minute, 00 to 59
 * ss: second, 00 to 59
 *
 * Any of the above can be replaced by character '-' for "don't care" masking.
 *
 * Example:
 * 1) "211027201801" the periodic activity will start at exactly 20:18:01 on
 * 2021/10/27.
 * 2) "------201801" the periodic activity will start at the next 20:18:01.
 * 3) "------------" the periodic activity will start immediately.
 * 4) "------20--00" the periodic activity will start between 8pm to 8.59pm at
 * exactly 00 seconds.
 * 5) "------01000000" the periodic activity will start at next 1st of the month
 * at 12am.
 *
 * Start Mask is adjusted to UTC offset provided by Device [/3/0/14] object
 * instance resource, or adjusted to UTC if the resource is not provided.
 *
 *
 * ID: 3
 * MultipleInstances: false
 * Mandatory: true
 */
type StartMask_3 = string
/**
 * Periodic Interval
 *
 * This resource represents the time interval between the run of consecutive
 * activities. The next activity will run after Periodic Interval resource value
 * has elapsed.
 *
 *
 * ID: 4
 * MultipleInstances: false
 * Mandatory: true
 * Units: s
 */
type PeriodicInterval_4 = number
/**
 * Activity Settings
 *
 * This resource allows activity to accept settings or input parameters when
 * run. The available settings, if supported, should be described using Activity
 * Description resource.
 *
 *
 * ID: 2
 * MultipleInstances: false
 * Mandatory: false
 */
type ActivitySettings_2 = string
/**
 * Run Period
 *
 * This resource defines the period to run this periodic activity. Periodic
 * activity will stop when the Run Period has elapsed from the start time.
 * Depending on the Start Mask's "don't care" field, this periodic activity may
 * re-start again.
 *
 *
 * ID: 5
 * MultipleInstances: false
 * Mandatory: false
 * Units: s
 */
type RunPeriod_5 = number
/**
 * Record
 *
 * Record resource enable the accumulation of returned data (if any) when the
 * activity is run/called. The accumulated data or records is represented by a
 * read-only serialized Opaque (Binary) value.
 * The number of records available in this serialized resource can be calculated
 * by Record Head Index - Record Current Read Index. Nevertheless, the number of
 * records serialized is limited by device's memory allocation. After successful
 * record read (manual read, observation or dispatch), device will increment
 * Record Current Read Index as per how many already read.
 *
 * The record use CBOR format encoded as following:
 *
 * 1. array(Record Index 1, Record Timestamp 1, Record Value 1)
 * 2. array(Record Index 2, Record Timestamp 2, Record Value 2)
 * ...
 * n. array(Record Index n, Record Timestamp n, Record Value n)
 *
 * Record Timestamp is a 32-bit integer representing the number of seconds since
 * Jan 1st, 1970 in the UTC time zone. Record Value can be any type and
 * described by CBOR type. Value can also be an array of sub-values.
 *
 * ID: 6
 * MultipleInstances: false
 * Mandatory: false
 */
type Record_6 = string
/**
 * Record Head Index
 *
 * This resource represents the index of the latest record. This index is
 * incremented upon every new activity's record. Total recordings inside the
 * device can be calculated by Record Head Index - Record Tail Index.
 *
 *
 * ID: 7
 * MultipleInstances: false
 * Mandatory: false
 */
type RecordHeadIndex_7 = number
/**
 * Record Tail Index
 *
 * This resource represents the index of the oldest record stored in device.
 * This index is adjusted (incremented) by device based on its memory space
 * availability.
 *
 *
 * ID: 8
 * MultipleInstances: false
 * Mandatory: false
 */
type RecordTailIndex_8 = number
/**
 * Record Read Index
 *
 * This resource represents the index of the last read record. Device will
 * increment this index upon successful record delivery to server (via manual
 * read or scheduled dispatch). Server may modify this index to traverse within
 * available records in device.
 *
 *
 * ID: 9
 * MultipleInstances: false
 * Mandatory: false
 */
type RecordReadIndex_9 = number
/**
 * Record Dispatch Start Mask
 *
 * This resource represents the start time to deliver Record resource. If Record
 * resource is currently being observed, this resource enables accumulation of
 * the Record changes before being dispatch (rather than delivering Record
 * immediately as it changes). As per Start Mask, Dispatch Start Mask must
 * adhere to following string format:
 * "YYMMDDHHmmss".
 *
 * Dispatch Start Mask is adjusted to UTC offset provided by Device [/3/0/14]
 * object instance resource, or adjusted to UTC if the resource is not
 * provided.
 *
 * If this resource is used together with Dispatch Interval resource, it is
 * possible to automatically deliver Record resource at specific time. For
 * example, dispatch accumulated record every 6 hours, at minute 5 (00:05,
 * 06:05, 12:05, 18:05).
 *
 *
 * ID: 10
 * MultipleInstances: false
 * Mandatory: false
 */
type RecordDispatchStartMask_10 = string
/**
 * Record Dispatch Interval
 *
 * This resource represents the time interval between consecutive automatic
 * Record dispatch. The next dispatch will run after Record Dispatch Interval
 * resource value has elapsed.
 *
 *
 * ID: 11
 * MultipleInstances: false
 * Mandatory: false
 * Units: s
 */
type RecordDispatchInterval_11 = number
/**
 * The objectURN for Periodic Activity
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '10376'
