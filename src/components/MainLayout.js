import Popup from "./Popup"

const MainLayout = ({children}) => {
    return(
        <>
            <div className="bg-[#333333] bg-cover min-h-screen">
                <Popup />
                {children}
            </div>
        </>
    )
}

export function withMainLayout(Component) {
    Component.Layout = MainLayout
    return Component
}

export default MainLayout