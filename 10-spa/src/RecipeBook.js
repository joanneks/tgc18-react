import React from 'react'
import AddNew from './pages/AddNew'
import Listing from './pages/Listing'
import axios from 'axios'

export default class RecipeBook extends React.Component {

    url="https://8888-kunxinchor-dwadrecipeap-tbn807v1lrg.ws-us51.gitpod.io/"

    state={
        active:'listing',  // the `active` variable in the state
                          // determines which page to show
        data:[],
        newTitle:"",
        newIngredients:""
    }

    async componentDidMount() {
        let response = await axios.get( this.url + 'recipes');
        this.setState({
            data: response.data
        })
    }

    processAddNew = async () => {

        // if any line of code in the try block causes an error (aka exception)
        // the code execution will jump to the first line in the catch block
        try {
            // 1. add the database via the API
            // the response.data.insertedId will have the new _id of the document
            let response = await axios.post(this.url + 'recipes',{
                'title': this.state.newTitle,
                'ingredients': this.state.newIngredients.split(',')
            })

            // 2. we update React and the new recipe object will have the _id of the database
            const newRecipe = {
                _id: response.data.insertedId,
                title: this.state.newTitle,
                ingredients: this.state.newIngredients.split(',') 
            }
    
            this.setState({
                'data': [...this.state.data, newRecipe],
                'active': 'listing'
            })

        } catch(e) {
            alert("Error adding new recipe. Please contact administrator");
        }


        

       
    }

    renderContent() {
        if (this.state.active==='listing') {
            return <Listing data={this.state.data}/>
        } else if (this.state.active==='add-new') {
            return <AddNew
                        newTitle={this.state.newTitle}
                        newIngredients={this.state.newIngredients}
                        updateFormField={(key, value)=>{
                            this.setState({
                                [key]: value
                            })
                        }}
                        addNew={this.processAddNew}
            />
        }
    }

    changePage(page) {
        this.setState({
            'active': page
        })
    }

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <button className={"nav-link " + (this.state.active==='listing' ? 'active' : '')} aria-current="page" onClick={()=>{
                                this.changePage("listing")
                            }}>
                                Recipes
                            </button>
                        </li>
                        <li className="nav-item">
                            <button className={"nav-link " + (this.state.active==='add-new' ? 'active' : '')} aria-current="page" onClick={()=>{
                                this.changePage("add-new")
                            }}>
                                Add New
                            </button>
                        </li>

                    </ul>
                    {this.renderContent()}
                </div>


              
            </React.Fragment>
        )
    }
}