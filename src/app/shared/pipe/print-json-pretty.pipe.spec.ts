import { PrintJsonPrettyPipe } from './print-json-pretty.pipe';

describe('PrintJsonPrettyPipe', () => {
  it('create an instance', () => {
    const pipe = new PrintJsonPrettyPipe();
    expect(pipe).toBeTruthy();
  });
});
