import React, { useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';

import { ThemeProvider, Flex, Box, Grid} from '@chakra-ui/core';
import theme  from '../theme/theme';

import CategoryM from "../components/CategoryM";
import ClothesList from "../components/clothesList";
//import ClothesCard from '../components/ClothesCard';
import { QUERY_ALL_CLOTHES } from '../utils/queries';
import { useStoreContext } from "../utils/GlobalState";
import { UPDATE_ClOTHES } from "../utils/actions";
import { idbPromise } from "../utils/helpers";

const Shop = () => {
    const [state, dispatch] = useStoreContext();
    const { loading, data } = useQuery(QUERY_ALL_CLOTHES);
console.log("state", state);
    useEffect(() => {
        if (data) {
            dispatch({
                type: UPDATE_ClOTHES,
                clothes: data.clothes
            });

            data.clothes.forEach((item) => {
                idbPromise('clothes', 'put', item);
            });
        } else if (!loading) {
            idbPromise('clothes', 'get').then((clothes) => {
                dispatch({
                    type: UPDATE_ClOTHES, 
                    clothes: clothes
                })
            })
        }
    }, [loading, data, dispatch]);
console.log (state.clothes)
    return (
        <ThemeProvider theme={theme}>
            <Flex wrap="wrap" alignItems='center' justifyContent='center'>
                <Box>
                    <Box p={5} alignItems='center' justifyContent='center'>
                        <CategoryM />
                    </Box>
                    { <ClothesList clothes={state.clothes}/> }
                </Box>
            </Flex>
            
        </ThemeProvider>
    );
};


export default Shop;