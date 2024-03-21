import Content from "./Content.layout"
import Topbar from "./Topbar.layout"

export const Layout = ({children}) => {
    return (
        <div className="flex flex-col">
            <Topbar/>
            <Content>
                {children}
            </Content>
        </div>
    )
}

export default Layout