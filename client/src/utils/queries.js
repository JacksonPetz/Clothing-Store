import gql from "graphql-tag";



export const QUERY_CLOTHES = gql`
  query getClothes($category: ID) {
    clothes(category: $category) {
      _id
      name
      description
      price
      image
      category {
        _id
      }
      customize {
        size
        brand
        color
      }
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($clothes: [ID]!) {
    checkout(clothes: $clothes) {
      session
    }
  }
`;

export const QUERY_ALL_CLOTHES = gql`
  {
    clothes {
      _id
      name
      description
      price
      image
      category {
        name
      }
    }
  }
`;

export const QUERY_CATEGORIES = gql`
  {
    categories {
      _id
      name
    }
  }
`;

export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
      orders {
        _id
        purchaseDate
        clothes {
          _id
          name
          description
          price
          image
        }
      }
    }
  }
`;