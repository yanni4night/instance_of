/**
  * Copyright (C) 2016 yanni4night.com
  * test.js
  *
  * changelog
  * 2016-08-30[14:25:18]:revised
  *
  * @author yanni4night@gmail.com
  * @version 0.1.0
  * @since 0.1.0
  */
'use strict';

import test from 'ava';
import instance_of from '../';

function Foo(){}

test(t=>t.truthy(instance_of(new Foo(), Foo)));
test(t=>t.truthy(instance_of(Foo, Function)));
test(t=>t.truthy(instance_of({}, Object)));
test(t=>t.truthy(instance_of(3, Number)));
test(t=>t.truthy(instance_of(false, Boolean)));
test(t=>t.truthy(instance_of('', String)));
test(t=>t.truthy(instance_of([], Array)));
test(t=>t.truthy(instance_of(function(){}, Function)));
