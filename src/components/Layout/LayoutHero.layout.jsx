import Content from "./Content.layout"
import TopbarHero from "./TopbarHero.layout"

export const LayoutHero = ({children}) => {
    return (
        <div className="flex flex-col">
            <TopbarHero/>
            <Content>
                {children}
            </Content>
        </div>
    )
}

export default LayoutHero