// deno-lint-ignore-file no-unused-vars
import 'https://gist.githubusercontent.com/qwtel/b14f0f81e3a96189f7771f83ee113f64/raw/TestRequest.ts'
import {
  assert,
  assertExists,
  assertEquals,
  assertStrictEquals,
  assertStringIncludes,
  assertThrows,
  assertRejects,
  assertArrayIncludes,
} from 'https://deno.land/std@0.133.0/testing/asserts.ts'
const { test } = Deno;

import * as Package from '../index.ts'

test('exists', () => {
  assertExists(Package.TypedEventTarget)
})

test('types only', () => {
  class Foo extends Package.TypedEventTarget<{ 
    "error": ErrorEvent
    "custom": CustomEvent<string>
  }> {}
  const foo = new Foo();
  assert(foo instanceof EventTarget)
  assert(Object.getPrototypeOf(Foo.prototype) === EventTarget.prototype)
})
