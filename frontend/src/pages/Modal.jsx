// Modal.jsx
import React from 'react';
import ReactDOM from 'react-dom';

export default function Modal({ children, onClose, useFixed = true }) {
  // When useFixed is true, use fixed positioning to cover the viewport;
  // otherwise, use absolute positioning relative to a positioned parent.
  const modalClass = useFixed ? 'fixed inset-0' : 'absolute inset-0';
  
  return ReactDOM.createPortal(
    <div 
      className={`${modalClass} flex items-center justify-center z-50 bg-black/70`} 
      onClick={onClose}
    >
      <div 
        onClick={(e) => e.stopPropagation()} 
        className="p-6 max-w-2xl w-full mx-4 rounded-sm"
      >
        {children}
      </div>
    </div>,
    document.body
  );
}
