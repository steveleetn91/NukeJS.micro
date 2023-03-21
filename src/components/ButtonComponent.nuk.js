export default function BUTTONCOMPONENT(data,callback) {
    Nuke.registerCallback('BUTTONCOMPONENT_CLICK',callback);
    return <NukApp>
        <button click="Nuke.BUTTONCOMPONENT_CLICK()">Nuk{data}</button>
    </NukApp>
}