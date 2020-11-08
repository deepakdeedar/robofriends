import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';

function App() {
    return (
        <div className='tc'>
            <h1>RoboFriends</h1>
            <SearchBox/>
            <CardList robots={robots}/>
        </div>
    );
}

export default App;