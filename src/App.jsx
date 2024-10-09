import './App.css'
import Testimonio from './Componentes/Testimonio'

function App() {

  const persons =[{
    id:0,
    name: "Alberto",
    country: "España",
    profession: "Doctor",
    alt:"foto señor entrando a su trabajo",
    description:"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    imgeUrl: "https://media.licdn.com/dms/image/v2/D5610AQE_zErB7NiiEg/image-shrink_1280/image-shrink_1280/0/1701200642249?e=2147483647&v=beta&t=T0f56vEZ88CC4c65M8K6KqHDsgf3Sz04b1pMhWG-H6I",
    imageSize: 400,
  },
  {
    id:1,
    name: "Laura",
    country: "Argentina",
    profession: "Cantante",
    alt:"foto señora entrando a su trabajo",
    description:"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    imgeUrl: "https://i.scdn.co/image/ab6761610000e5eb102bbbb1f908fd139e98c510",
    imageSize:400,
  },
  {
    id:2,
    name: "Carlos",
    country: "Estados Unidos",
    profession: "Actor",
    alt:"foto señor entrando a su trabajo",
    description:"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    imgeUrl:"https://estaticos.elcolombiano.com/binrepository/848x565/30c0/780d565/none/11101/TJTL/carlosantoniovelez-2_43858841_20231128193117.jpg",
    imageSize: 400,
  }]


  return (
    <>
      {persons.map((p) =>
        <Testimonio key={p.id}
                    name={p.name}
                    country={p.country}
                    profession={p.profession}
                    alt={p.alt}
                    description={p.description}
                    imageUrl={p.imgeUrl}
                    imageSize={p.imgeUrl}
      
      
      />)
    
    }

    </>    
  )
}

export default App
