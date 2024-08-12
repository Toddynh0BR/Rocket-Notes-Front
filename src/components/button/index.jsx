import { Container } from "./style";

export function Button({title, loading=false, onclick, ...rest}){
    return(
        <Container disabled={loading} onClick={onclick}>
            {loading ? 'Carregando...' : title}
        </Container>
    )
}