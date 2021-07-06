export enum RequestMethods {
  POST = 'POST',
  GET = 'GET',
  PUT = 'PUT',
}

type ApiServiceProps = {
  method: RequestMethods;
  url: string;
};

const headers: HeadersInit = {
  'Content-Type': 'application/json;charset=utf-8',
};

export const api = ({ method, url }: ApiServiceProps) => {
  return fetch(url, { headers, method: method as unknown as string })
    .then(res => res.json())
    .then(data => {
      return data;
    })
    .catch(err => {
      // @NOTE: We can handle error here, eg. send it to some logging service
      console.log(err);
      throw err;
    });
};
