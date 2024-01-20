import { Project } from '@/types/project';
import React from 'react';

const DNSConfigurationTable = ({project}: {project: Project}) => {
  return (
    <div className="mx-auto my-8">
      <div className="bg-[#666464] text-white shadow-md rounded">
        <table className="min-w-full leading-normal">
          <thead>
            <tr>
              <th
                scope="col"
                className="px-5 w-[200px] py-3 bg-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
              >
                Record Type
              </th>
              <th
                scope="col"
                className="px-5 w-[200px] py-3 bg-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
              >
                Host
              </th>
              <th
                scope="col"
                className="px-5 py-3 bg-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
              >
                Value
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-5 py-5 border-b border-gray-200 bg-[#666464] text-sm">CNAME</td>
              <td className="px-5 py-5 border-b border-gray-200 bg-[#666464] text-sm">www</td>
              <td className="px-5 py-5 border-b border-gray-200 bg-[#666464] text-sm">
                {project._id}.aayushsoftwares.com
              </td>
            </tr>
            <tr>
              <td className="px-5 py-5 200 bg-[#666464] text-sm">A</td>
              <td className="px-5 py-5 200 bg-[#666464] text-sm">@</td>
              <td className="px-5 py-5 200 bg-[#666464] text-sm">
                54.226.28.162
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DNSConfigurationTable;
