import { PrintJsonPrettyPipe } from './print-json-pretty.pipe';

describe('PrintJsonPrettyPipe', () => {
  let printJsonPrettyPipe: PrintJsonPrettyPipe;

  beforeEach(() => {
    printJsonPrettyPipe = new PrintJsonPrettyPipe();
  });

  it('should create an instance', () => {
    expect(printJsonPrettyPipe).toBeTruthy();
  });

  it('should return an object from json with key and value', () => {
    const json = {
      title: 'batman',
      type: 'movie',
      year: '2005',
    };
    const returnValue = [
      {
        key: 'title',
        value: 'batman',
      },
      { key: 'type', value: 'movie' },
      { key: 'year', value: '2005' },
    ];

    expect(printJsonPrettyPipe.transform(json)).toEqual(returnValue);
  });
});
