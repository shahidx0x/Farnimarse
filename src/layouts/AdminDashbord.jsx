import AdminSidebar from "@/components/AdminSidebar";
import AdminNavbar from "@/components/shared/AdminNavbar";
import Footer from "@/components/shared/Footer";
import { Outlet } from "react-router-dom";
const AdminDashbord = () => {
  return (
    <div>
      <AdminNavbar />
      <div className="flex gap-5">
        <AdminSidebar />
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default AdminDashbord;
