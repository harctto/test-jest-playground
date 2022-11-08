import { sum } from '@/components/foo';

test('basic', () => {
  expect(sum()).toBe(0);
});

test('basic should calc wrong', () => {  
  expect(sum(1, 5)).not.toBe(7);
});