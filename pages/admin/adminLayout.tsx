import AdminNavbar from "@/components/admin_navbar";


const AdminLayout = ({children}: { children: React.ReactNode }) => {
    return (
        <div className="relative md:col-span-5 overflow-y-clip col-span-6  md:h-screen  h-screen  flex flex-col  ">
            {/* <AdminNavbar /> */}
            {children}
        </div>
    );
}

export default AdminLayout;