import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';

const { SearchBar } = Search;
const data = [
  { product_name: 'Avocado', quantity: '1', price: '2 €', co2: '400g', alternative: "", sources:"https://www.standard.co.uk/news/uk/revealed-the-enormous-carbon-footprint-linked-to-eating-avocado-a3591501.html", key:'1' },
  { product_name: 'Bannas', quantity: '1 kg', price: '2,6 €', co2: '480g', alternative: "", key:'2' },
  { product_name: 'Beer', quantity: '1 Bottle', price: '1,25 €', co2: '900g', alternative: "", key:'3' },
  { product_name: 'Salmon', quantity: '1 kg', price: '34 €', co2: '11.9kg', alternative: "", key:'4' },
  { product_name: 'Lamb', quantity: '1 kg', price: '29,90 €', co2: '39.2kg', alternative: "", key:'5' },
  { product_name: 'Dell XPS 13', quantity: '1', price: '$1,379.99', co2: '286kg', alternative: "", sources:"https://www.dell.com/learn/us/en/uscorp1/corp-comm/environment_carbon_footprint_products", key:'6'},
  { product_name: 'Dell AW2518H', quantity: '1', price: '$429.99', co2: '626kg', alternative: "", sources:"https://i.dell.com/sites/csdocuments/CorpComm_Docs/en/carbon-footprint-xps-9360.pdf", key:'6'}
];


const columns = [{
  dataField: 'product_name',
  text: 'Product Name'  
}, {
  dataField: 'co2',
  text: 'CO2',  
  sort: true  
}, {
  dataField: 'price',
  text: 'Product Price',
  sort: true
}];

export default() =>
<ToolkitProvider
  keyField="id"
  data={ data }
  columns={ columns }  
  search
  striped
  hover
  condensed
>
  {
    props => (
      <div>
        <h3>Input something at below input field:</h3>
        <SearchBar { ...props.searchProps } />
        <hr />
        <BootstrapTable
          { ...props.baseProps }
        />
      </div>
    )
  }
</ToolkitProvider>