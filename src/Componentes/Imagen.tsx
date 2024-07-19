// Imagen.tsx

import React from 'react';

interface ImagenProps {
  src: string;
  alt: string;
}

const Imagen: React.FC<ImagenProps> = ({ src, alt }) => {
  const imagenStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    objectFit: 'cover', // Ajusta la imagen para cubrir el contenedor
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: -1, // Asegura que la imagen esté detrás del contenido principal
  };

  return <img src={src} alt={alt} style={imagenStyle} />;
}

export default Imagen;
