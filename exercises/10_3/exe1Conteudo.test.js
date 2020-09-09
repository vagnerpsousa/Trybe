let randomNumber = () => Math.floor(Math.random() * 101);

const isDivisible = (number) => (randomNumber() % number) === 0;

describe('isDivisible', () => {
  it('randomNumber() é chamada quando invocamos a isDivisible()', () => {
    randomNumber = jest
      .fn()
    isDivisible();
    expect(randomNumber).toHaveBeenCalled();
  });
  it('quando a randomNumber() retorna um número par e isDivisible() recebe um dois, o retorno é true', () => {
    randomNumber = jest
      .fn()
      .mockReturnValue(12)
    expect(isDivisible(2)).toBe(true);
  });
  it('a função isDivisible tem os retornos esperados', () => {
    randomNumber = jest
      .fn()
      .mockReturnValueOnce(2)
      .mockReturnValueOnce(3)
      .mockReturnValue(4)
    expect(isDivisible(2)).toBe(true);
    expect(isDivisible(3)).toBe(true);
    expect(isDivisible(3)).toBe(false);
    expect(isDivisible(4)).toBe(true);
  });
});