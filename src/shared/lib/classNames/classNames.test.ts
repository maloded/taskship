import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('someClass')).toBe('someClass');
    });

    test('with additional classes', () => {
        const additional = ['class1', 'class2'];
        expect(classNames('some-class', {}, additional)).toBe('some-class class1 class2');
    });

    test('with mods', () => {
        const mods = {
            enabled: true,
            disabled: false,
            visible: 'yes',
        };
        expect(classNames('some-class', mods)).toBe('some-class enabled visible');
    });

    test('with all params', () => {
        const mods = {
            enabled: true,
            disabled: false,
            visible: 'yes',
        };
        const additional = ['class1', 'class2'];
        expect(classNames('some-class', mods, additional))
            .toBe('some-class class1 class2 enabled visible');
    });
});
