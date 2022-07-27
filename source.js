const curryLimitReverseCore = (limit, executor, ...parameters) => parameters.length < limit
  ? Object.defineProperty((...nextParameters) => curryLimitReverseCore(limit, executor, ...parameters, ...nextParameters),
    "length",
  {
    enumerable   : false,
    configurable : false,
    writable     : false,
    value        : limit - parameters.length
  })
  : executor(...args);

module.exports = curryLimitReverseCore;
