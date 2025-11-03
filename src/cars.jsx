import { DataTable, List ,Edit, SimpleForm, TextInput, ReferenceField, Create, TextField, useGetIdentity, NumberField, useGetOne, Loading } from 'react-admin';

export const CarsList = () => {
    const { identity } = useGetIdentity();

    const { data } = useGetOne(         // get one entry
        'users',                        // from 'users' table
        { id: identity?.id },           // where id = identity.id
    );

    let filter = {user_id: identity?.id}    // filter by only current user_id
    
    if (data?.admin == 1) {
        filter = {}                         // if admin -> filter by nothing (show all)
    }

    return (
        <List filter={filter}> {/* set filter on list */}
            <DataTable>
                <DataTable.Col source="model" />
                <DataTable.Col source="brand" />
                <DataTable.Col source="year" />
                <DataTable.Col label="Owner">
                    <ReferenceField 
                        source="user_id"        
                        reference="users"       
                    >
                        <TextField source="email"></TextField>
                    </ReferenceField>
                </DataTable.Col>
            </DataTable>
        </List>
    )
}

export const CarsEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="model" /> 
            <TextInput source="brand" />
            <TextInput source="year" />
        </SimpleForm>
    </Edit>
);

export const CarsCreate = () => {
    const { identity } = useGetIdentity();

    const defaultValues = { user_id: identity?.id };

    if (identity) return (
        <Create>
            <SimpleForm defaultValues={defaultValues}>
                <TextInput source="model" />
                <TextInput source="brand" />
                <TextInput source="year" />
            </SimpleForm>
        </Create>
    );
}