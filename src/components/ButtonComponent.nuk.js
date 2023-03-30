import NukeJSCore from "nukejscore"

export default function BUTTONCOMPONENT(data,callback) {
    const nukejsCore = new NukeJSCore;
    return <NukApp>
        <button click="Nuk{nukejsCore.clientCallback.create(callback)}">Nuk{data}</button>
    </NukApp>
}