import caezar from '../assets/caezar.svg';
import glasses from '../assets/glass.svg';
import createslice from '../assets/createslice.svg';
import provider from '../assets/radiation.svg';
import useselector from '../assets/gas.svg';
import createreducer from '../assets/cellfrog.svg';
import createasyncthunk from '../assets/tanknavigation.svg';
import useDispatch from '../assets/safe.svg';

export const sidebarData = [
  { id: 1, name: 'Error', mainColor: 'red', darkborder: true },
  { id: 2, name: 'RegExp', mainColor: 'pink', darkborder: true },
  { id: 3, name: 'Date', mainColor: 'DeepSkyBlue', darkborder: false },
  { id: 4, name: 'Function', mainColor: '#50c878', darkborder: true },
  { id: 5, name: 'Array', mainColor: '#FFBE32', darkborder: true },
  { id: 6, name: 'Object', mainColor: 'white', darkborder: true },
  { id: 7, name: 'Boolean', mainColor: '#ed9121', darkborder: true },
  { id: 8, name: 'String', mainColor: 'grey', darkborder: false },
  { id: 9, name: 'Number', mainColor: 'black', darkborder: false },
];

export const rightSidebarData = [
  {
    id: 1,
    name: 'configureStore',
    mainColor: '#35f210',
    darkborder: true,
    visible: false,
    pics: caezar,
  },
  {
    id: 2,
    name: 'createSlice',
    mainColor: '#35f210',
    darkborder: true,
    visible: false,
    pics: createslice,
  },
  {
    id: 3,
    name: 'createAction',
    mainColor: '#35f210',
    darkborder: false,
    visible: false,
    pics: glasses,
  },
  {
    id: 4,
    name: 'Provider',
    mainColor: '#35f210',
    darkborder: true,
    visible: false,
    pics: provider,
  },
  {
    id: 5,
    name: 'useSelector',
    mainColor: '#35f210',
    darkborder: true,
    visible: false,
    pics: useselector,
  },
  {
    id: 6,
    name: 'createReducer',
    mainColor: '#35f210',
    darkborder: true,
    visible: false,
    pics: createreducer,
  },
  {
    id: 7,
    name: 'createAsyncThunk',
    mainColor: '#35f210',
    darkborder: false,
    visible: false,
    pics: createasyncthunk,
  },
  {
    id: 8,
    name: 'useDispatch',
    mainColor: '#35f210',
    darkborder: false,
    visible: false,
    pics: useDispatch,
  },
  // {
  //   id: 11,
  //   name: 'createSelector',
  //   mainColor: '#35f210',
  //   darkborder: false,
  // },
  // {
  //   id: 12,
  //   name: 'Matching Utilities',
  //   mainColor: '#35f210',
  //   darkborder: false,
  // },
  // {
  //   id: 13,
  //   name: 'Other Exports',
  //   mainColor: '#35f210',
  //   darkborder: false,
  // },
  // {
  //   id: 14,
  //   name: 'createApi',
  //   mainColor: '#35f210',
  //   darkborder: false,
  // },
  // {
  //   id: 15,
  //   name: 'fetchBaseQuery',
  //   mainColor: '#35f210',
  //   darkborder: false,
  // },
  // {
  //   id: 16,
  //   name: 'ApiProvider',
  //   mainColor: '#35f210',
  //   darkborder: false,
  // },
  // {
  //   id: 17,
  //   name: 'setupListeners',
  //   mainColor: '#35f210',
  //   darkborder: false,
  // },
  // {
  //   id: 18,
  //   name: 'useQuery',
  //   mainColor: '#35f210',
  //   darkborder: false,
  // },
  // {
  //   id: 19,
  //   name: 'useMutation',
  //   mainColor: '#35f210',
  //   darkborder: false,
  // },
  // {
  //   id: 20,
  //   name: 'useQueryState',
  //   mainColor: '#35f210',
  //   darkborder: false,
  // },
  // {
  //   id: 21,
  //   name: 'useQuerySubscription',
  //   mainColor: '#35f210',
  //   darkborder: false,
  // },
  // {
  //   id: 22,
  //   name: 'useLazyQuery',
  //   mainColor: '#35f210',
  //   darkborder: false,
  // },
  // {
  //   id: 23,
  //   name: 'useLazyQuerySubscription',
  //   mainColor: '#35f210',
  //   darkborder: false,
  // },
  // {
  //   id: 24,
  //   name: 'usePrefetch',
  //   mainColor: '#35f210',
  //   darkborder: false,
  // },
];

export const headerData = [
  { id: 1, name: 'Promise', mainColor: 'MediumPurple', darkborder: false },
  { id: 2, name: 'Symbol', mainColor: ' #f9c34b', darkborder: true },
  { id: 3, name: 'Generator', mainColor: '#ffe5b4', darkborder: true },
  { id: 4, name: 'GeneratorFunction', mainColor: '#35f210', darkborder: true },
  { id: 5, name: 'Map', mainColor: '#10c1da', darkborder: false },
  { id: 6, name: 'Set', mainColor: 'black', darkborder: false },
  { id: 7, name: 'WeakMap', mainColor: '#f2f2f2', darkborder: true },
  { id: 8, name: 'WeakSet', mainColor: '#8dd8b9', darkborder: true },
  { id: 9, name: 'TypedArray', mainColor: '#ffff99', darkborder: true },
  { id: 10, name: 'Reflect', mainColor: 'Coral', darkborder: true },
  { id: 11, name: 'Proxy', mainColor: 'LightPink', darkborder: true },
  { id: 12, name: 'ArrayBuffer', mainColor: 'whitesmoke', darkborder: true },
  { id: 13, name: 'DataView', mainColor: 'red', darkborder: true },
];

export const footerData = [
  {
    id: 1,
    name: 'SharedArrayBuffer',
    mainColor: 'seagreen',
    darkborder: true,
  },
  { id: 2, name: 'Atomics', mainColor: 'olive', darkborder: true },
  { id: 3, name: 'BigInt', mainColor: '#d9d9d9', darkborder: true },
  { id: 4, name: 'Math', mainColor: 'red', darkborder: true },
  { id: 5, name: 'Intl', mainColor: 'grey', darkborder: false },
  { id: 6, name: 'JSON', mainColor: 'Aquamarine', darkborder: true },
  {
    id: 7,
    name: 'AsyncGeneratorFunction',
    mainColor: 'GoldenRod',
    darkborder: true,
  },
  { id: 8, name: 'AsyncFunction', mainColor: '#ffbf00', darkborder: true },
];
