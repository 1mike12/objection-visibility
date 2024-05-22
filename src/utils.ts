interface IObjectType {
  [k: string]: {};
}

export function pick(data: IObjectType, toPick: Set<string>) {
  return pickBy(data, toPick, (values, v) => values.has(v));
}

export function omit(data: IObjectType, toOmit: Set<string>) {
  return pickBy(data, toOmit, (values, v) => !values.has(v));
}

function pickBy(
  data: IObjectType,
  values: Set<string>,
  predicate: (values: Set<string>, v: string) => boolean
) {
  return Object.keys(data).reduce((c: IObjectType, v) => {
    if (predicate(values, v)) {
      c[v] = data[v];
      return c;
    }
    return c;
  }, {});
}
