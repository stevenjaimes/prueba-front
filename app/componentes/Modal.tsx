'use client';

import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';

interface PruebaTecnicaModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function PruebaTecnicaModal({ isOpen, onRequestClose }: PruebaTecnicaModalProps) {
  const [modalWidth, setModalWidth] = useState<string>('600px');

  useEffect(() => {
    // Función para actualizar el ancho del modal según el tamaño de la ventana
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setModalWidth('90%'); // Ancho del 90% en móviles
      } else {
        setModalWidth('600px'); // Ancho fijo en pantallas grandes
      }
    };

    // Actualizar el ancho al cargar el componente
    handleResize();

    // Escuchar cambios en el tamaño de la ventana
    window.addEventListener('resize', handleResize);

    // Limpiar el event listener al desmontar el componente
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: modalWidth, // Ancho dinámico
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
    },
  };

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
      contentLabel="Prueba Técnica Modal"
      aria={{
        labelledby: 'pruebaTecnicaModalTitle',
        describedby: 'pruebaTecnicaModalDescription',
      }}
      role="dialog"
      aria-modal="true"
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      shouldFocusAfterRender={true}
      shouldReturnFocusAfterClose={true}
    >
      <h2 id="pruebaTecnicaModalTitle" className="text-2xl font-bold text-gray-900 mb-4">
        Prueba Técnica
      </h2>
      <p id="pruebaTecnicaModalDescription" className="text-gray-700 mb-4">
        Crear una interfaz gráfica en React o Next que permita al usuario crear productos y visualizarlos en una lista, es libre la cantidad de vistas que necesite crear, los colores, navegadores, etc. Lo que tendrá mayor importancia para nosotros será experiencia de usuario y diseño.
      </p>
      <ul className="list-disc list-inside text-gray-700 mb-4">
        <li>Los productos deben tener los siguientes campos y tipos de datos: código (number), nombre (text), descripción (text), cantidad (number), creación (date).</li>
        <li>La lista debe tener filtros para ordenar según cantidad, creación, código y nombre.</li>
        <li>Implementar funcionalidad de eliminar un producto.</li>
      </ul>
      <button
        onClick={onRequestClose}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        aria-label="Cerrar modal de prueba técnica"
      >
        Cerrar
      </button>
    </Modal>
  );
}