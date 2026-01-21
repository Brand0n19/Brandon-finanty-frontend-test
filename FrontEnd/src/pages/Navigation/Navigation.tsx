import { Outlet } from "react-router"
import { Navbar } from "../../components/NavBar"
import { DynamicBreadcrumbs } from "../../components/BreadCrumbs"

export const Navigation = () => {
    return (
        <>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <div>
                    <Navbar />
                </div>
                <div>
                    <DynamicBreadcrumbs />
                    <Outlet />
                </div>
            </div>
        </>
    )
}