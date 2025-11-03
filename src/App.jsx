import { Admin, ListGuesser, Resource } from 'react-admin';
import { createTrailbaseProvider } from '../ra-trailbase.js';
import { CarsCreate, CarsEdit, CarsList } from './cars.jsx';

const TRAILBASE_URL = 'http://localhost:4000/';
const { dataProvider, authProvider } = await createTrailbaseProvider(TRAILBASE_URL);

const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider}>
    <Resource name="cars" list={CarsList} edit={CarsEdit} create={CarsCreate} />
    <Resource name="users" list={ListGuesser}  />
  </Admin>
);
export default App;

