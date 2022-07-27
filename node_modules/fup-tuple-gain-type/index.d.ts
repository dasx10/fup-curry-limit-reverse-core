type TupleGainType <
    Length        extends number,
    Parameters    extends readonly unknown[] = [],
    NewParameters extends readonly unknown[] = [],
> = Length extends Parameters['length']
    ? Parameters
    : NewParameters extends [infer Parameter, ...infer NextParameters]
        ? TupleGainType<Length, [...Parameters, Parameter], NextParameters>
        : TupleGainType<Length, [...Parameters, unknown], []>;

export default TupleGainType;