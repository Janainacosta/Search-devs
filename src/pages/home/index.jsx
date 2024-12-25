import {
  HomePage,
  BarraBusca,
  BotaoSearch,
  HomeBody,
  HomeHeader,
  FormBox
} from "./styles";
import {InputAdornment, useMediaQuery, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Logo from "../../assets/images/Search d_evs.png";

function Home() {
  const isMobile = useMediaQuery('(max-width:600px)');
  return (
    <HomePage>
      <HomeHeader>
        <img src={Logo} alt="" className="searchLogo" />
      </HomeHeader>
      <HomeBody>
        <FormBox>
          <BarraBusca
            id="barraBusca"
            placeholder="Search"
            variant="outlined"
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              },
            }}
            sx={{ width: isMobile ? "100%" : "592px"}}
          />
          <BotaoSearch variant="contained"><Typography>Search</Typography></BotaoSearch>
        </FormBox>
      </HomeBody>
    </HomePage>
  );
}

export default Home;
