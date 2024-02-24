
import React from 'react';
import { useSelector } from 'react-redux';

const DataTablePage = () => {
  const data = useSelector((state) => state.data);

  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Category</th>
          <th>Description</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.title}</td>
            <td>{item.category}</td>
            <td>{item.description}</td>
            <td>{item.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTablePage;
