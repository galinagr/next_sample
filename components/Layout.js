import Nav from './Nav'

const Layout = ({mainTitle, footer, children}) => (
    <div>
        <Nav/>
        <h1>{mainTitle}</h1>
        <hr/>
        {children}
        <hr/>
        <h1>{footer}</h1>
    </div>
)

export default Layout
