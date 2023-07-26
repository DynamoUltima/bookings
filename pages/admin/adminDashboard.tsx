import AdminNavbar from "@/components/admin_navbar";
import AdminLayout from "./adminLayout";
import { useFormik } from "formik";
import * as Yup from "yup";
import AddVenue from "./addVenue";
import Navbar from "@/components/navbar";
import { useSession } from "next-auth/react";

const AdminDashboard = () => {


    const { data: session, status, } = useSession();


    console.log(session)
    



    return (
        <AdminLayout>
            {/* <AdminNavbar /> */}
            <Navbar />
            <div>Hello {session?.user?.user.email}</div>

            <AddVenue />
             
            


        </AdminLayout>
    );
}

export default AdminDashboard;