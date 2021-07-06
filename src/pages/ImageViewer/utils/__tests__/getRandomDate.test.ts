import { getRandomDate } from '../getRandomDate';

jest.useFakeTimers('modern').setSystemTime(new Date('1995-07-18').getTime());

describe('getRandomDate.test', () => {
  test('Always returns unique date', () => {
    const result = getRandomDate(['1995-07-17']);
    expect(result).toEqual('1995-07-16');
  });
});
