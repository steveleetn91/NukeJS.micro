export default function BUTTONCOMPONENT(data,callback) {
    nukepage.BUTTONCOMPONENT_CLICK = callback;
    return <NukApp>
        <button click="nukepage.BUTTONCOMPONENT_CLICK()">Nuk{data}</button>
    </NukApp>
}