import Sidebar from "@/components/Sidebar";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { Outlet } from "react-router-dom";

const UserDashbord = () => {
  return (
    <div>
      <Navbar />
      <div className="flex gap-5">
        <Sidebar />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default UserDashbord;
