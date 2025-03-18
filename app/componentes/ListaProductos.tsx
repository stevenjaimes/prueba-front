"use client";

import React, { useState } from 'react';
import { Trash2, ArrowUpDown, ChevronUp, ChevronDown, Filter, X } from 'lucide-react';
import { Producto } from '@/types/producto';

interface ListaProductosProps {
  productos: Producto[];
  onDelete: (codigo: number) => void;
  ordenarPor: (key: keyof Producto) => void;
  ordenActual: { key: keyof Producto; direccion: 'asc' | 'desc' };
}

export function ListaProductos({ productos, onDelete, ordenarPor, ordenActual }: ListaProductosProps) {
  const [filtroAbierto, setFiltroAbierto] = useState(false);

  const formateadorFechaHora = (date: Date) => {
    return new Date(date).toLocaleString('es-ES', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    });
  };

  const getIconOrden = (columnaKey: keyof Producto) => {
    if (ordenActual.key === columnaKey) {
      return ordenActual.direccion === 'asc' ? (
        <ChevronUp size={16} className="inline ml-1" />
      ) : (
        <ChevronDown size={16} className="inline ml-1" />
      );
    }
    return <ArrowUpDown size={16} className="inline ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />;
  };

  const OrdenarEncabezado = ({ columna, label }: { columna: keyof Producto; label: string }) => (
    <th
      scope="col" 
      className="group px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100 transition-all"
      onClick={() => ordenarPor(columna)}
      aria-sort={ordenActual.key === columna ? (ordenActual.direccion === 'asc' ? 'ascending' : 'descending') : 'none'} // Indica el orden de la columna
    >
      <div className="flex items-center gap-1">
        <span className="group-hover:text-blue-600 transition-colors">{label}</span>
        {getIconOrden(columna)}
      </div>
    </th>
  );

  const FilterButton = () => (
    <div className="relative">
      <button
        onClick={() => setFiltroAbierto(!filtroAbierto)}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
          filtroAbierto
            ? 'bg-blue-600 text-white hover:bg-blue-700'
            : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
        }`}
        aria-expanded={filtroAbierto} 
        aria-haspopup="menu" 
        aria-label="Filtrar productos" 
      >
        {filtroAbierto ? <X size={18} /> : <Filter size={18} />}
        Filtrar
      </button>

      {filtroAbierto && (
        <div
          className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10"
          role="menu" 
          aria-orientation="vertical"
        >
          <div className="py-1">
            <button
              onClick={() => {
                ordenarPor('codigo');
                setFiltroAbierto(false);
              }}
              className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center justify-between"
              role="menuitem" 
              aria-label="Ordenar por código" 
            >
              <span>Ordenar por Código</span>
              {ordenActual.key === 'codigo' && getIconOrden('codigo')}
            </button>
            <button
              onClick={() => {
                ordenarPor('nombre');
                setFiltroAbierto(false);
              }}
              className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center justify-between"
              role="menuitem"
              aria-label="Ordenar por nombre"
            >
              <span>Ordenar por Nombre</span>
              {ordenActual.key === 'nombre' && getIconOrden('nombre')}
            </button>
            <button
              onClick={() => {
                ordenarPor('cantidad');
                setFiltroAbierto(false);
              }}
              className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center justify-between"
              role="menuitem"
              aria-label="Ordenar por cantidad"
            >
              <span>Ordenar por Cantidad</span>
              {ordenActual.key === 'cantidad' && getIconOrden('cantidad')}
            </button>
            <button
              onClick={() => {
                ordenarPor('creacion');
                setFiltroAbierto(false);
              }}
              className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center justify-between"
              role="menuitem"
              aria-label="Ordenar por fecha"
            >
              <span>Ordenar por Fecha</span>
              {ordenActual.key === 'creacion' && getIconOrden('creacion')}
            </button>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <FilterButton />
      </div>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200" aria-label="Lista de productos">
            <thead className="bg-gray-50">
              <tr>
                <OrdenarEncabezado columna="codigo" label="Código" />
                <OrdenarEncabezado columna="nombre" label="Nombre" />
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Descripción
                </th>
                <OrdenarEncabezado columna="cantidad" label="Cantidad" />
                <OrdenarEncabezado columna="creacion" label="Fecha y Hora" />
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {productos.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-8 text-center text-gray-500">
                    No hay productos registrados
                  </td>
                </tr>
              ) : (
                productos.map((producto) => (
                  <tr key={producto.codigo} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {producto.codigo}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {producto.nombre}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {producto.descripcion}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {producto.cantidad}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {formateadorFechaHora(producto.creacion)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button
                        onClick={() => onDelete(producto.codigo)}
                        className="text-red-600 hover:text-red-900 transition-colors p-2 rounded-full hover:bg-red-50"
                        aria-label={`Eliminar producto ${producto.nombre}`}
                      >
                        <Trash2 size={20} />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}