import { Container, Button, FormGroup, TextField } from "@mui/material";
import useDocumentTitle from '../helpers/useDocumentTitle';

function SearchPage() {
    const title = useDocumentTitle('Search Cities - Weather Watcher');
    return (
        <>
            <Container sx={{m : "15px"}}>
                <TextField id="exampleField" label="Search"></TextField>
                <Button type="submit">Search</Button>
            </Container>
        </>
    )
};

export default SearchPage;