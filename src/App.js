import './App.css';
import Navbar from './Navbar';
import Card from './Card';
import Menubar from './Menubar';
import Footer from './Footer';


function App() {
  // For search bar: code is commented out but enclosed properly
  /*
  const data = [
    "Kavya", "Halesh", "Rajveer", "Raghu", "Rekha", "Sureshappa",
    "Karthik", "Jyothi", "Nirmala", "Siddappa", "Chaaru", "Honnu", 
    "Ashwini", "Amith"
  ];

  return (
    <div className="App">
      <h1 className='Search'>Name Search</h1>
      <div className='Bar'>
        <SearchBar placeholder="Search for a Name..." data={data} />
      </div>
    </div>
  );
  */

  const cardData = [
    {
      title: 'Appliances for home',
      description: 'This is the description for card 1.',
      image: ' '
    },
    {
      title: 'Washing Machine',
      description: 'This is the description for card 2.',
      image: ''
    },
    {
      title: 'Shoes',
      description: 'This is the description for card 3.',
      image: ' '
    },
    {
      title: 'Shoes',
      description: 'This is the description for card 3.',
      image: ' '
    },
    {
      title: 'Shoes',
      description: 'This is the description for card 3.',
      image: ' '
    },
    {
      title: 'Shoes',
      description: 'This is the description for card 3.',
      image: ' '
    },
    {
      title: 'Shoes',
      description: 'This is the description for card 3.',
      image: ' '
    },
    {
      title: 'Shoes',
      description: 'This is the description for card 3.',
      image: ' '
    }
  ];

  return (
    <div className="App">
       
      <Navbar /> 
      <Menubar/>
      
      
       
      <div className="card__grid">
        {cardData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            image={card.image}
          />
        ))}
      </div>
      <Footer/>
      </div>
  );
}

export default App;
