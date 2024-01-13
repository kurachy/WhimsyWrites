import React from 'react';
import './dataTable.css'

const DataTable = ({ data, columns }) => {
  return (
    <table className='data-table'>
      <thead className='data-table__table-header'>
        <tr>
          {columns.map(column => (
            <th key={column.accessor}>{column.Header}</th>
          ))}
        </tr>
      </thead>
      <tbody className='data-table__table-body'>
        {data.length === 0 ? (
          <tr>
            <td colSpan={columns.length} style={{ textAlign: 'center' }}>
              You didn't add any data yet.
            </td>
          </tr>
        ) : (
          data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column, colIndex) => {
                const cellValue = row[column.accessor];
                return (
                  <td key={`${rowIndex}-${colIndex}`}>
                    {column.Cell ? column.Cell(row) : cellValue}
                  </td>
                );
              })}
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default DataTable;
