import TESTCOMPONENT from "../components/TestComponent.nuk";
import "../../assets/global.scss";
import { FANPAGECOMPONENT } from "../components/FanpageComponent.nuk";
import POINTCOMPONENT from "../components/PointComponent.nuk";
import BUTTONCOMPONENT from "../components/ButtonComponent.nuk"
import DEFAULTLAYOUT from "../layouts/DefaultLayout.nuk";
$NukPage = {
    status: {
        count: 0,
        isSubmit: false
    },
    beforeRender: () => {

    },
    afterRender: () => {

    },
    submit() {
        // if(this.isSubmit === true) {
        //     return;
        // }
        // this.isSubmit = true;
        $NukPage.status.count = Number($NukPage.status.count);
        $NukPage.status.count++;
        // this will render page again
        Nuke.setStatus('count', $NukPage.status.count);
        // this's only render at element has id register
        Nuke.ComponentRender('test-test-cpn', <NukApp>
            <div style="color:green">
                This component only load while you has been submited, and no rerender page
            </div>
        </NukApp>);
        // setTimeout(() => {
        //     Nuke.ComponentRender('test-test-cpn',<NukApp></NukApp>);
        //     this.isSubmit = false;
        // }, 3000);
    },
    render: () => {
        return <NukApp>
            <DEFAULTLAYOUT>
                <div id="pointComponent-text"
                    class="pointComponent-text">
                    <POINTCOMPONENT>
                        <span style="color:red">Nuk{$NukPage.status.count
                            >= 10 ? $NukPage.status.count : '0' + $NukPage.status.count}</span>
                    </POINTCOMPONENT>
                </div>
                <BUTTONCOMPONENT params="$NukPage.submit">+ 1 Point</BUTTONCOMPONENT>
                <div class="test-component"><TESTCOMPONENT params="$NukPage.status">
                    <span>Hello guys. I'm Test Component, you can seen me at <code>./src/components/TestComponent.nuk.js</code></span>
                </TESTCOMPONENT></div>
                <hr />
                <FANPAGECOMPONENT>
                    <span>Like fanpage to get new information</span>
                </FANPAGECOMPONENT>
                <hr />
                <div id="test-test-cpn"></div>
            </DEFAULTLAYOUT>
        </NukApp>
    }
}
