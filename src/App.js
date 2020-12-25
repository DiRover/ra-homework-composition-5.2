import React from 'react'
import './App.css';
import Content from './component/Content';
import Header from './component/Header';
import ItemList from './component/ItemList';
import ContentItem from './component/ContentItem';
import MainNews from './component/MainNews';
import NewsList from './component/NewsList';
import Page from './component/Page';
import SearchWidget from './component/SearchWidget';
import Baner from './component/Baner';
import { itemsShort, items, currency } from './component/items';
import logo from './img/20943496.jpg';
import christmasTree from './img/christmas-1788875_1280.jpg';




function App() {
  return (
    <Page>
      <Header headerStyle='header_style'>
        <div>
          <MainNews>Important main news</MainNews>
          <NewsList list={ itemsShort } styleList='style_list'>
            {list => list.map((item, index) => <ItemList key={index}>{item}</ItemList>)}
          </NewsList>
          <NewsList list={ currency } styleList='style_list_horizontal'>
            {list => list.map((item, index) => <ItemList key={index}>{item}</ItemList>)}
          </NewsList>
        </div>
      </Header>
      <SearchWidget logo = { logo } buttonText='search'/>
      <Baner img = {christmasTree } styleImg='baner' />
      <Content list={ items }>
        {list => list.map((item, index) => <ContentItem key={index}><h3>{ item.title }</h3><p>{ item.text }</p></ContentItem>)}
      </Content>
      <div><a href='https://www.freepik.com/vectors/logo'>Logo vector created by vectorjuice - www.freepik.com</a></div>
      <div>Image by <a href="https://pixabay.com/users/geralt-9301/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2973329">Gerd Altmann</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2973329">Pixabay</a></div>
      <div>Image by <a href="https://pixabay.com/users/pezibear-526143/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1788875">Pezibear</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1788875">Pixabay</a></div>
    </Page>
  );
}

export default App;
