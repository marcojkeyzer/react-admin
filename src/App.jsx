import { Admin, DashboardMenuItem, ListGuesser, Resource, ShowGuesser, useHasDashboard } from 'react-admin';
import { createTrailbaseProvider } from '../ra-trailbase.js';
import { CarsCreate, CarsEdit, CarsList, CarsShow } from './cars.jsx';

const TRAILBASE_URL = 'http://localhost:4000/';
const { dataProvider, authProvider } = await createTrailbaseProvider(TRAILBASE_URL);

const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider} dashboard={DashboardMenuItem}>
    <Resource name="cars" list={CarsList} show={CarsShow} edit={CarsEdit} create={CarsCreate} />
    <Resource name="users" list={ListGuesser}/>
  </Admin>
);
export default App;

