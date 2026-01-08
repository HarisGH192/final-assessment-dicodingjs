import test from 'node:test';
import assert from 'node:assert';
import sum from './index.js';

test('sum: returns correct result for positive integers', () => {
  assert.strictEqual(sum(1, 2), 3);
  assert.strictEqual(sum(10, 20), 30);
});

test('sum: returns correct result for zero and positive mixes', () => {
  assert.strictEqual(sum(0, 0), 0);
  assert.strictEqual(sum(0, 5), 5);
  assert.strictEqual(sum(5, 0), 5);
});

test('sum: returns correct result for floats', () => {
  assert.strictEqual(sum(1.5, 2.25), 3.75);
});

test('sum: returns 0 when any argument is not a number', () => {
  assert.strictEqual(sum('1', 2), 0);
  assert.strictEqual(sum(1, '2'), 0);
  assert.strictEqual(sum(null, 1), 0);
  assert.strictEqual(sum(undefined, 1), 0);
  assert.strictEqual(sum({}, 1), 0);
  assert.strictEqual(sum(true, 1), 0);
  assert.strictEqual(sum(1n, 2), 0);
});

test('sum: returns 0 when any argument is negative', () => {
  assert.strictEqual(sum(-1, 2), 0);
  assert.strictEqual(sum(2, -1), 0);
  assert.strictEqual(sum(-1, -1), 0);
});

test('sum: handles NaN and Infinity correctly', () => {
  assert.strictEqual(Number.isNaN(sum(NaN, 1)), true);
  assert.strictEqual(sum(Infinity, 1), Infinity);
  // Negative infinity is considered < 0 so function should return 0
  assert.strictEqual(sum(-Infinity, 1), 0);
});

test('sum: returns 0 when arguments are missing', () => {
  assert.strictEqual(sum(1), 0);
  assert.strictEqual(sum(), 0);
});
