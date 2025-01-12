// import * as Cookies from 'js-cookie'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('redirect', (payload) => {
    if (payload.samepage) {
      nuxtApp.$router.replace({ path: payload.url });
    } else {
      window.location.href = payload.url;
    }
  });
  nuxtApp.provide('genTransId', () => {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
        (
            c ^
            (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
        ).toString(16)
    );
  });
  nuxtApp.provide('formatMoney', (payload) => {
    try {
      return payload == null || payload.amount == null
          ? ''
          : payload.amount
              .toString()
              .replace(/\D/g, '')
              .replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    } catch (e) {}
  });
  nuxtApp.provide('setCookie', (cname, cvalue, exdays) => {
    var d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    var expires = 'expires=' + d.toUTCString();
    document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
  });
  nuxtApp.provide('getCookie', (cname) => {
    var name = cname + '=';
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i].trim();
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return '';
  });
  nuxtApp.provide('isEmail', (str) => {
    let email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return email.test(str);
  });

  nuxtApp.provide('isNullOrEmpty', (str) => {
    return str === null || str === undefined || str === '' || str.length === 0;
  });

  nuxtApp.provide('isMobilePhone', (str) => {
    let phoneNot84 = /[0]{1}[35789]{1}[0-9]{8}$/;
    let phone84 = /^[84]{2}[35789]{1}[0-9]{8}$/;
    return phoneNot84.test(str) || phone84.test(str);
  });

  nuxtApp.provide('isHasSpecial', (str) => {
    let sp = "~;+@#$%^&*(){} |=-'";
    let strLower = str.toLowerCase();
    return strLower.split('').some(char => sp.indexOf(char) >= 0);
  });

  nuxtApp.provide('isHasSpecialll', (str) => {
    let sp = '#&[]{}';
    let strLower = str.toLowerCase();
    return strLower.split('').some(char => sp.indexOf(char) >= 0);
  });

  nuxtApp.provide('isHasVietnamese', (str) => {
    let vn =
        'àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ';
    let strLower = str.toLowerCase();
    return strLower.split('').some(char => vn.indexOf(char) >= 0);
  });

  nuxtApp.provide('nonAccentVietnamese', (str) => {
    str = str.toLowerCase();
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
    str = str.replace(/đ/g, 'd');
    str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ''); // dấu huyền, sắc, hỏi, ngã, nặng
    str = str.replace(/\u02C6|\u0306|\u031B/g, ''); // Â, Ê, Ă, Ơ, Ư
    str = str.replace(/\W/g, '-'); // kí tự đặc biệt
    return str;
  });
});