/**
 * Copyright (C) 2016 yanni4night.com
 * index.js
 *
 * changelog
 * 2016-08-30[14:08:39]:revised
 *
 * @author yanni4night@gmail.com
 * @version 0.1.0
 * @since 0.1.0
 */
'use strict';

export default (descendant, ancestor) => {
    if (descendant == null || ancestor == null) {
        return false;
    }
    
    const proto = ancestor.prototype;
    
    let node = descendant;
    
    do {
        if (node === proto) {
            return true;
        }
        node = node.__proto__;
    } while (node != null);

    return false;
};