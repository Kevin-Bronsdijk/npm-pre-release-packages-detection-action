const functions = require('../src/functions');

describe('parsePackageFile tests', () => {
  test('when passing non-json data', () => {
    try {
      functions.parsePackageFile('');
    } catch (e) {
      expect(e.message).toBe('Unexpected end of JSON input');
    }
  });

  test('when passing empty arrays', () => {
    expect(functions.parsePackageFile('{ "name": "hello" }'))
        .toBeTruthy();
  });
});

describe('getPackages tests', () => {
  test('when not passing in data', () => {
    expect(functions.getPackages(undefined))
        .toStrictEqual([]);
  });

  test('when not passing in data', () => {
    const result = functions.getPackages(
        {'@actions/core': '1.2-test', 'line-reader': '^0.4.0'});

    expect(result).toHaveLength(2);
    expect(result[0].name).toBe('@actions/core');
    expect(result[0].version).toBe('1.2-test');
    expect(result[0].isPreReplease).toBe(true);
    expect(result[1].name).toBe('line-reader');
    expect(result[1].version).toBe('^0.4.0');
    expect(result[1].isPreReplease).toBe(false);
  });
});
