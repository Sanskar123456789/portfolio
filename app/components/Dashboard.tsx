import { NextPage } from "next";
import SideBar from "./SideBar";

interface Props {
  children: React.ReactNode;
}

const Dashboard: NextPage<Props> = ({ children }) => {
  return (
    <div className="grid grid-cols-12 gap-4">
      {/* Side Bar */}
      <div className="col-span-3 md:col-span-3 transition transition-delay-300 border-r border-gray-400 min-h-screen">
        <SideBar />
      </div>
      {/* Main Content */}
      <div className="col-span-9 md:col-span-9">{children}</div>
    </div>
  );
};

export default Dashboard;
