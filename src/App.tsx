import { classNames } from './helpers/classNames/classNames';
import './styles/index.scss';

const App = () => {
    return (
        <div className={classNames('app', {}, [])}>
            <h1>Hello, world!</h1>
        </div>
    );
}

export default App;