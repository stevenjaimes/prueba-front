"use client";

import React, { useEffect } from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    height: '90%',
    maxWidth: '800px',
    maxHeight: '600px',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
  },
};

interface HojaDeVidaModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function HojaDeVidaModal({ isOpen, onRequestClose }: HojaDeVidaModalProps) {

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const appElement = document.querySelector('body');
      if (appElement) {
        Modal.setAppElement(appElement);
      } else {
        console.error('No se pudo encontrar el contenedor principal de la aplicación.');
      }
    }
  }, []);


  useEffect(() => {
    if (isOpen) {
      const modalContent = document.querySelector('.ReactModal__Content');
      if (modalContent) {
        (modalContent as HTMLElement).focus(); 
      }
    }
  }, [isOpen]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Hoja de Vida Modal"
      aria={{
        labelledby: 'hojaDeVidaModalTitle', 
        describedby: 'hojaDeVidaModalDescription', 
      }}
      role="dialog" 
      aria-modal="true" 
      shouldCloseOnOverlayClick={true} 
      shouldCloseOnEsc={true}
      shouldFocusAfterRender={true} 
      shouldReturnFocusAfterClose={true} 
    >
      <h2 id="hojaDeVidaModalTitle" className="text-2xl font-bold text-gray-900 mb-4">
        Mi Hoja de Vida
      </h2>
      <p id="hojaDeVidaModalDescription" className="text-gray-700 mb-4">
        A continuación se muestra mi hoja de vida en formato PDF. Puedes revisarla directamente en esta ventana.
      </p>
      <iframe
        src="https://drive.google.com/file/d/1FGThEBl2QLFMlNwO3lsV-WW-gte9-0iO/preview"
        width="100%"
        height="100%"
        style={{ border: 'none' }}
        aria-label="Hoja de Vida en PDF" 
        title="Hoja de Vida"
      />
      <button
        onClick={onRequestClose}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        aria-label="Cerrar modal de hoja de vida"
      >
        Cerrar
      </button>
    </Modal>
  );
}