import {v4} from "uuid"

export function add(a: number, b: number) {
  return `${a} + ${b} = ${a + b}, uuid = ${v4()}`;
}
