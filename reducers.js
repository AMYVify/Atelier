import { combineReducers } from 'redux';

const al_InitialState = {
  answers: {},
  questions: [],
  numberOfQuestions: 2,
  product: {},
  loading: true,
  productId: '',
};

const ov_InitialState = {
  truthed: false,
  product: {},
  ratings: {},
  styles: [],
};

const rl_InitialState = {
  loading: true,
  error: null,
  product: {},
  relatedIds: [],
  relatedProducts: [],
};

const answerListReducer = (state = al_InitialState, action) => {
  switch (action.type) {
    case 'GET_QUESTIONS_SUCCESS':
      return { ...state, questions: action.questions, answers: action.answers };
    case 'SHOW_MORE_QUESTIONS':
      return { ...state, numberOfQuestions: state.questions.length };
    case 'SHOW_LESS_QUESTIONS':
      return { ...state, numberOfQuestions: 2 };
    case 'SHOW_MORE_ANSWERS':
      return { ...state, numberOfAnswers: Object.values(state.answers).length };
    case 'SHOW_LESS_ANSWERS':
      return { ...state, numberOfAnswers: 2 };
    case 'FETCH_PRODUCTS_SUCCESS':
      return {
        ...state, product: action.product, productId: action.product.id, loading: false,
      };
    case 'FETCH_PRODUCTS_FAILURE':
      return { ...state, product: action.product, loading: false };
    default:
      return state;
  }
};

const overviewReducer = (state = ov_InitialState, action) => {
  switch (action.type) {
    case 'GET_O_PRODUCTS_SUCCESS':
      return { ...state, truthed: true, product: action.product };
    case 'GET_O_PRODUCTS_FAILURE':
      return { ...state, truthed: true, product: action.product };
    case 'GET_O_STYLES_SUCCESS':
      return { ...state, styles: action.styles };
    case 'GET_O_RATINGS_SUCCESS':
      return { ...state, ratings: action.ratings };
    default:
      return state;
  }
};

const relatedItemsReducer = (state = rl_InitialState, action) => {
  switch (action.type) {
    case 'FETCH_RELATED_IDS_SUCCESS':
      return {
        ...state,
        // loading: false,
        relatedIds: action.relatedIds,
      };
    case 'FETCH_RELATED_PRODUCT_SUCCESS':
      return {
        ...state,
        // loading: false,
        relatedProduct: action.relatedProduct,
        outfitProducts: action.outfitProducts,
      };
    case 'GET_RELATED_PRODUCT_SUCCESS':
      return {
        ...state,
        // loading: false,
        product: action.product,
        outfitProducts: action.outfitProducts,
      };
    case 'FETCH_RELATED_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

const combined = combineReducers({ answerListReducer, overviewReducer, relatedItemsReducer });

export default combined;
