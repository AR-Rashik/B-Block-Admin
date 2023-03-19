import React, { useState } from "react";
import PrimaryButton from "../../../Components/Button/PrimaryButton";
import ClientsTable from "./ClientsTable";

const AllClients = () => {
  return (
    <>
      <div className="w-full sm:px-6">
        <div className="px-4 md:px-10 py-4 md:py-7 bg-gray-100 rounded-tl-lg rounded-tr-lg">
          <div className="sm:flex items-center justify-between">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">
              All Clients
            </p>
            <div>
              <PrimaryButton classes="inline-flex sm:ml-3 mt-4 sm:mt-0 items-start justify-start px-6 py-3 rounded">
                <p className="text-sm font-medium leading-none text-white">
                  Settings
                </p>
              </PrimaryButton>
            </div>
          </div>
        </div>
        <div className="bg-white shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
          <table className="w-full whitespace-nowrap">
            <thead>
              <tr className="h-16 w-full text-sm leading-none text-gray-800">
                <th className="font-medium text-left pl-4 ">Information</th>
                <th className="font-medium text-left pl-12">Progress</th>
                <th className="font-medium text-left pl-12">ID</th>
                <th className="font-medium text-left pl-20">Email</th>
                <th className="font-medium text-left pl-20">Deadline</th>
                {/* <th className="font-medium text-left pl-16">Members</th> */}
              </tr>
            </thead>
            {/* Table Body */}
            <tbody className="w-full">
              <ClientsTable></ClientsTable>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AllClients;
