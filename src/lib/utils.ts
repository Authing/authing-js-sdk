import { KeyValuePair } from '../types';
import { UdfDataType } from '../types/graphql.v2';
const { JSEncrypt } = require('./jsencrypt');

export function encrypt(plainText: string, publicKey: string) {
  const _this = this;
  return new Promise<string>((resolve, reject) => {
    // 国密支持，动态引入
    if (_this.options?.encryption?.type === 'sm2') {
      try {
        const { sm2 } = require('sm-crypto')
        const encrypted = sm2.doEncrypt(plainText, _this.options.encryption.publicKey);
        resolve(encrypted);
      } catch (err) {
        throw new Error('未安装模块: sm-crypto');
      }
    } else {
      console.log(_this.options?.encryption)
      throw new Error('未配置sm2');
    }
    const jsencrypt = new JSEncrypt({});
    jsencrypt.setPublicKey(publicKey); // 设置公钥

    const encrypted = jsencrypt.encrypt(plainText);

    if (encrypted) {
      resolve(encrypted);
    } else {
      reject(encrypted);
    }
  });

  // // 动态引入，为了在 rn 小程序等环境下构建的时候不会报错
  // const crypto = require('crypto');
  // const pawBuffer = Buffer.from(plainText);
  // const encryptText = crypto
  //   .publicEncrypt(
  //     {
  //       key: Buffer.from(publicKey), // 如果通过文件方式读入就不必转成Buffer
  //       padding: 1
  //       // padding: crypto.constants.RSA_PKCS1_PADDING
  //     },
  //     pawBuffer
  //   )
  //   .toString('base64');
  // return encryptText;
};

export default function buildTree(nodes: any[]) {
  /* nodes structure
  [
    {"id": "1", "children": ["2"], "root": true},
    {"id": "2", "children": ["3", "4"], "root": false},
    {"id": "3", "children": [], "root": false},
    {"id": "4", "children": [], "root": false},
  ]

  转换成 ->
  {
    id: 1,
    children: [
      {
        id: 2,
        children: [
          {
            id: 3,
            children: []
          },
          {
            id: 4,
            children: []
          }
        ]
      }
    ]
  }
  */

  const rootNodes = [nodes.find(x => x.root === true)];
  const mapChildren = (childId: any) => {
    const node = nodes.find(x => x.id === childId) || null;
    if (Array.isArray(node.children) && node.children.length > 0) {
      node.children = node.children
        .map(mapChildren)
        .filter((node: any) => node !== null);
    }
    return node;
  };
  const tree = rootNodes.map(node => {
    node.children = node.children
      .map(mapChildren)
      .filter((node: any) => node !== null);
    return node;
  });
  return tree[0];
}

export const deepEqual = function(x: any, y: any) {
  if (x === y) {
    return true;
  } else if (
    typeof x == 'object' &&
    x != null &&
    typeof y == 'object' &&
    y != null
  ) {
    if (Object.keys(x).length != Object.keys(y).length) return false;

    for (var prop in x) {
      if (y.hasOwnProperty(prop)) {
        if (!deepEqual(x[prop], y[prop])) return false;
      } else return false;
    }

    return true;
  } else return false;
};

export const popupCenter = (
  url: string,
  { w, h }: { w: number; h: number } = { w: 585, h: 649 }
) => {
  // Fixes dual-screen position                             Most browsers      Firefox
  const dualScreenLeft =
    window.screenLeft !== undefined ? window.screenLeft : window.screenX;
  const dualScreenTop =
    window.screenTop !== undefined ? window.screenTop : window.screenY;

  const width = window.innerWidth
    ? window.innerWidth
    : document.documentElement.clientWidth
    ? document.documentElement.clientWidth
    : window.screen.width;
  const height = window.innerHeight
    ? window.innerHeight
    : document.documentElement.clientHeight
    ? document.documentElement.clientHeight
    : window.screen.height;

  const systemZoom = width / window.screen.availWidth;
  const left = (width - w) / 2 / systemZoom + dualScreenLeft;
  const top = (height - h) / 2 / systemZoom + dualScreenTop;
  const newWindow = window.open(
    url,
    '_blank',
    `
      toolbar=no,
      menubar=no,
      scrollbars=no,
      resizable=no,
      location=no,
      status=no
      width=${w / systemZoom},
      height=${h / systemZoom},
      top=${top},
      left=${left}
      `
  );

  newWindow?.focus();
};

export const createCssClassStyleSheet = (
  className: string,
  styleSheet: any
) => {
  let styleTag = document.createElement('style');
  let styleText = `
    .${className} {
      ${styleSheet}
    }
  `;
  let textNode = document.createTextNode(styleText);
  styleTag.appendChild(textNode);
  document.head.appendChild(styleTag);
};

export const serialize = function(obj: any) {
  var str = [];
  for (var p in obj)
    if (obj.hasOwnProperty(p)) {
      if (obj[p] !== undefined) {
        str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
      }
    }
  return str.join('&');
};

export const convertUdv = (
  data: Array<{ key: string; dataType: UdfDataType; value: any }>
): Array<{ key: string; dataType: UdfDataType; value: any }> => {
  for (const item of data) {
    const { dataType, value } = item;
    if (dataType === UdfDataType.Number) {
      item.value = JSON.parse(value);
    } else if (dataType === UdfDataType.Boolean) {
      item.value = JSON.parse(value);
    } else if (dataType === UdfDataType.Datetime) {
      item.value = new Date(parseInt(value));
    } else if (dataType === UdfDataType.Object) {
      item.value = JSON.parse(value);
    }
  }
  return data;
};

const isNumeric = (str: string) => {
  if (typeof str != 'string') return false; // we only process strings!
  return (
    // @ts-ignore
    !isNaN(str) && !isNaN(parseFloat(str)) // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
  ); // ...and ensure strings of whitespace fail
};

export const convertUdvToKeyValuePair = (
  data: Array<{ key: string; dataType: UdfDataType; value?: any }>
): KeyValuePair => {
  data = data || [];
  for (const item of data) {
    const { dataType, value } = item;
    if (dataType === UdfDataType.Number) {
      item.value = JSON.parse(value);
    } else if (dataType === UdfDataType.Boolean) {
      item.value = JSON.parse(value);
    } else if (dataType === UdfDataType.Datetime) {
      item.value = isNumeric(value)
        ? new Date(parseInt(value))
        : new Date(value);
    } else if (dataType === UdfDataType.Object) {
      item.value = JSON.parse(value);
    }
  }
  const ret: any = {};
  for (const item of data) {
    ret[item.key] = item.value;
  }
  return ret;
};

export const isWechatBrowser = () =>
  typeof navigator !== 'undefined' &&
  /MicroMessenger/i.test(navigator?.userAgent);

export const isLarkBrowser = () => {
  return typeof navigator !== 'undefined' && /Lark/i.test(navigator.userAgent);
};

export const isMobileBrowser = () => {
  return isWechatBrowser() || isLarkBrowser();
};

export const formatAuthorizedResources = (resources: any[]) => {
  return resources.map(resource => {
    for (const key in resource) {
      if (!resource[key]) {
        delete resource[key];
      }
    }
    return resource;
  });
};

export function generateUidKey(number: number) {
  var map = [];
  for (let i = 97; i < 123; i++) {
    map.push(String.fromCharCode(i));
  }
  let arr = [];
  while (number--) {
    let rand = Math.floor(Math.random() * 16);
    arr.push(map[rand]);
  }
  return arr.join('');
}

interface UploadRes {
  key: string;
  url: string;
}
export const xhrUpload = (
  file: File | Blob,
  url: string
): Promise<UploadRes> => {
  return new Promise((resolve, reject) => {
    let formData = new FormData();
    formData.append(
      'file',
      file,
      file instanceof Blob ? 'personal.jpeg' : undefined
    );
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      // 上传成功
      if (this.readyState === 4) {
        try {
          const res = JSON.parse(this.responseText);
          const { code, message, data } = res;
          if (code !== 200) {
            reject({
              code,
              message
            });
          }
          resolve(data);
        } catch (error) {
          const code = 500;
          const message = `上传图片失败, error = ${error.message}`;
          reject({
            code,
            message
          });
        }
      }
    };
    xhr.open('POST', url);
    xhr.send(formData);
  });
};

export function uploadFile<T extends boolean = false>(opts: {
  accept: string;
  multiple?: T;
  url: string;
}): Promise<T extends true ? UploadRes[] : UploadRes> {
  type Res = T extends true ? UploadRes[] : UploadRes;

  const { url, accept, multiple } = opts;

  return new Promise((resolve, reject) => {
    const inputElem = document.createElement('input');
    inputElem.type = 'file';
    inputElem.accept = accept;
    inputElem.multiple = multiple;

    inputElem.onchange = () => {
      const files = inputElem.files;

      if (!multiple) {
        const file = files[0];
        xhrUpload(file, url)
          .then(res => resolve(res as Res))
          .catch(error => reject(error));
      } else {
        let promises = [];
        let i = 0;
        while (i < files.length) {
          promises.push(xhrUpload(files[i], url));
          i++;
        }

        Promise.all(promises)
          .then(res => resolve(res as Res))
          .catch(error => reject(error));
      }
    };
    inputElem.click();
  });
}

export const convertKeyValueListToObject = (
  data: Array<{ key: string; value: any }>
) => {
  const ret: any = {};
  for (const { key, value } of data) {
    ret[key] = value;
  }
  return ret;
};

export const convertObjectToKeyValueList = (data: { [x: string]: any }) => {
  const ret = [];
  for (const key of Object.keys(data)) {
    ret.push({
      key,
      value: data[key]
    });
  }
  return ret;
};

export function generateRandomString(length: number = 30) {
  let result = '';
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export const pickBy = (obj: any, predicate: (value: any, key: string) => boolean) => {
  const ret: any = {};
  for (const key of Object.keys(obj)) {
    if (predicate(obj[key], key)) {
      ret[key] = obj[key];
    }
  }
  return ret;
}
