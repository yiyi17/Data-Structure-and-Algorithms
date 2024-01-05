/**
 * type A = {aa: string; Bb: string; cc_Dd: string}
 * type B = {aa: string; bb: string; ccDd: string}
 * 写个 Camel 类型，完成这种转换
 */

 type A = {aa: string; Bb: string; cc_Dd_ee: {cc_dd:string}}

// 思路
// 1、编写 CameCase，支持下划线传驼峰
// 2、递归执行 Camel，支持嵌套
// 3、增加一次计算，嵌套也支持
type Camel<Obj> = Obj extends any ? {
  [Key in keyof Obj as CameCase<Lowercase<Key & string>>]: 
    Obj[Key] extends Record<string, any>
      ? Camel<Obj[Key]>
      : Obj[Key]
} : never

type CameCase<Str extends string> = 
  Str extends `${infer Left}_${infer Rest}`
    ? `${Left}${CameCase<Capitalize<Rest>>}`
    : Str

type res = Camel<A>

