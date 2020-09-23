# electron-vue

It is my first electron-vue using https://nklayman.github.io/vue-cli-plugin-electron-builder/
For this project, I build mailbox that allow you to enter your email and password (gmail account, which you should to make you google account in less secure mode)


But, I cannot package it using electron-packager, because there is some issue with the vue-cli-plugin-electron-builder itself.
But, I already make another project that you can install (.exe), here : https://github.com/yusronhanan/electron-vue-mailbox/

You need to run the server too which I build it using express.js and epsitec-imap-simple for fetch the email (subject, from, and date), here : https://github.com/yusronhanan/express-imap
## Project setup
```
npm install
```

### Run it
```
npm run electron:serve
```



### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
