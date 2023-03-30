import "../../assets/global.scss";
import DEFAULTLAYOUT from "../layouts/DefaultLayout.nuk";
import NukeJSRoute from "nukejs-router/dist/libs/NukeJSRoute";
import NukeJSCore from "nukejscore";
export default class Index {
    constructor() {
        this.core = new NukeJSCore();
        this.route = new NukeJSRoute();
    }
    beforeRender() {
        console.log('this.route',this.route);
    }
    afterRender() {

    }
    submit() {
        this.status.count = Number(this.status.count);
        this.status.count++;
        this.render();
    }
    redirect(url = ""){
        return window.history.pushState({},"",url);
    }
    render() {
        const _ = () => {
            return <NukApp>
                <DEFAULTLAYOUT>
                    <h1>Not found page</h1>
                    <hr />
                    <a click="nukepage.redirect('/home')"> >> Go to home</a>
                </DEFAULTLAYOUT>
            </NukApp>
        }
        this.core.doom.build("root", _());
    }
}