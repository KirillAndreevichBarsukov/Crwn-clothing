const App = () => {
  console.log('render');
  console.log('render');
  return (
    <div className='categories-container'>
      <div className='category-container'>
        {/* <img></img> */}
        <div className='category-body-container'>
          <h2>Hats</h2>
          <p>Shop now</p>
        </div>
      </div>
      <div className='category-container'>
        {/* <img></img> */}
        <div className='category-body-container'>
          <h2>Jackets</h2>
          <p>Shop now</p>
        </div>
      </div>
      <div className='category-container'>
        {/* <img></img> */}
        <div className='category-body-container'>
          <h2>Sneakers</h2>
          <p>Shop now</p>
        </div>
      </div>
      <div className='category-container'>
        {/* <img></img> */}
        <div className='category-body-container'>
          <h2>Womens</h2>
          <p>Shop now</p>
        </div>
      </div>
      <div className='category-container'>
        {/* <img></img> */}
        <div className='category-body-container'>
          <h2>Mans</h2>
          <p>Shop now</p>
        </div>
      </div>
    </div>
  );
};

export default App;
