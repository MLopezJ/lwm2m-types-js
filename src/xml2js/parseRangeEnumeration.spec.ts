import { parseRangeEnumeration } from './parseRangeEnumeration.js'

describe('getRangeEnumeration', () => {
	it.each([
		// Proper range
		['0..125', { min: 0, max: 125 }],
		['1..256', { min: 1, max: 256 }],
		// Proper set of number
		['16,32,48', { enum: [16, 32, 48] }],
		['0', { enum: [0] }],
		// Proper set of strings
		['"value"', { enum: ['value'] }],
		['"value1","value2"', { enum: ['value1', 'value2'] }],
		// Not a proper range,
		['0..255 bytes', null],
		['1..64 Bytes', null],
		['0..255 Gigabyte', null],
		['0..2^28-1', null],
		// String not quoted
		['no valid case', null],
		['8-Bits', null],
	])('should parse %s into %j', (value, expected) =>
		expect(parseRangeEnumeration(value)).toStrictEqual(expected),
	)
})
