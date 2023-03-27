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
                    <h1>Not found page</h1>
                    <hr />
                    <a click="nukepage.redirect('/home')"> >> Go to home</a>
                </DEFAULTLAYOUT>
            </NukApp>
        }
        document.getElementById("root").innerHTML = _();
    }
}