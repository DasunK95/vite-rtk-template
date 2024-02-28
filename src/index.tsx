import ReactDOM from 'react-dom/client'
import App from '@app/App'
import './index.css'
import {Provider} from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'
import { presistor, store } from '@store/store';

const container: any = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={presistor}>
            <App/>
        </PersistGate>
    </Provider>
);