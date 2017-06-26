class Products extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.state.filterText = "";
        this.state.products = [];

    }

    componentDidMount(){
        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://localhost:8080/api/allFilms');
        let self = this;
        xhr.onreadystatechange = function () {
            if (xhr.readyState !== 4) return;

            if (xhr.status !== 200) {
                console.log('Error');
            } else {
                try {
                    let rates = JSON.parse(xhr.response);
                    self.setState({
                        products: rates
                    });

                } catch (e) {
                    console.log('Error, this something  error with AJAX');
                }
            }
        };
        xhr.send(null);
    }

    handleUserInput(filterText) {
        this.setState({filterText: filterText});
    };

    handleRowDel(product) {
        let index = this.state.products.indexOf(product);
        this.state.products.splice(index, 1);
        this.setState(this.state.products);
    };

    handleAddEvent(e) {
        let id = (Math.floor(Math.random() * 999999));
        let product = {
            id: id,
            name: "",
            produce_year: "",
            actors: "",
            video_format: ""
        };
        this.state.products.push(product);
        this.setState(this.state.products);
    }

    handleProductTable(evt) {
        let item = {
            id: evt.target.id,
            name: evt.target.name,
            produce_year: evt.target.produce_year,
            actors: evt.target.actors,
            value: evt.target.value
        };
        let products = this.state.products.slice();
        let newProducts = products.map(function(product) {

            for (let key in product) {
                if (key === item.name && Number(product.id) === Number(item.id)) {
                    product[key] = item.value;

                }
            }
            return product;
        });
        this.setState({products:newProducts});
        console.log(this.state);
    };

    render (){
        return(
            <div>
                <SearchBar filterText={this.state.filterText} onUserInput={this.handleUserInput.bind(this)}/>
                <ProductTable onProductTableUpdate={this.handleProductTable.bind(this)} onRowAdd={this.handleAddEvent.bind(this)} onRowDel={this.handleRowDel.bind(this)} products={this.state.products} filterText={this.state.filterText}/>
            </div>
        )}
}

class SearchBar extends React.Component {
    handleChange() {
        this.props.onUserInput(this.refs.filterTextInput.value);
    }
    render() {
        return (
            <div className= "input-group input-group-lg">
                <input className="form-control" type="text" placeholder="Search..." value={this.props.filterText} ref="filterTextInput" onChange={this.handleChange.bind(this)}/>
                <div className="input-group-btn">
                    <button className="btn btn-default" type="submit"><i className="glyphicon glyphicon-search"/></button>
                </div>
            </div>

        )}
}

class ProductTable extends React.Component {
    render() {
        let onProductTableUpdate = this.props.onProductTableUpdate;
        let rowDel = this.props.onRowDel;
        let filterText = this.props.filterText;
        let product = this.props.products.map(function(product) {
            if (product.name.indexOf(filterText) === -1) {
                return;
            }
            return (<ProductRow onProductTableUpdate={onProductTableUpdate} product={product} onDelEvent={rowDel.bind(this)} key={product.id}/>)
        });
        return (
            <div  className="table-responsive">
                <button type="button"  onClick={this.props.onRowAdd} className="btn btn-success btn-block">Add</button>
                <table className="table borderless table-hover">
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Release</th>
                        <th>Format</th>
                        <th>Stars</th>
                    </tr>
                    </thead>
                    <tbody>
                    {product}
                    </tbody>
                </table>
                <button type="button" className="btn btn-success btn-block">Save</button>
            </div>

        )}
}

class ProductRow extends React.Component {
    onDelEvent() {
        this.props.onDelEvent(this.props.product);

    }

    render() {

        return (
            <tr className="eachRow">
                <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
                    type: "name",
                    value: this.props.product.name,
                    id: this.props.product.id
                }}/>
                <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
                    type: "produce_year",
                    value: this.props.product.produce_year,
                    id: this.props.product.id
                }}/>
                <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
                    type: "video_format",
                    value: this.props.product.video_format,
                    id: this.props.product.id
                }}/>
                <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
                    type: "actors",
                    value: this.props.product.actors,
                    id: this.props.product.id
                }}/>
                <td className="del-cell">
                    <input type="button" onClick={this.onDelEvent.bind(this)} value="X" className="btn btn-danger"/>
                </td>
            </tr>
        )
    }
}

class EditableCell extends React.Component {

    render() {
        return (
            <td >
                <input className="form-control no-border "  type='text' name={this.props.cellData.type} id={this.props.cellData.id} value={this.props.cellData.value} onChange={this.props.onProductTableUpdate}/>
            </td>
        )}
}

ReactDOM.render(
    < Products />,
    document.getElementById('container')
);