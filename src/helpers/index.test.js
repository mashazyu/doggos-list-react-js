import { getMockedData } from './index';

describe('getMockedData', () => {
  it('if array if images is provided, returns full data', () => {
    const data = getMockedData(['first.url', 'second.url']);

    expect(data.length).toEqual(2);
    expect(data[0].guid).toBeTruthy();
    expect(data[0].name).toBeTruthy();
    expect(data[0].company).toBeTruthy();
    expect(data[0].country).toBeTruthy();
    expect(data[0].image).toBeTruthy();
  });

  it('if no images provided, returns empty array', () => {
    expect(getMockedData([])).toStrictEqual([]);
  });
})
