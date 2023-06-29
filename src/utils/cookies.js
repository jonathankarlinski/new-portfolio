import Cookies from 'js-cookie';


const expiresDate = new Date();
expiresDate.setDate(expiresDate.getDate() + 7);

export function setCookie(key, value, expiresDate) {
  Cookies.set(key, value, { expiresDate });
}

export function getCookie(key) {
  return Cookies.get(key);
}
