import './ditecory.styles.scss';
import CategoryContainer from '../category-container/category-container.component';

const Directory = ({ categories }) => {
  return (
    <div className='directorys-container'>
      {categories.map((category) => (
        <CategoryContainer key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
