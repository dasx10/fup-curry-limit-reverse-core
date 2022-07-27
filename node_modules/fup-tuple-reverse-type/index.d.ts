type TupleReverseType <Tuple extends readonly unknown[]> = Tuple extends readonly [infer Value, ...infer NextTupleValues]
    ? [...TupleReverseType<NextTupleValues>, Value]
    : [];

export default TupleReverseType;