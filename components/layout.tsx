import Navbar from "./navbar";

const Layout = ({children}: { children: React.ReactNode }) => {
    return (
        <div className="relative md:col-span-5 overflow-y-clip col-span-6  md:h-screen  h-screen  flex    flex-col">
            <Navbar />
            {children}
        </div>
    );
}

export default Layout;