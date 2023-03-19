export default function TESTCOMPONENT(data,pageStatus) {
    return <NukApp>
        Nuk{data}
        <div>
            <span>This is count of page: Nuk{pageStatus.count}</span>
        </div>
    </NukApp>
}