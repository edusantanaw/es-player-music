import React, { useState } from "react";
import { categorylist } from "../utils/categoryList";
import { CategoryContainer } from "./styles/category.styles";

const Category = () => {
  const [currentCategory, setCurrentCategory] = useState<string>(
    categorylist[0].name
  );
  const handleCategory = (category: string) => {
    setCurrentCategory(category);
  };

  return (
    <CategoryContainer>
      <h2>Categorias</h2>
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
