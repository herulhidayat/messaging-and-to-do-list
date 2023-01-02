import Popup from "./Popup"

const MainLayout = ({children}) => {
    return(
        <>
            <div className="bg-[#4F4F4F] bg-cover min-h-screen">
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