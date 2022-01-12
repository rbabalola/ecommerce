import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Container} from 'react-bootstrap'
import Header from './components/header'
import Footer from './components/footer'
import HomeScreen from './screens/homescreen'
import productScreen from './screens/productscreen'

const App = () => {
  return (
    <Router>
    <>
    <Header />

    <main className='py-3'>
    <Container>
     <Route path='/' component = {HomeScreen} exact/>
     <Route path='/product/:id' component = {productScreen}/>
      </Container>
    </main>

    <Footer />
    </>
    </Router>
  );
}

export default App;
