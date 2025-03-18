"use client";

import React, { useState } from 'react';
import { PlusCircle, AlertCircle } from 'lucide-react';
import { Producto } from '../types/producto';

interface FormularioProductoProps {
  onSubmit: (product: Producto) => void;
}

interface ErroresFormulario {
  codigo?: string;
  nombre?: string;
  descripcion?: string;
  cantidad?: string;
}

export function FormularioProducto({ onSubmit }: FormularioProductoProps) {
  const [datosForm, setDatosForm] = useState({
    codigo: '',
    nombre: '',
    descripcion: '',
    cantidad: '',
  });

  const [errors, setErrores] = useState<ErroresFormulario>({});
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validarFormulario = (): boolean => {
    const nuevoError: ErroresFormulario = {};

    if (!datosForm.codigo) {
      nuevoError.codigo = 'El código es requerido';
    } else if (isNaN(Number(datosForm.codigo)) || Number(datosForm.codigo) <= 0) {
      nuevoError.codigo = 'El código debe ser un número positivo';
    }

    if (!datosForm.nombre.trim()) {
      nuevoError.nombre = 'El nombre es requerido';
    } else if (datosForm.nombre.trim().length < 3) {
      nuevoError.nombre = 'El nombre debe tener al menos 3 caracteres';
    }

    if (!datosForm.descripcion.trim()) {
      nuevoError.descripcion = 'La descripción es requerida';
    } else if (datosForm.descripcion.trim().length < 10) {
      nuevoError.descripcion = 'La descripción debe tener al menos 10 caracteres';
    }

    if (!datosForm.cantidad) {
      nuevoError.cantidad = 'La cantidad es requerida';
    } else if (isNaN(Number(datosForm.cantidad)) || Number(datosForm.cantidad) < 0) {
      nuevoError.cantidad = 'La cantidad debe ser un número positivo o cero';
    }

    setErrores(nuevoError);
    return Object.keys(nuevoError).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validarFormulario()) {
      onSubmit({
        codigo: parseInt(datosForm.codigo),
        nombre: datosForm.nombre.trim(),
        descripcion: datosForm.descripcion.trim(),
        cantidad: parseInt(datosForm.cantidad),
        creacion: new Date(),
      });
      
      setDatosForm({ codigo: '', nombre: '', descripcion: '', cantidad: '' });
      setSubmitSuccess(true);
      setTimeout(() => setSubmitSuccess(false), 3000);
    }
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="bg-white p-6 rounded-lg shadow-md max-h-[600px]"
      aria-label="Formulario de nuevo producto"
    >
      <h2 className="text-xl font-bold mb-6 text-gray-800 md:text-2xl">Nuevo Producto</h2>
      
      {submitSuccess && (
        <div 
          className="mb-4 p-3 bg-green-100 text-green-700 rounded-md"
          role="alert"
          aria-live="polite"
        >
          Producto agregado exitosamente
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label 
            htmlFor="codigo"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Código <span className="text-red-600">*</span>
          </label>
          <input
            id="codigo"
            type="number"
            value={datosForm.codigo}
            onChange={(e) => {
              setDatosForm({ ...datosForm, codigo: e.target.value });
              setErrores({ ...errors, codigo: undefined });
            }}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.codigo ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Ej: 1001"
            aria-describedby={errors.codigo ? "codigo-error" : undefined}
            aria-invalid={errors.codigo ? "true" : "false"}
            required
          />
          {errors.codigo && (
            <div 
              id="codigo-error"
              className="mt-1 text-red-600 text-sm flex items-center gap-1"
              role="alert"
            >
              <AlertCircle size={16} />
              {errors.codigo}
            </div>
          )}
        </div>

        <div>
          <label 
            htmlFor="nombre"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Nombre <span className="text-red-600">*</span>
          </label>
          <input
            id="nombre"
            type="text"
            value={datosForm.nombre}
            onChange={(e) => {
              setDatosForm({ ...datosForm, nombre: e.target.value });
              setErrores({ ...errors, nombre: undefined });
            }}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.nombre ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Ej: Laptop HP"
            aria-describedby={errors.nombre ? "nombre-error" : undefined}
            aria-invalid={errors.nombre ? "true" : "false"}
            required 
          />
          {errors.nombre && (
            <div 
              id="nombre-error"
              className="mt-1 text-red-600 text-sm flex items-center gap-1"
              role="alert"
            >
              <AlertCircle size={16} />
              {errors.nombre}
            </div>
          )}
        </div>

        <div className="md:col-span-2">
          <label 
            htmlFor="descripcion"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Descripción <span className="text-red-600">*</span>
          </label>
          <textarea
            id="descripcion"
            value={datosForm.descripcion}
            onChange={(e) => {
              setDatosForm({ ...datosForm, descripcion: e.target.value });
              setErrores({ ...errors, descripcion: undefined });
            }}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.descripcion ? 'border-red-500' : 'border-gray-300'
            }`}
            rows={3}
            placeholder="Describe las características principales del producto"
            aria-describedby={errors.descripcion ? "descripcion-error" : undefined}
            aria-invalid={errors.descripcion ? "true" : "false"}
            required 
          />
          {errors.descripcion && (
            <div 
              id="descripcion-error"
              className="mt-1 text-red-600 text-sm flex items-center gap-1"
              role="alert"
            >
              <AlertCircle size={16} />
              {errors.descripcion}
            </div>
          )}
        </div>

        <div className="md:col-span-2">
          <label 
            htmlFor="cantidad"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Cantidad <span className="text-red-600">*</span>
          </label>
          <input
            id="cantidad"
            type="number"
            value={datosForm.cantidad}
            onChange={(e) => {
              setDatosForm({ ...datosForm, cantidad: e.target.value });
              setErrores({ ...errors, cantidad: undefined });
            }}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.cantidad ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Ej: 10"
            aria-describedby={errors.cantidad ? "cantidad-error" : undefined}
            aria-invalid={errors.cantidad ? "true" : "false"}
            required 
          />
          {errors.cantidad && (
            <div 
              id="cantidad-error"
              className="mt-1 text-red-600 text-sm flex items-center gap-1"
              role="alert"
            >
              <AlertCircle size={16} />
              {errors.cantidad}
            </div>
          )}
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
        aria-label="Agregar nuevo producto"
      >
        <PlusCircle size={20} />
        Agregar Producto
      </button>
    </form>
  );
}