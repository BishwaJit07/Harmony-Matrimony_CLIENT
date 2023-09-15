import React from 'react';

const DashboardProfile = () => {
    return (
        <div>
            <div className="ms-96 ps-52 avatar my-5">
              <div className="w-60 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img className="" src='' />
                </div>
            </div>
              <div>
                <h4 className="text-center text-xl my-2 text-cyan-700 font-medium">Tom Jerry</h4>
                <h6 className="text-center text-md text-gray-500 border font-medium">Admin</h6>
              </div>
        </div>
    );
};

export default DashboardProfile;