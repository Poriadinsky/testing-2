const getCharacterStatus = require('../character').default;

describe('getCharacterStatus', () => {
  test('should return "healthy" when health is more than 50', () => {
    const character = { name: '���', health: 90 };
    const status = getCharacterStatus(character);
    expect(status).toBe('healthy');
  });

  test('should return "wounded" when health is between 15 and 50', () => {
    const character = { name: '���', health: 30 };
    const status = getCharacterStatus(character);
    expect(status).toBe('wounded');
  });

  test('should return "critical" when health is less than 15', () => {
    const character = { name: '���', health: 10 };
    const status = getCharacterStatus(character);
    expect(status).toBe('critical');
  });
});
