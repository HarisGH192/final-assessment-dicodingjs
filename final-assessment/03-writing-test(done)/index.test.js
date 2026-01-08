import test from 'node:test'
import assert from 'node:assert'
import { sum } from './index.js'

test('sum adds two positive numbers', () => {
	assert.strictEqual(sum(1, 2), 3)
})

test('sum handles negative numbers', () => {
	assert.strictEqual(sum(-1, -2), -3)
})

test('sum with zero', () => {
	assert.strictEqual(sum(0, 5), 5)
})

test('sum with floats', () => {
	assert.strictEqual(sum(1.5, 2.25), 3.75)
})

