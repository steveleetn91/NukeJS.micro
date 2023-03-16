import TestComponent from "./components/TestComponent.nuk";
import "../assets/global.scss";
import HeaderComponent from "./components/HeaderComponent.nuk";
import { FanpageComponent } from "./components/FanpageComponent.nuk";
$NukPage = {
    status : {
        active : true,
        count: 0
    },
    beforeRender : () => {

    },
    afterRender : () => {

    },
    submit(){
        $NukPage.status.count = Number($NukPage.status.count);
        $NukPage.status.count++;
        $NukPage.status.active = $NukPage.status.active === true ? false : true;
        Nuke.setStatus('count',$NukPage.status.count);
    },
    pointComponent(data){
        return <NukApp>
            <div>Nuk{data}</div>
        </NukApp>
    },
    render: () => {
        let _f = $NukPage.pointComponent(<Box>
            <span style="color:red">Nuk{$NukPage.status.count
            >= 10 ? $NukPage.status.count : '0'+$NukPage.status.count}</span>    
        </Box>);
        return <NukApp>
            <div class="container">
                Nuk{HeaderComponent(<Box>
                    <span>NukeJS Version Micro</span>
                </Box>)}
                <div class="content-box">
                    <div id="pointComponent-text" 
                    class="pointComponent-text">Nuk{_f}</div>
                    <button click="$NukPage.submit()">+ 1 Point</button>
                    <div class="test-component">Nuk{TestComponent(<Box>
                        Hello guys. I'm Test Component, you can seen me at <code>./src/components/TestComponent.nuk.js</code>
                    </Box>)}</div>
                    <hr/>
                    Nuk{FanpageComponent(<Box>
                        Like fanpage to get new information
                    </Box>)}
                    <hr/>
                </div>
            </div>
        </NukApp>
    } 
}
