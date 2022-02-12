import React from 'react';

const Gallery = () => {
    return (
        <div className='App-gallery'>
          <div className='gallery-cards'>
            <div className='card'>
              <div className='card1-img' />
              <h1>Cómoda</h1>
              <p>Dormitorio</p>
            </div>
            <div className='card'>
              <div className='card2-img' />
              <h1>Silla</h1>
              <p>Cocina</p>
            </div>
            <div className='card'>
              <div className='card3-img' />
              <h1>Mesa Ratona</h1>
              <p>Living/Comedor</p>
            </div>
          </div>
          <div className='gallery-btn'>VER MÁS</div>
        </div>
    );
};

export default Gallery;