const server = "https://jsonplaceholder.typicode.com";
export default function <T>(
  input: RequestInfo,
  init?: RequestInit
): Promise<T> {
  return new Promise(async (reslove, reject) => {
    const res = await fetch(`${server}${input}`, init);
    if (res.status !== 200) reject();
    return res.json().then(reslove).catch(reject);
  });
}
