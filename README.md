# Link-text-with-chatGPT-using-Chrome
首先在本地计算机上克隆此存储库

**安装依赖项**
如果已经安装了node的话，不用管这行，否则需要进行安装，可以按照[windows安装npm教程](https://blog.csdn.net/zhouyan8603/article/details/109039732#:~:text=windows%E5%AE%89%E8%A3%85npm%E6%95%99%E7%A8%8B%201%202%E3%80%81nodejs%E4%B8%8B%E8%BD%BD%E7%BD%91%E5%9D%80%EF%BC%9A%20https%3A%2F%2Fnodejs.org%2Fen%2F%20%E3%80%90%E5%A6%82%E6%9E%9C%E5%AB%8C%E4%B8%8B%E8%BD%BD%E7%9A%84%E6%85%A2%EF%BC%8C%E5%8F%AF%E4%BB%A5%E4%B8%8B%E8%BD%BD%E5%85%B6%E4%BB%96%E7%BD%91%E7%AB%99%E4%B8%8A%E7%9A%84%EF%BC%8C%E5%88%AB%E4%BA%BA%E6%9C%89%E7%8E%B0%E6%88%90%E7%9A%84%EF%BC%8C%E4%B8%8B%E8%BD%BD%E7%9A%84%E6%AF%94%E8%BE%83%E5%BF%AB%E3%80%91%202%203%E3%80%81%E4%B8%8B%E8%BD%BD%E5%A5%BD%E5%90%8E%EF%BC%8C%E5%8F%8C%E5%87%BB%E5%AE%89%E8%A3%85%EF%BC%9A%203,6%E3%80%81%E9%80%89%E6%8B%A9%E5%AE%89%E8%A3%85%E8%B7%AF%E5%BE%84%EF%BC%9A%206%207%E3%80%81%E4%BC%9A%E9%BB%98%E8%AE%A4%E8%87%AA%E5%B7%B1%E6%B7%BB%E5%8A%A0%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F%EF%BC%9A%207%208%E3%80%81%E6%8E%A5%E4%B8%8B%E5%8E%BB%E4%B8%80%E8%B7%AF%E2%80%9Cnext%E2%80%9D%EF%BC%8C%E6%9C%80%E5%90%8E%E7%82%B9%E5%87%BBfinish%208%209%E3%80%81%E5%AE%89%E8%A3%85%E5%A5%BD%E5%90%8E%EF%BC%8C%E5%AF%B9%E5%BA%94%E7%9A%84%E5%90%84%E4%B8%AA%E6%96%87%E4%BB%B6%E7%9A%84%E4%BD%9C%E7%94%A8%EF%BC%9A%20%E6%9B%B4%E5%A4%9A%E9%A1%B9%E7%9B%AE)。
```
npm install
```
复制到一个名为.env和名为.env-example的新文件中，并添加您的 ChatGPT 电子邮件和密码。

运行服务器，以便扩展可以与 ChatGPT 通信，
```
node server.js
```
这将通过无头Chrome浏览器自动与ChatGPT进行交互，这要归功于chatgpt-api库。运行服务器后，您将看到浏览器弹出。它应该会自动让您登录，但您可能需要手动解决验证码才能完成该过程。

**添加扩展**

转到谷歌浏览器中的 chrome://extensions

选中右上角的开发者模式

单击“加载已解压的扩展程序”以查看文件选择对话框

选择您的本地目录chatgpt-chrome-extension/extension

现在，如果您右键单击任何文本输入或内容可编辑区域，您将看到Ask ChatGPT。

中国人不骗中国人，感谢支持！！！
