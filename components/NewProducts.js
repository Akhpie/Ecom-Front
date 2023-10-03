import styled from "styled-components";
// import Center from "./Center";
import ProductBox from "./ProductBox";
import Center from "../components/Center";
import { RevealWrapper } from "next-reveal";
import ProductsGrid from "./ProductsGrid";


const Title = styled.h2`
  font-size: 2rem;
  font-weight: 400;
`;

export default function NewProducts({ products, wishedProducts }) {
  return (
    <Center>
      <Title>New Arrivals</Title>
      <RevealWrapper origin="left" >
      <ProductsGrid products = {products} wishedProducts = {wishedProducts}>
      </ProductsGrid>
      </RevealWrapper>
    </Center>
  );
}
