"use client";

import React, { useState } from 'react';
import { FormularioProducto } from '@/componentes/FormularioProducto';
import { ListaProductos } from '@/componentes/ListaProductos';
import { Header } from '@/componentes/Header';
import { Footer } from '@/componentes/Footer';
import { Producto } from '@/types/producto';
import { ModalFormulario } from '@/componentes/ModalFormulario';
import { PlusCircle } from 'lucide-react';

function App() {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [ordenConfig, setOrdenConfig] = useState<{
    key: keyof Producto;
    direccion: 'asc' | 'desc';
  }>({ key: 'codigo', direccion: 'asc' });
  const [modalAbierto, setModalAbierto] = useState(false);

  const agregarProducto = (product: Producto) => {
    if (productos.some(p => p.codigo === product.codigo)) {
      alert('Ya existe un producto con este código');
      return;
    }
    setProductos([...productos, product]);
    setModalAbierto(false); // Cerrar el modal después de agregar el producto
  };

  const eliminarProducto = (codigo: number) => {
    if (window.confirm('¿Está seguro de que desea eliminar este producto?')) {
      setProductos(productos.filter((p) => p.codigo !== codigo));
    }
  };

  const ordenar = (key: keyof Producto) => {
    const direccion = ordenConfig.key === key && ordenConfig.direccion === 'asc' ? 'desc' : 'asc';
    setOrdenConfig({ key, direccion });

    const ordenarProductos = [...productos].sort((a, b) => {
      if (a[key] < b[key]) return direccion === 'asc' ? -1 : 1;
      if (a[key] > b[key]) return direccion === 'asc' ? 1 : -1;
      return 0;
    });

    setProductos(ordenarProductos);
  };

  return (
    <div className="min-h-screen flex flex-col relative bg-[url('https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80')] bg-cover bg-center bg-fixed bg-no-repeat">
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />
      <div className="relative flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow bg-white/40 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto py-4 sm:py-6 px-4 sm:px-6 lg:px-8">
            <div className="sm:px-0">
              <div className="lg:hidden flex justify-start mb-4">
                <button
                  onClick={() => setModalAbierto(true)}
                  className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md shadow-lg hover:bg-blue-700 transition-colors"
                  aria-label="Abrir formulario de producto"
                >
                  <PlusCircle size={20} />
                  <span>Agregar Producto</span>
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-8">

                <div className="hidden lg:block lg:col-span-1">
                  <FormularioProducto onSubmit={agregarProducto} />
                </div>

                <div className="lg:col-span-2">
                  <ListaProductos
                    productos={productos}
                    onDelete={eliminarProducto}
                    ordenarPor={ordenar}
                    ordenActual={ordenConfig}
                  />
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
      <ModalFormulario isOpen={modalAbierto} onClose={() => setModalAbierto(false)}>
        <FormularioProducto onSubmit={agregarProducto} />
      </ModalFormulario>
    </div>
  );
}

export default App;