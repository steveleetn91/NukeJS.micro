import HEADERCOMPONENT from "../components/HeaderComponent.nuk"

export default function DEFAULTLAYOUT(data) {
    return <NukApp>
    <div class="container">
        <HEADERCOMPONENT>
            <span>NukeJS Version Micro</span>
        </HEADERCOMPONENT>
        <div class="content-box">
            Nuk{data}
        </div>
    </div>
</NukApp>
}