import TESTCOMPONENT from "../components/TestComponent.nuk";
import "../../assets/global.scss";
import { FANPAGECOMPONENT } from "../components/FanpageComponent.nuk";
import POINTCOMPONENT from "../components/PointComponent.nuk";
import BUTTONCOMPONENT from "../components/ButtonComponent.nuk"
import DEFAULTLAYOUT from "../layouts/DefaultLayout.nuk";
import NukeJSRoute from "nukejs-router/dist/libs/NukeJSRoute";
import NukeJSCore from "nukejscore";
export default class Index {
    constructor() {
        this.route = new NukeJSRoute();
        this.core = new NukeJSCore();
        this.status = {
            count: this.core.hooks.useState("INDEXCOUNT",0)
        }
    }
    beforeRender() {
        console.log('this.route', this.route);
    }
    afterRender() {

    }
    submit() {
        nukepage.status.count.set(Number(nukepage.status.count.get()) + 1);
    }
    redirect(url = "") {
        return window.history.pushState({}, "", url);
    }
    render() {
        const _ = () => {
            return <NukApp>
                <DEFAULTLAYOUT>
                    <div id="pointComponent-text"
                        class="pointComponent-text">
                        <POINTCOMPONENT>
                            <span style="color:red">Nuk{Number(this.status.count.get())
                                >= 10 ? this.status.count.get() : '0' + this.status.count.get()}</span>
                        </POINTCOMPONENT>
                    </div>
                    <BUTTONCOMPONENT params="this.submit">+ 1 Point</BUTTONCOMPONENT>
                    <div class="test-component"><TESTCOMPONENT params="this.status">
                        <span>Hello guys. I'm Test Component, you can seen me at <code>./src/components/TestComponent.nuk.js</code></span>
                    </TESTCOMPONENT></div>
                    <hr />
                    <FANPAGECOMPONENT>
                        <span>Like fanpage to get new information</span>
                    </FANPAGECOMPONENT>
                    <hr />
                    <a click="nukepage.redirect('/home')"> >> Go to home</a>
                </DEFAULTLAYOUT>
            </NukApp>
        }
        this.core.doom.build("root", _());
    }
}