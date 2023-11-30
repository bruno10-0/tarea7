import { useState } from 'react';
import {
  Box,
  Heading,
  Text,
  Button,
} from '@chakra-ui/react';

const Product = () => {
  const [compraRealizada, setCompraRealizada] = useState(false);

  const handleCompraClick = () => {
    setCompraRealizada(true);
  };

  return (
  
      <Box maxW="600px" mx="auto" mt="8" p="6" bg="white" rounded="md" boxShadow="lg">
        <Heading mb="4">Collar The Witcher Medallón Wild Hunt Game Acero Negro</Heading>
        <Text mb="2">Medallondel videojuego The Witcher, usado por Geralt de Rivia. Incluye cadena y estuche.
          <br />
          Garantía del vendedor: 30 días</Text>
        <Text fontSize="xl" mb="2">Precio: $6.144,39</Text>
        <Text mb="2">SKU: ABC123</Text>
        <Text mb="4">Cantidad disponible: 50 unidades</Text>

        <Button colorScheme="teal" onClick={handleCompraClick}>
          Comprar
        </Button>

        {compraRealizada && (
          <Text mt="4" color="green.500">
            ¡Gracias por su compra!
          </Text>
        )}
      </Box>
    
  );
};

export default Product;
