# ts-cli-test

「実践Node.js入門」のcli_testのTypeScriptでの実装

## このパッケージの0からの再現方法

### 初期設定

```bash
npm init -y
npm install typescript --save-dev
npm install @types/node --save-dev
npx tsc --init --rootDir src --outDir lib --esModuleInterop --resolveJsonModule --lib es6,dom --module commonjs
echo node_modules >> .gitignore
mkdir src
mkdir test
```

```bash
$ tree -L 1
.
├── LICENSE
├── node_modules
├── package.json
├── package-lock.json
├── README.md
├── src
├── test
└── tsconfig.json

3 directories, 5 files
```

```
npm i yargs
npm i --save-dev @types/yargs
npm i --save-dev ts-node
npm i --save-dev no-daemon
```
