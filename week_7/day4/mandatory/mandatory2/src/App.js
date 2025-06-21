import './App.css';
import PostList from './PostList';
import posts from './posts.json'
function App() {
  return (
    <div className="App">
      {posts.map((e)=>{
       return <PostList titre={e.title} contenu={e.content} />
      })}
    </div>
  );
}

export default App;
