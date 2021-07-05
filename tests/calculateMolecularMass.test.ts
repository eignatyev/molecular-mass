import { calculateMolecularMass } from '../src/calculateMolecularMass';

describe('calculating molecular mass', (): void => {
    test('returns a number for a valid formula', (): void => {
        const actual = calculateMolecularMass('C20H25N3O');

        const expected = 323.44;

        expect(actual).toBeCloseTo(expected);
    });

    test('throws an error for an invalid formula', (): void => {
        expect((): number => calculateMolecularMass('C20X666')).toThrow(
            'invalid element formula: "X666"',
        );
    });
});
