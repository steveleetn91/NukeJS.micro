import TESTCOMPONENT from "../components/TestComponent.nuk";
import "../../assets/global.scss";
import { FANPAGECOMPONENT } from "../components/FanpageComponent.nuk";
import POINTCOMPONENT from "../components/PointComponent.nuk";
import BUTTONCOMPONENT from "../components/ButtonComponent.nuk"
import DEFAULTLAYOUT from "../layouts/DefaultLayout.nuk";
import NukeJSRoute from "nukejs-router/dist/libs/NukeJSRoute";
export default class Index {
    constructor() {
        this.status = {
            count: 0,
            isSubmit: false
        }
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
                    <div id="pointComponent-text"
                        class="pointComponent-text">
                        <POINTCOMPONENT>
                            <span style="color:red">Nuk{this.status.count
                                >= 10 ? this.status.count : '0' + this.status.count}</span>
                        </POINTCOMPONENT>
                    </div>
                    <BUTTONCOMPONENT params="nukepage.submit">+ 1 Point</BUTTONCOMPONENT>
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
        document.getElementById("root").innerHTML = _();
    }
}