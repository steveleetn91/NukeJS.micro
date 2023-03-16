export default function HeaderComponent(data){
    return <NukApp>
        <div class="header">
           <img class="logo-image" src="Nuk{require('../../assets/images/logo.png')}"/> Nuk{data}
        </div>
    </NukApp>
}