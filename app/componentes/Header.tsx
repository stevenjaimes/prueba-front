"use client";

import React, { useState } from 'react';
import { Package } from 'lucide-react';
import { PruebaTecnicaModal } from './Modal';
import { HojaDeVidaModal } from './HojaDeVidaModal';

export function Header() {
  const [pruebaModalIsOpen, setPruebaModalIsOpen] = useState(false);
  const [hojaDeVidaModalIsOpen, setHojaDeVidaModalIsOpen] = useState(false);

  const openPruebaModal = () => setPruebaModalIsOpen(true);
  const closePruebaModal = () => setPruebaModalIsOpen(false);

  const openHojaDeVidaModal = () => setHojaDeVidaModalIsOpen(true);
  const closeHojaDeVidaModal = () => setHojaDeVidaModalIsOpen(false);

  return (
    <header
      className="bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-200"
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-0 sm:justify-between">
          <div className="flex items-center gap-4">
            <div
              className="bg-blue-600 p-2 sm:p-3 rounded-lg shadow-md"
              role="img"
              aria-label="Ícono del sistema"
            >
              <Package size={28} className="text-white sm:w-8 sm:h-8" />
            </div>
            <div className="text-center sm:text-left">
              <h1 className="text-xl lg:text-3xl font-bold text-gray-900 leading-tight">
                Sistema de Gestión de Productos
              </h1>
              <p className="text-blue-600 font-medium mt-1">
                Control de Inventario
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">

            <button
              className="bg-gray-100 px-4 py-2 rounded-full cursor-pointer hover:bg-gray-200 transition-colors"
              onClick={openHojaDeVidaModal}
              aria-label="Abrir hoja de vida" 
              aria-haspopup="dialog" 
              aria-expanded={hojaDeVidaModalIsOpen}
            >
              <span className="text-sm font-medium text-gray-700">
                Hoja de Vida
              </span>
            </button>
            <button
              className="bg-gray-100 px-4 py-2 rounded-full cursor-pointer hover:bg-gray-200 transition-colors"
              onClick={openPruebaModal}
              aria-label="Abrir prueba técnica" 
              aria-haspopup="dialog" 
              aria-expanded={pruebaModalIsOpen} 
            >
              <span className="text-sm font-medium text-gray-700">
                Prueba Técnica
              </span>
            </button>
          </div>
        </div>
      </div>
      <HojaDeVidaModal
        isOpen={hojaDeVidaModalIsOpen}
        onRequestClose={closeHojaDeVidaModal}
      />
      <PruebaTecnicaModal
        isOpen={pruebaModalIsOpen}
        onRequestClose={closePruebaModal}
      />
    </header>
  );
}