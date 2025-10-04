const Card = (pro) => {
  return (
    <div>
      <img
        src={pro.Image.src}
        alt={pro.Image.alt}
        width={416}
        height={300}
      />

      <div>
        <h1>{pro.tital}</h1>
        <span>
          {pro.num}.0 <span>★</span>
        </span>
      </div>

      <h2>{pro.name}</h2>

      <p>{pro.pragarp}</p>

      <div>
        <button>{pro.button}</button>
        <p>${pro.dolar}</p>
      </div>
    </div>
  );
};

export default Card;














// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server:{
//     port:8000,
//   }
// })


