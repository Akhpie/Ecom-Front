import styled from "styled-components";
// import Center from "./Center";
import ProductBox from "./ProductBox";
import Center from "../components/Center";

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 30px;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 400;
`;

export default function NewProducts({ products }) {
  return (
    <Center>
      <Title>New Arrivals</Title>
      <ProductsGrid>
        {products?.length > 0 &&
          products.map((product) => <ProductBox {...product} />)}
      </ProductsGrid>
    </Center>
  );
}
