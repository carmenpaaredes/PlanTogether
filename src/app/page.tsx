import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="p-8 max-w-4xl mx-auto text-center">
      <h1 className="text-4xl font-bold mb-4">Bienvenido a PlanTogether</h1>
      <p className="text-lg text-gray-600 mb-6">
        Descubre eventos públicos y organiza planes privados con amigos.
      </p>
      <div className="flex justify-center gap-4">
        <Link 
          href="/events" 
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Ver Eventos
        </Link>
        <Link 
          href="/login" 
          className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100"
        >
          Iniciar Sesión
        </Link>
      </div>
    </main>
  );
}