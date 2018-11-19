const createItem = (generateId) =>
  (value) => ({
    id: generateId(),
    value,
  });


xdescribe('createItem', () => {
  test('should create a correct item', () => {
    const generatedId = '77a5bb4f-d3c4-487a-b662-c67fb104208b';
    const guidGenerator = () => generatedId;
    const expectedResult = {
      id: '77a5bb4f-d3c4-487a-b662-c67fb104208b',
      value: 'My item',
    };

    const actualResult = createItem(guidGenerator)('My item');

    expect(actualResult).toEqual(expectedResult);
  });
});
