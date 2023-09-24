import Center from "@/components/Center";
import Button from "@mui/material/Button";
import styled from "styled-components";
import Stack from "@mui/material/Stack";
// import ButtonLink from "@/components/ButtonLink";
// import CartIcon from "@/components/icons/CartIcon";
// import FlyingButton from "@/components/FlyingButton";
// import { RevealWrapper } from "next-reveal";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import { ProductionQuantityLimits } from "@mui/icons-material";

const Bg = styled.div`
  background-color: #222;
  color: #fff;
  padding: 50px 0;
`;
const Title = styled.h1`
  margin: 0;
  font-weight: normal;
  font-size: 1.5rem;
  @media screen and (min-width: 768px) {
    font-size: 3rem;
  }
`;
const Desc = styled.p`
  color: #aaa;
  font-size: 1rem;
`;
const ColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  img.main {
    max-width: 100%;
    max-height: 200px;
    display: block;
    margin: 0 auto;
  }
  div:nth-child(1) {
    order: 2;
    margin-left: auto;
    margin-right: auto;
  }
  @media screen and (min-width: 768px) {
    grid-template-columns: 1.1fr 0.9fr;
    & > div:nth-child(1) {
      order: 0;
    }
    img {
      max-width: 100%;
    }
  }
`;
const Column = styled.div`
  display: flex;
  align-items: center;
`;
const ButtonsWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 25px;
`;
const CenterImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const ImgColumn = styled(Column)`
  & > div {
    width: 100%;
  }
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 40px;
  img {
    max-width: 100%;
  }
`;

const ContentWrapper = styled.div``;

export default function Featured({ product }) {
  return (
    <Bg>
      <Center>
        <ColumnsWrapper>
          <Column>
            <div>
              <Title>{product.title}</Title>
              <Desc>{product.description}</Desc>
              <Stack spacing={2} direction="row">
                <Button
                  size="small"
                  variant="outlined"
                  color="info"
                  endIcon={<ReadMoreIcon />}
                  href={"/products" + product._id}
                >
                  Read more
                </Button>
                <Button
                  size="small"
                  variant="contained"
                  color="success"
                  endIcon={<AddShoppingCartIcon />}
                >
                  Add to cart
                </Button>
              </Stack>
            </div>
          </Column>
          <Column>
            <img src="https://aks-next-ecom.s3.amazonaws.com/1695446991122.png" />
          </Column>
        </ColumnsWrapper>
      </Center>
    </Bg>
  );
}
