import { calculateMolecularMass } from '../src/calculateMolecularMass';

const MASS_PER_ELEMENT = new Map([
    ['C', 12.011],
    ['O', 15.999],
    ['H', 1.008],
    ['N', 14.007],
]);

describe('calculating molecular mass', (): void => {
    test('returns a number for a valid formula', (): void => {
        const actual = calculateMolecularMass('C20H25N3O', MASS_PER_ELEMENT);

        const expected = 323.44;

        expect(actual).toBeCloseTo(expected);
    });

    test('throws an error for an invalid formula', (): void => {
        expect((): number =>
            calculateMolecularMass('C20X666', MASS_PER_ELEMENT),
        ).toThrow('invalid element formula: "X666"');
    });
});
