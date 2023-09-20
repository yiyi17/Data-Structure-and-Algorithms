describe('selectSort', () => {
  it('should sort an array in ascending order', () => {
    const arr = [5, 3, 8, 1, 2];
    const expected = [1, 2, 3, 5, 8];
    const result = arr.selectSort();
    expect(result).toEqual(expected);
  });

  it('should sort an array with duplicates', () => {
    const arr = [5, 3, 8, 1, 2, 3];
    const expected = [1, 2, 3, 3, 5, 8];
    const result = arr.selectSort();
    expect(result).toEqual(expected);
  });

  it('should sort an array with negative numbers', () => {
    const arr = [5, -3, 8, -1, 2];
    const expected = [-3, -1, 2, 5, 8];
    const result = arr.selectSort();
    expect(result).toEqual(expected);
  });

  it('should sort an empty array', () => {
    const arr = [];
    const expected = [];
    const result = arr.selectSort();
    expect(result).toEqual(expected);
  });

  it('should sort an array with one element', () => {
    const arr = [5];
    const expected = [5];
    const result = arr.selectSort();
    expect(result).toEqual(expected);
  });
});