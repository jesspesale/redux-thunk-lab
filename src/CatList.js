// write your CatList component here
import React from "react"

class CatList extends React.Component {

    render(){
        const cats = this.props.catPics.map(cat => {
            return <img src={cat.url} key={cat.id} />
        })
        // <img src={cat.url} key={cat.key} 
        return  (
            <div>
                {cats}
            </div>
        )  
    }
}

export default CatList