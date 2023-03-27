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
- Go to root project and run command line: `npm run serve`
## Structure 

- Rules:
    - To start a Nuke page you need use like this:
        ![image description](page.JPG)
    - To print any things:
        - You need type ` Nuk{yourVariable}`
        - To include an compoent you need create new a component with name is uppercase letter. Example include component:
            - ` <EXAMPLECOMPONENT> <span>Hello </span> Nuk{yourVariable} </EXAMPLECOMPONENT> `
    - Again I remember to you component name always will be uppercase letter. And don't use any `functions` on `<NukApp>`, it's only component. So If I need call API before load UI for component? How we do it? Very easy, you have seen you compoent function our have a space before return `<NukApp>`. Do a something in that. Of course if has any events in compoent you can use `ComponentRender` to rerender again for that component.
    - In case you need use data for component, so let's try use ` params="$NukPage.status" `. Example: `<EXAMPLECOMPONENT params="$NukPage.status"> Your point Nuk{componentParam.point} </EXAMPLECOMPONENT>`:
        ![image description](cpn.JPG)
    - In NukeJS version micro our need use a function support for action callback on components: `Nuke.registerCallback(key,callback)`. In this case text of param Key will automatic uppercase letter. Let's consider in `ButtonComponent` of example source code.
- Lifecycle 
    - Waiting for update

- Assets
    - scss 
        - to import scss file you need type `import ./you-file.scss`;
    - image 
        - to import image file you need type `require('./your-image.png')`. Example `<img src="Nuk{require('../assets/your-image.png')}"/>`;


- Manage status
    - To update and render page again use `Nuke.setStatus(key,value)`. You can set value be any type : `object,string,number,function`.
    - Remember: Don't forget define your status before `setStatus`.
- Render 
    - render only at a div or a component use: `Nuke.ComponentRender(root_id,NukeElement)`. Mean is only render at element has that id.