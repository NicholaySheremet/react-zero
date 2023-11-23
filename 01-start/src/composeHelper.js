const compose = (...functions) =>
  functions.reduceRight(
    (previousFunction, nextFunction) =>
      (...args) =>
        nextFunction(previousFunction(...args)),
    (value) => value
  );

export default compose;
