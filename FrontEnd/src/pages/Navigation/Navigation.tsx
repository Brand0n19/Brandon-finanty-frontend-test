import { Outlet } from "react-router"
import { Navbar } from "../../components/NavBar"

export const Navigation = () => {
    return (
        <>
            <div style={{display: "flex", flexDirection:"column"}}>
                <div>
                    <Navbar/>
                </div>
                <div>
                    <div>
                        {/* sidebar */}
                    </div>
                    <div>
                        <Outlet/>
                    </div>
                </div>
            </div>
        </>
    )
}