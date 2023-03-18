import TESTCOMPONENT from "../components/TestComponent.nuk";
import "../../assets/global.scss";
import HEADERCOMPONENT from "../components/HeaderComponent.nuk";
import { FANPAGECOMPONENT } from "../components/FanpageComponent.nuk";
import POINTCOMPONENT from "../components/POINTCOMPONENT.nuk";
$NukPage = {
    status : {
        count: 0
    },
    beforeRender : () => {

    },
    afterRender : () => {
 
    },
    submit(){
        $NukPage.status.count = Number($NukPage.status.count);
        $NukPage.status.active = $NukPage.status.active === true ? false : true;
        Nuke.setStatus('count',$NukPage.status.count++);
    },
    render: () => {
        return <NukApp>
            <div class="container">
                <HEADERCOMPONENT>
                    <span>NukeJS Version Micro</span>
                </HEADERCOMPONENT>
                <div class="content-box">
                    <div id="pointComponent-text" 
                    class="pointComponent-text">
                        <POINTCOMPONENT>
                            <span style="color:red">Nuk{$NukPage.status.count
                            >= 10 ? $NukPage.status.count : '0'+$NukPage.status.count}</span>
                        </POINTCOMPONENT>
                    </div>
                    <button click="$NukPage.submit()">+ 1 Point</button>
                    <div class="test-component"><TESTCOMPONENT>
                        <span>Hello guys. I'm Test Component, you can seen me at <code>./src/components/TestComponent.nuk.js</code></span>
                        </TESTCOMPONENT></div>
                    <hr/>
                    <FANPAGECOMPONENT>
                        <span>Like fanpage to get new information</span>
                    </FANPAGECOMPONENT>
                    <hr/>
                </div>
            </div>
        </NukApp>
    } 
}
