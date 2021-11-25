import React, { Component } from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
// import PostStatusFilter from '../post-status';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';


export default class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            data: [
                {label: "Статья номер 1", important: true,  like: false , id:1 },
                {label: "Статья номер 2", important: false, like: false , id:2},
                {label: "Статья номер 3", important: false, like: false , id:3},

            ],
            searchValue: ""
        }
        this.onDelete = this.onDelete.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onToggleImportant = this.onToggleImportant.bind(this);
        this.onToggleLike = this.onToggleLike.bind(this);
        this.onUpdateSearchPanel = this.onUpdateSearchPanel.bind(this);

        this.id = 4;
    }
    onDelete(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            
            const before = data.slice(0 ,index);
            const after = data.slice(index + 1);
            const newData = [...before, ...after];
            return {
                data: newData
            }
        })

    }
    addItem(text){
        
        const newItem = {
            label: text,
            important: false,
            id:this.id++
        }
        console.log(this.id)

        this.setState(({data}) => {
            const newArr = [...data, newItem];

            return {
                data: newArr
            }
        })

    }

    onToggleImportant(id){
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            
            const before = data[index];
            const newLike = {...before, important: !before.important}
            const newData = [...data.slice(0, index),newLike, ...data.slice(index + 1)];

            return {
                data: newData
            }
        })
    }


    onToggleLike(id){
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            
            const before = data[index];
            const newLike = {...before, like: !before.like}
            const newData = [...data.slice(0, index),newLike, ...data.slice(index + 1)];

            return {
                data: newData
            }
        })
    }



    searchPost (items,searchValue){
        
        if(searchValue.length === 0){
            return items
        } 

        return items.filter((item) => {
            return item.label.indexOf(searchValue) > -1;
        })
    }

    onUpdateSearchPanel(value){
        this.setState({
            searchValue: value
        })
    }



    render () {
        const {data,searchValue} = this.state;

        const likes = data.filter(item => item.like).length;

        const searchPost = this.searchPost(data, searchValue);
        const allitems = searchPost.length;
        return (
            <div>
                <AppHeader 
                
                    allPost={allitems}
                    likes={likes}
                />
                <div className="search-panel d-flex">
                    <SearchPanel 
                        onUpdateSearchPanel={this.onUpdateSearchPanel}
                    />
                </div>
                <PostList 
                    posts={searchPost}
                    onDelete={this.onDelete}
                    onToggleImportant={this.onToggleImportant}
                    onToggleLike={this.onToggleLike}
                />
                <PostAddForm 
                    addItem={this.addItem}
                />
            </div>
        )
    }

    
}


// <PostStatusFilter />