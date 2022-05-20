import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashbord = () => {
  return (
    <div>
      <div class="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content ">
          {/* <!-- Page content here --> */}
          <h2 className="text-3xl font-bold text-purple-500">Dashboard</h2>
          <Outlet></Outlet>
          
        </div>
        <div class="drawer-side">
          <label for="my-drawer-2" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li>
              <Link to="/dashbord">My appoinment</Link>
            </li>
            <li>
              <Link to="/dashbord/review">My Revew</Link>
            </li>
            <li>
              <Link to="/dashbord/addDoctor">Add A Doctor</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashbord;
