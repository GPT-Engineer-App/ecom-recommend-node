import React, { useState, useEffect } from "react";
import { Box, Heading, Text, Image, Grid, GridItem, Button, Flex, Spacer } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

const products = [
  { id: 1, name: "Product 1", price: 10, image: "https://images.unsplash.com/photo-1486401899868-0e435ed85128?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwMXxlbnwwfHx8fDE3MTIxMDQxMTh8MA&ixlib=rb-4.0.3&q=80&w=1080" },
  { id: 2, name: "Product 2", price: 20, image: "https://images.unsplash.com/photo-1504274066651-8d31a536b11a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwMnxlbnwwfHx8fDE3MTIxMDQxMTl8MA&ixlib=rb-4.0.3&q=80&w=1080" },
  { id: 3, name: "Product 3", price: 30, image: "https://images.unsplash.com/photo-1542319630-55fb7f7c944a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwM3xlbnwwfHx8fDE3MTIxMDQxMTl8MA&ixlib=rb-4.0.3&q=80&w=1080" },
  { id: 4, name: "Product 4", price: 40, image: "https://images.unsplash.com/photo-1486401899868-0e435ed85128?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwNHxlbnwwfHx8fDE3MTIxMDQxMTl8MA&ixlib=rb-4.0.3&q=80&w=1080" },
];

const Index = () => {
  const [cart, setCart] = useState([]);
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    // Simulated Apriori algorithm for generating recommendations
    const generateRecommendations = () => {
      // Dummy implementation, replace with actual Apriori algorithm
      const recommendedProducts = products.slice(0, 2);
      setRecommendations(recommendedProducts);
    };

    generateRecommendations();
  }, [cart]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <Box p={4}>
      <Flex align="center" mb={4}>
        <Heading as="h1" size="xl">
          My E-commerce Store
        </Heading>
        <Spacer />
        <Button leftIcon={<FaShoppingCart />}>Cart ({cart.length})</Button>
      </Flex>

      <Grid templateColumns="repeat(4, 1fr)" gap={4}>
        {products.map((product) => (
          <GridItem key={product.id}>
            <Box borderWidth={1} borderRadius="lg" p={4}>
              <Image src={product.image} alt={product.name} mb={2} />
              <Heading as="h2" size="md">
                {product.name}
              </Heading>
              <Text>${product.price}</Text>
              <Button mt={2} onClick={() => addToCart(product)}>
                Add to Cart
              </Button>
            </Box>
          </GridItem>
        ))}
      </Grid>

      {recommendations.length > 0 && (
        <Box mt={8}>
          <Heading as="h2" size="lg" mb={4}>
            Recommended for You
          </Heading>
          <Grid templateColumns="repeat(2, 1fr)" gap={4}>
            {recommendations.map((product) => (
              <GridItem key={product.id}>
                <Box borderWidth={1} borderRadius="lg" p={4}>
                  <Image src={product.image} alt={product.name} mb={2} />
                  <Heading as="h2" size="md">
                    {product.name}
                  </Heading>
                  <Text>${product.price}</Text>
                  <Button mt={2} onClick={() => addToCart(product)}>
                    Add to Cart
                  </Button>
                </Box>
              </GridItem>
            ))}
          </Grid>
        </Box>
      )}
    </Box>
  );
};

export default Index;
