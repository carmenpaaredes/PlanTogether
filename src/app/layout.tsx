import React from 'react';

export const metadata = {
  title: 'PlanTogether',
  description: 'Public events and collaborative private plans',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}