import { isStringValid } from "./01_isStringValid";

xdescribe('isStringValid', () => {
  [undefined, null, '', '     '].forEach((entry) => {
    test(`should return false for ${entry}`, () => {
      expect(isStringValid(entry)).toBeFalsy();
    });
  });

  test('should return true for a valid string', () => {
    expect(isStringValid('testing like a boss')).toBeTruthy();
  });
});

