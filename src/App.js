import React from 'react';
import {Client as Styletron} from 'styletron-engine-atomic';
import {Provider as StyletronProvider} from 'styletron-react';
import {LightTheme, BaseProvider} from 'baseui';
import StatefulProductList from "./components/StatefulProductList";

import { API_BASE } from './endpoint.config'

const engine = new Styletron();

const fetchOptions = {
  method: 'GET',
  header: { 'Content-Type': 'application/json' },
};

function App() {
  const [avaliableProducts, setAvaliableProducts] = React.useState([]);

  React.useEffect(() => {
    fetch(`${API_BASE}/products.json`, fetchOptions).then( (response) => {
      response.json().then((json)=>{
        setAvaliableProducts(json['review'])
      })
    })
  }, []);

  return (
    <div className="App">
      <StyletronProvider value={engine}>
        <BaseProvider theme={LightTheme}>
          <StatefulProductList avaliableProducts={avaliableProducts} numProductPerPage={5} />
        </BaseProvider>
      </StyletronProvider>
    </div>
  );
}

export default App;
