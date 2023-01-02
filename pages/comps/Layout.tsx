import {Navbar} from "./Navbar";
import {Footer} from "./Footer";

type Props = {
    children: JSX.Element
}

export const Layout = ({ children }: Props) => {
    return(
        <div className="content">
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}