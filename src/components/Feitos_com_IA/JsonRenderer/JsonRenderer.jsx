import React from 'react';
import './JsonRenderer.css'; // Import the CSS file

const JsonRenderer = ({ data }) => {
  const renderObject = (obj) => {
    if (Array.isArray(obj)) {
      return renderArray(obj);
    }
    
    if (typeof obj === 'object' && obj !== null) {
      return (
        <table className="json-table">
          <thead>
            <tr>
              {Object.keys(obj).map((key) => (
                <th key={key}>{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {Object.values(obj).map((value, index) => (
                <td key={index}>{renderValue(value)}</td>
              ))}
            </tr>
          </tbody>
        </table>
      );
    }

    return <span>{String(obj)}</span>; // Handle primitive types
  };

  const renderArray = (array) => {
    if (array.length === 0) {
      return <p>Empty Array</p>;
    }
    
    return (
      <table className="json-table">
        <thead>
          <tr>
            {Object.keys(array[0]).map((key, index) => (
              <th key={index}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {array.map((item, index) => (
            <tr key={index}>
              {Object.values(item).map((value, i) => (
                <td key={i}>{renderValue(value)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  const renderValue = (value) => {
    if (Array.isArray(value)) {
      return renderArray(value);
    } else if (typeof value === 'object' && value !== null) {
      return renderObject(value);
    }
    return <span>{String(value)}</span>;
  };

  return <div className="json-renderer">{renderValue(data)}</div>;
};

export default JsonRenderer;





















//  VERSÃO ANTIGA, HAVIA PEDIDO PARA A IA TRANSFORMAR LISTAS EM <ul>
// import React from 'react';

// // COMPONENTE FEITO POR IA
// const JsonRenderer = ({ data }) => {
//   if (Array.isArray(data)) {
//     return (
//       <ul>
//         {data.map((item, index) => (
//           <li key={index}>
//             <JsonRenderer data={item} />
//           </li>
//         ))}
//       </ul>
//     );
//   } else if (typeof data === 'object' && data !== null) {
//     return (
//       <ul>
//         {Object.entries(data).map(([key, value]) => (
//           <li key={key}>
//             <strong>{key}:</strong> <JsonRenderer data={value} />
//           </li>
//         ))}
//       </ul>
//     );
//   } else {
//     return <span>{String(data)}</span>; // Handles primitive data types
//   }
// };

// export default JsonRenderer;
