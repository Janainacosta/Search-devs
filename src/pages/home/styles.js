import { Button, styled, TextField } from "@mui/material";
import { Box } from "@chakra-ui/react";

export const HomePage = styled(Box)`
  margin-top: 50px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: black;
`;

export const BarraBusca = styled(TextField)`
    background-color: white;
    color: black;
    height: 48px;
    padding: 3%;
    & .MuiOutlinedInput-root {
      border: none;
      & .MuiOutlinedInput-input {
        height: 48px;
        padding: 0;
      }
    }
`;

export const HomeBody = styled(Box)`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: black;
`;

export const HomeHeader = styled(Box)`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  min-height: 50%;
  margin-bottom: 5%;
  margin-top: 10%;  
`;

export const BotaoSearch = styled(Button)`
    background-color: #8c19d2;
    text-tranform: none;
    padding: 3%;
    height: 48px;
    margin-top: 20px;
`;

export const FormBox = styled(Box)`
  background-color: white;
  display: flex;
  justify-content: center;
  aligh-items: stretch;
  color: black;
`;