import { readFormulaInput } from '../src/readFormulaInput';

const ARGS = ['node', 'index.js'];

describe('reading formula input', (): void => {
    test('returns a formula for a valid formula', (): void => {
        process.argv = [...ARGS, 'C20H25N3O'];

        const actual = readFormulaInput();

        const expected = 'C20H25N3O';

        expect(actual).toStrictEqual(expected);
    });

    test('throws an error for no formula provided', (): void => {
        process.argv = ARGS;

        expect((): string => readFormulaInput()).toThrow(
            'No formula argument provided. Usage example:\nmolecular-mass C20H25N3O',
        );
    });
});
