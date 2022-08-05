import type TupleConsistentType  from 'fup-tuple-consistent-type';
import type TupleGainType        from 'fup-tuple-gain-type';
import type TupleReverseType     from 'fup-tuple-reverse-type';
import type CurryLimitResultType from 'fup-curry-limit-result-type';

export type CurryLimitReverseCore<
    ExpectedParameters extends readonly unknown[] = unknown[],
    ExpectedResult     extends unknown = unknown,
    ExpectedLimit      extends number  = number,
> = <
  Limit       extends ExpectedLimit,
  Parameters  extends ExpectedParameters,
  Result      extends ExpectedResult,
  Arguments   extends TupleConsistentType<TupleGainType<Limit, TupleReverseType<Parameters>>>
> (limit: Limit, executor: (...parameters: Parameters) => Result, ...arguments: Arguments) => CurryLimitResultType<
    Limit,
    Arguments,
    TupleReverseType<Parameters>,
    Result
>;

/**
 * @example
 * const sum    = (...numbers) => numbers
 *   .reduce((added, num) => added + num, 0); 
 * const sum2   = curryLimitReverseCore(2, sum); // (y, x) => y + x | y => x => y + x
 * const add1   = sum2(1);                       // (x) => 1 + x
 * const result = add1(2);                       // 3
 * const x      = sum2(10, 20);                  // 30
 */
declare const curryLimitReverseCore: CurryLimitReverseCore;
export default curryLimitReverseCore;

