# Storyblok Typescript Next.js Tailwind Starter

This is a starter project for Next.js with Storyblok, Typescript and Tailwind CSS. It is based on the [Storyblok Next.js Ultimate Tutorial](https://www.storyblok.com/tp/nextjs-headless-cms-ultimate-tutorial) and uses the [Storyblok Generate TS](https://github.com/dohomi/storyblok-generate-ts)

## How to get started?

### 1. Clone the repo

```sh
  $ git clone https://github.com/storyblok/next.js-ultimate-tutorial.git
```

### 2. Install all dependecies 
```sh
$  yarn # or npm install
```

### 3. Adding the Access token
Create a new empty Space and exchange the preview token with your own in ```pages/_app.tsx```.

```js
// in pages/_app.tsx
storyblokInit({
  accessToken: "your-preview-token",
  use: [apiPlugin],
  components,
});
```

### 4. Run your project
Set the preview domain in <strong>Storyblok</strong> to `http://localhost:3000/`

```sh
# to run in developer mode
$ yarn dev # or npm run dev
```

```sh
# to build your project
$ yarn build # or npm run build
```

### 5. Start a development server with https proxy: 
```sh
// Install mkcert for creating a valid certificate (Mac OS):

          $ brew install mkcert
          $ mkcert -install
          $ mkcert localhost
        
// Then install and run the proxy

          $ npm install -g local-ssl-proxy
          $ local-ssl-proxy --source 3010 --target 3000 --cert localhost.pem --key localhost-key.pem
        
// https is now running on port 3010 and forwarding requests to http 3000
```

### 6. To generate TS types based on Storyblok components run:
```sh
$ storyblok pull-components --space=[SPACE_ID]
"generate-sb-types": "storyblok-generate-ts source=./components.[SPACE_ID].json target=./component-types-sb"
```
Don't forget to replace [SPACE_ID] with your own space id and make sure storyblok is installed (npm i storyblok -g)



## Resources

- [Next.js docs](https://nextjs.org/docs/#setup)
- [Storyblok Next.js Ultimate Tutorial](https://www.storyblok.com/tp/nextjs-headless-cms-ultimate-tutorial)
- [Storyblok Generate TS](https://github.com/dohomi/storyblok-generate-ts)


  