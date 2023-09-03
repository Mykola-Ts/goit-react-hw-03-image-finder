import { arrCategories } from 'components/services/api';
import {
  Card,
  List,
  TitleCard,
  Title,
  Wrapper,
  ImgCard,
} from './Categories.styled';

export const Categories = ({ categories, onSelectCategory }) => {
  let idCategory = 0;

  return (
    <Wrapper>
      <Title>Categories</Title>
      <List>
        {categories.map(({ value: { hits } }) => {
          const category = arrCategories[idCategory];
          const markup = (
            <Card key={category} onClick={() => onSelectCategory(category)}>
              <ImgCard
                src={hits[Math.round(Math.random() * (0 - 2) + 2)].webformatURL}
                alt={category}
                width="640"
              />
              <TitleCard>{category}</TitleCard>
            </Card>
          );

          idCategory += 1;

          return markup;
        })}
      </List>
    </Wrapper>
  );
};
