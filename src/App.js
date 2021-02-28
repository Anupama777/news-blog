import logo from './logo.svg';
import HomePage from './pages/homepage/homepage.component';
//import 'bootstrap/dist/css/bootstrap.min.css';
import {Route} from 'react-router-dom';
import Header from './components/header/header.component'
import ArticlePage from './pages/articlepage/articlepage.component';
import Banner from './components/banner/banner.component'
import ArticleDisplay from './pages/articledisplay/articledisplay'


import './App.css';

function App() {
  return (
    <div>
      <Header/>
      <Banner/>
      
    <Route exact path="/" component={HomePage}/>
    <Route exact path="/articlepage" component={ArticlePage}/>
    <Route exact path="/articlepage/id" component={ArticleDisplay} />

    </div>
  );
}

export default App;
