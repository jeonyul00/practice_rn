import api from '../api/axios';

function setHeader(key: string, value: string) {
  api.defaults.headers.common[key] = value;
}

function removeHeader(key: string) {
  if (!api.defaults.headers.common[key]) {
    return;
  }
  delete api.defaults.headers.common[key];
}

export {setHeader, removeHeader};
