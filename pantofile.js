/**
 * Copyright (C) 2016 yanni4night.com
 * pantofile.js
 *
 * changelog
 * 2016-08-30[14:16:03]:revised
 *
 * @author yanni4night@gmail.com
 * @version 0.1.0
 * @since 0.1.0
 */
'use strict';

module.exports = panto => {
    require('load-panto-transformers')(panto);
    require('time-panto')(panto);

    panto.setOptions({
        cwd: __dirname,
        src: '.',
        output: 'dist'
    });

    panto.$('index.js').tag('index.js').read().babel({
        extend: '.babelrc'
    }).write();
};