import { CheckTypePipe } from './check-type.pipe';

describe('CheckTypePipe', () => {
  let checkTypePipe: CheckTypePipe;

  beforeEach(() => {
    checkTypePipe = new CheckTypePipe();
  });

  it('should create an instance', () => {
    expect(checkTypePipe).toBeTruthy();
  });

  it('should return string type of variable', () => {
    expect(checkTypePipe.transform('movie')).toBe('string');
  });

  it('should return object type of variable', () => {
    expect(checkTypePipe.transform({ title: 'batman' })).toBe('object');
  });

  it('should return object type of variable', () => {
    expect(checkTypePipe.transform([{ title: 'batman' }])).toBe('object');
  });
});
