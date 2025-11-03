import { DataTable, List ,Edit, SimpleForm, TextInput, ReferenceField, Create, TextField, useGetIdentity, NumberField, useGetOne, Loading, ReferenceInput, AutocompleteInput } from 'react-admin';

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

    const searchBar = [
        <TextInput source="model" alwaysOn />,      // source => what column
        <TextInput source="brand" alwaysOn />,      
        <TextInput source="year" alwaysOn />,
        <ReferenceInput source="user_id" reference="users" alwaysOn>
            <AutocompleteInput optionText="email" />   {/* This tells it to show the 'email' in the dropdown */}                  
        </ReferenceInput>
    ];

    return (
        <List filter={filter} filters={searchBar}> {/* set filter on list */}
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