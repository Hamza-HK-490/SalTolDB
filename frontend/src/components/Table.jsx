import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Table = () => {
  const [data, setData] = useState([]);

  
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get("http://localhost:4000/tabledata");
            console.log(response.data);
            setData(response.data);
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchData();
      }, []);
 

  return (
    <div className="py-4">
      <table className=" divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-2 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              sr_no
            </th>
            <th className="py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              title
            </th>
            <th className="px-2 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              botanical_name
            </th>
            <th className="px-2 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              common_name
            </th>
            <th className="px-2 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              gene_name
            </th>
            <th className="px-2 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              gene_family
            </th>
            <th className="px-2 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              reference
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map(item => (
            <tr key={item.sr_no}>
              <td className="py-2 text-center whitespace-nowrap">
                {item.sr_no}
              </td>
              <td className=" px-2 text-center py-4 ">
                {item.title}
              </td>
              <td className="px-2 text-center py-4 whitespace-nowrap">
                {item.botanical_name}
              </td>
              <td className="px-2 py-4 text-center whitespace-nowrap">
                {item.common_name}
              </td>
              <td className="px-2 py-4 text-center whitespace-nowrap">
                {item.gene_name}
              </td>
              <td className="px-2 py-4 text-center whitespace-nowrap">
                {item.gene_family}
              </td>
              <td className="px-2 py-4 text-center whitespace-nowrap">
                {item.reference}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
