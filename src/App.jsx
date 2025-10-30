import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin';
import { createTrailbaseProvider } from '../ra-trailbase.js';
import { CarsEdit, CarsList } from './cars.jsx';

//    NOTE: This URL will change every time you restart your CodeSpace.
const TRAILBASE_URL = 'http://localhost:4000';
const {dataProvider} = createTrailbaseProvider(TRAILBASE_URL);

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="cars" list={CarsList} edit={CarsEdit} />
  </Admin>
);
export default App;

