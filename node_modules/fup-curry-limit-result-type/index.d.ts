import type CurryResultType from "fup-curry-result-type";
import type TupleGainType   from "fup-tuple-gain-type";

type CurryLimitResultType <
    Limit      extends number,
    Arguments  extends readonly unknown[],
    Parameters extends readonly unknown[],
    Result     extends          unknown = unknown,
> = Limit extends Arguments['length']
    ? Result
    : CurryResultType<TupleGainType<Limit, Parameters>, Arguments, Result>;

export default CurryLimitResultType;