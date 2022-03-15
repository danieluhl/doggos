import React from 'react';

const IMAGE_SOURCE = 'https://dog.ceo/api/breeds/image/random';


function HomePage() {
  const picResults = await Promise.all(
    Array.from(new Array(10), (_) =>
      fetch(IMAGE_SOURCE).then((res) => res.json())
    )
  );
  const pics = picResults.map((r) => r.message);
  return (
    <div>
      <h1>Doggos!</h1>
      {pics.map((i) => (
        <img src={i} />
      ))}
    </div>
  );
}

export default HomePage;
