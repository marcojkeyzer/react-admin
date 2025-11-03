import { DataTable, List ,Edit, SimpleForm, TextInput, ReferenceField, BooleanField, Create, TextField } from 'react-admin';

export const CarsList = () => (
    <List>
        <DataTable>
            <DataTable.Col source="model" />
            <DataTable.Col source="brand" />
            <DataTable.Col source="year" />
            <DataTable.Col label="user_id">
                <ReferenceField 
                    source="user_id"     
                    reference="users"   
                >
                    <TextField source="email" />
                </ReferenceField>
            </DataTable.Col>
        </DataTable>
    </List>
);

export const CarsEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="model" /> 
            <TextInput source="brand" />
            <TextInput source="year" />
        </SimpleForm>
    </Edit>
);

export const CarsCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="model" />
            <TextInput source="brand" />
            <TextInput source="year" />
        </SimpleForm>
    </Create>
);