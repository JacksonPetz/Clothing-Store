import React, { useEffect } from "react";
import ClothesCard from "../ClothesCard";
import { useQuery } from '@apollo/react-hooks';
import { useStoreContext } from "../../utils/GlobalState";
import { UPDATE_ClOTHES } from "../../utils/actions";
//import { useQuery } from '@apollo/client';

import { QUERY_CLOTHES } from "../../utils/queries";
import { idbPromise } from "../../utils/helpers";
import { ThemeProvider, Box, Grid, Flex} from '@chakra-ui/core';
import theme from '../../theme/theme';


function ClothesList({clothes}) {
  const [state, dispatch] = useStoreContext();

  const { currentCategory } = state;

  const { loading, data } = useQuery(QUERY_CLOTHES);

  useEffect(() => {
    if(data) {
      dispatch({
           type: UPDATE_ClOTHES,
          clothes: data.clothes
        });
        data.clothes.forEach((clothes) => {
          idbPromise('clothes', 'put', clothes);
        });
    } else if (!loading) {
      idbPromise('clothes', 'get').then((clothes) => {
        dispatch({
          type: UPDATE_ClOTHES,
         clothes: clothes
       });
      });
    }
  }, [data, loading, dispatch]);

  function filterClothes() {
    if (!currentCategory) {
      return state.clothes;
    }

    return state.clothes.filter(clothes => clothes.category._id === currentCategory);
  }

  return (
    <ThemeProvider theme={theme}>
         <Flex >
        <Box p={5}>
            <h2>Pick your clothes</h2>
            {state.clothes.length ? (
                <Grid templateColumns={["repeat(1, 1fr)","repeat(1, 1fr)","repeat(3, 1fr)","repeat(3, 1fr)"]} gap={3}>
                    {filterClothes().map(clothes => (
                        <ClothesCard
                        key= {clothes._id}
                        item={clothes}
                        />
                    ))}
                </Grid>
            ) : (
                <h3>You haven't added any clothes yet!</h3>
            )}
            
        </Box>
        </Flex>
    </ThemeProvider>
  );
}

export default ClothesList;