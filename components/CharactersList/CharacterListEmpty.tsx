import { Container, Description } from './CharacterListEmptyStyle'

export default function CharactersListEmpty() {
  return (
    <Container testID="empty-characters-list-component">
      <Description>Mi dispiace, non abbiamo trovato nessun Pokémon®</Description>
    </Container>
  )
}
