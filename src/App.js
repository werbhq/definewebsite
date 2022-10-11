import { Define } from './define/define';
import Hash from './hash/hash';

var isDefine = false;

function App() {
    return <div className="App">{isDefine ? <Define></Define> : <Hash></Hash>}</div>;
}

export default App;
