"use client";

import React from 'react';
import { X } from 'lucide-react';

interface ModalFormularioProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export function ModalFormulario({ isOpen, onClose, children }: ModalFormularioProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 p-2 text-gray-500 hover:text-gray-700"
          aria-label="Cerrar ModalFormulario"
        >
          <X size={24} />
        </button>
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
}