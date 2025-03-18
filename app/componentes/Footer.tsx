import { Linkedin, Github } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white shadow-sm mt-auto border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p className="text-sm font-medium text-gray-700">
              Sistema de Gestión de Productos
            </p>
            <p className="text-xs text-gray-500 mt-1">
              © {new Date().getFullYear()} Todos los derechos reservados
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <p className="text-sm text-gray-600 font-medium">
              Desarrollado con React y TypeScript
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin/in/henry-steven-jaimes"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition-colors p-2 hover:bg-blue-50 rounded-full"
                aria-label="Visitar perfil de LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/stevenjaimes"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-900 transition-colors p-2 hover:bg-gray-50 rounded-full"
                aria-label="Visitar perfil de GitHub"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}