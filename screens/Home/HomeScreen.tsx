import CharactersList from '../../components/CharactersList'
import { PokemonListItem as PokemonListItemType, RootStackScreenProps } from '../../types'
import { SafeContainer, Title, TitleContainer } from './HomeScreenStyles'

export default function HomeScreen({ navigation }: RootStackScreenProps<'Home'>) {
  return (
    <SafeContainer edges={['left', 'right', 'top']}>
      <TitleContainer>
        <Title accessibilityRole="header">Maty Poke</Title>
      </TitleContainer>
      <CharactersList
        data={[
          {
            id: 1,
            name: 'Greninja',
          },
          {
            id: 2,
            name: 'Abbraccias',
          },
          {
            id: 3,
            name: 'Davidinja',
          },
          {
            id: 4,
            name: 'Lollomax',
          },
        ]}
        onSelectItem={(character: PokemonListItemType) => {
          console.log(`Selected Pokemon "${character.name}" id=${character.id}`)
        }}
        isLoading={false}
        showFooterLoader={false}
        onEndReached={() => {}}
      />
      {/* <CharactersList
        data={characters}
        onSelectItem={(character: Character) => navigation.navigate('Detail', { character })}
        onEndReached={() => {
          if (!isLoading && !isFetching && !error && data?.info.next != null) {
            setPage((page) => page + 1)
          }
        }}
        isLoading={isLoading}
        showFooterLoader={isFetching}
      /> */}
    </SafeContainer>
  )
}
