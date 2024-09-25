import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({ onAction }) => {
  return (
    <footer className="bg-blue-500 p-4">
      <div className="grid grid-cols-6 gap-4 text-center">
        <button
          onClick={() => onAction('f1')}
          className="bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
        >
          F1
        </button>
        <button
          onClick={() => onAction('edit')}
          className="bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
        >
          Edit
        </button>
        <button
          onClick={() => onAction('new add')}
          className="bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
        >
          New Add
        </button>
        <button
          onClick={() => onAction('f4')}
          className="bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
        >
          F4
        </button>
        <button
          onClick={() => onAction('f5')}
          className="bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
        >
          F5
        </button>
        <button
          onClick={() => onAction('result view')}
          className="bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
        >
          Result View
        </button>
        <button
          onClick={() => onAction('next cost')}
          className="bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
        >
          Next Cost
        </button>
        <button
          onClick={() => onAction('next parts')}
          className="bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
        >
          Next Parts
        </button>
        <button
          onClick={() => onAction('save')}
          className="bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
        >
          Save
        </button>
        <button
          onClick={() => onAction('delete')}
          className="bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
        >
          Delete
        </button>
        <button
          onClick={() => onAction('next input')}
          className="bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
        >
          Next Input
        </button>
        <button
          onClick={() => onAction('exit')}
          className="bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
        >
          Exit
        </button>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  onAction: PropTypes.func.isRequired,
};

export default Footer;
