import { DataTable, List, ReferenceField ,Edit, ReferenceInput, SimpleForm, TextInput } from 'react-admin';

export const CarsList = () => (
    <List>
        <DataTable>
            <DataTable.Col source="userId">
                <ReferenceField source="userId" reference="users" />
            </DataTable.Col>
            <DataTable.Col source="id" />
            <DataTable.Col source="model" />
            <DataTable.Col source="brand" />
        </DataTable>
    </List>
);

export const CarsEdit = () => (
    <Edit>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users" />
            <TextInput source="id" />
            <TextInput source="model" />
            <TextInput source="brand" />
        </SimpleForm>
    </Edit>
);