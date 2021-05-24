import { readMassPerElement } from '../src/readMassPerElement';

const SAMPLE_STRING = 'H,1.008\nHe,4.0026022\nLi,6.94';

describe('reading CSV AMU per element', (): void => {
    test('returns a map with mass per element', (): void => {
        const actual = readMassPerElement(SAMPLE_STRING);

        const expected = new Map<string, string>([
            ['H', '1.008'],
            ['He', '4.0026022'],
            ['Li', '6.94'],
        ]);

        expect(actual).toStrictEqual(expected);
    });
});
