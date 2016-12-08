import test from 'ava';
import easyImport from '../';

const msg = err => 'postcss-easy-import: ' + err;

test('should fail on incorrect \'prefix\'', t => {
    t.throws(() => {
        easyImport({
            prefix: 1
        });
    }, msg('\'prefix\' option should be a string or false'));
});

test('should not fail on correct \'prefix\'', t => {
    t.notThrows(() => {
        easyImport({
            prefix: 'some string'
        });
    });

    t.notThrows(() => {
        easyImport({
            prefix: false
        });
    });
});

test('should fail on incorrect \'extensions\'', t => {
    const error = msg(
        '\'extensions\' option should be string or array of strings'
    );

    t.throws(() => {
        easyImport({
            extensions: 1
        });
    }, error);

    t.throws(() => {
        easyImport({
            extensions: ''
        });
    }, error);

    t.throws(() => {
        easyImport({
            extensions: []
        });
    }, error);

    t.throws(() => {
        easyImport({
            extensions: ['']
        });
    }, error);
});

test('should not fail on correct \'extensions\'', t => {
    t.notThrows(() => {
        easyImport({
            extensions: '.css'
        });
    });

    t.notThrows(() => {
        easyImport({
            extensions: ['.css', '.scss']
        });
    });
});
