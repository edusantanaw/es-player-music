import { useSong } from "../hooks/useSong";
import { Title } from "../styles/global";
import { categorylist } from "../utils/categoryList";
import { CategoryContainer } from "./styles/category.styles";

const Category = () => {
  const { currentCategory, handleCategory } = useSong();

  return (
    <CategoryContainer>
      <Title>Categorias</Title>
      <ul>
        {categorylist.map((category, key) => (
          <li
            id={currentCategory == category.name ? "selected" : ""}
            key={key}
            onClick={() => handleCategory(category.name)}
          >
            <img src={category.image} alt={category.name} />
            <span>{category.name}</span>
          </li>
        ))}
      </ul>
    </CategoryContainer>
  );
};

export default Category;
