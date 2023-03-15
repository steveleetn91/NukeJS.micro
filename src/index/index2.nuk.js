import TestComponent from "../components/TestComponent.nuk";
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
    type(data){
        return <NukApp>
            <div>NukeJS run in Nuk{data}</div>
        </NukApp>
    },
    render: () => {
        let _f = $NukPage.type(<Box>
            <span style="color:red">Nuk{$NukPage.status.count}</span>    
        </Box>);
        return <NukApp>
            <div id="type">Nuk{_f}</div>
            <div>Nuk{TestComponent(<Box>
                Hello component
            </Box>)}</div>
            <button click="$NukPage.submit()">Click me</button>
        </NukApp>
    } 
}
