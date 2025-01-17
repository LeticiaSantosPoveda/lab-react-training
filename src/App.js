
import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import CreditCard from './components/CreditCard';
import BoxColor from './components/BoxColor';


function App() {

  const user1 = {
    lastName: 'Doe',
    firstName: 'John',
    gender: 'male',
    height: 178,
    birth: new Date("1992-07-14"),
    picture: "https://randomuser.me/api/portraits/men/44.jpg"
  }

  const user2 = {
    lastName:'Delores',
    firstName:'Obrien',
    gender:'female',
    height: 172,
    birth: new Date("1988-05-11"),
    picture: "https://randomuser.me/api/portraits/women/44.jpg",
  }

  return (
    <>
    <div className="App">
        <IdCard user={user1}/>
        <IdCard user={user2}/>
    </div>
    <Greetings lang="de">Ludwig</Greetings>
    <Greetings lang="fr">François</Greetings>

    <Random min={1} max={6}/>
    <Random min={1} max={100}/>

    <BoxColor r={255} g={0} b={0} />
    <BoxColor r={128} g={255} b={0} />

    <CreditCard
      type="Visa"
      number="0123456789018845"
      expirationMonth={3}
      expirationYear={2021}
      bank="BNP"
      owner="Maxence Bouret"
      bgColor="#11aa99"
      color="white" 
    />
    </>
  );
}

export default App;
