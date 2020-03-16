import configs from "../configs";
export default function selectAvatarFile(cb) {
  if (!configs.inBrowser) {
    throw Error("当前不是浏览器环境，无法选取文件");
  }
  const inputElem = document.createElement("input");
  inputElem.type = "file";
  inputElem.accept = "image/*";
  inputElem.onchange = () => {
    this._uploadAvatar({ photo: inputElem.files[0] }).then(res => {
      cb(res.photo);
    });
  };
  inputElem.click();
}
