export const delay = (ms: number) =>
  new Promise(res => {
    setTimeout(() => {
      res(true);
    }, ms);
  });


export const notLessThan = async <T>(
  req: () => Promise<T> | T,
  timer: number,
): Promise<T> => {
  const [data] = await Promise.all([req(), delay(timer)]);

  return data;
};
