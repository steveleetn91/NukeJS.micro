# 🚀 Welcome to NUKEJS - VERSION MICRO!

This is document to use NukeJS Micro

## How to install? 

- First step: 
    - Go to root project and run command line: `git clone https://github.com/steveleetn91/NukeJS.micro.git`
- Next step:    
    - After got done clone. You need install `npm install`

## How to build? 
- Go to root project and run command line: `npm run build`
## How to run development server? 
- Go to root project and run command line: `npm run build`
## Structure 

- Rules:
    - To start a Nuke page you need use like this:
        `$NukPage = {
            status : {
            },
            beforeRender : () => {
                // will call before render step 
            },
            afterRender : () => {
                // will call after render step 
            },
            render: () => {
                return <NukApp></NukApp>
            } 
        }`
    - To print any things:
        - You need type ` Nuk{yourVariable/yourFunction/yourComponent}`
        - Example include component:
            - ` Nuk{TestComponent(<Box></Box>)} `

- Pages:
    - To config pages you need modifine at `package.json` in key `pages` 
    - Example:
        `"pages": {
            "index": "./src/index.nuk.js",
            "index/index2": "./src/index/index2.nuk.js"
        }` 

- Assets
    - scss 
        - to import scss file you need type `import ./you-file.scss`;
    - image 
        - to import image file you need type `require('./your-image.png')`;


