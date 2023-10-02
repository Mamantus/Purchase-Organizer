import { useState } from "react"
import AddButton from "./AddButton"
// import AddProducts from "./AddProducts"
// <AddProducts/>

const Category = ({ id, removeCategory }) => {

    const [input, setInput] = useState('')
    const [result, setResult] = useState()
    const [hidden, setHidden] = useState(false)
    const [style, setStyle] = useState('category')

    // Function that handles the form submit. As the form is submitted, the event here updates the new values of user input and boolean change.
    const handleSubmit = (e) => {
        e.preventDefault();
        setResult(input);
        setHidden(true)
        setInput('')
        // urlInput('')
    }

    // Handles the action of onSubmit event in the form.
    const handleChange = (e) => {
        const value = e.target.value;
        setInput(value)
    }

    // Ternary operation that checks if style is set to 'category', if it is, then switch to 'expandedCategory'. Can toggle between them.
    // The if statement here in combination with the {result} decides if this line of code can be run or not.
    const changeStyle = () => {
        if (result) {
            setStyle(style === 'category' ? 'expandedCategory' : 'category')
        };
    }

    const stopPropagation = (e) => {
        e.stopPropagation();
    }

    const [item, setItem] = useState('')
    const [addedItem, setAddedItem] = useState([])
    const [url, setUrl] = useState('')
    const [addedUrl, setAddedUrl] = useState([])

    const addItem = (e) => {
        e.preventDefault()
        setAddedItem([...addedItem, item])
        setItem('')
    }
    const addUrl = (e) => {
        e.preventDefault()
        setAddedUrl([...addedUrl, url])
        setUrl('')
    }
    const itemInput = (e) => {
        // e.preventDefault()
        const itemValue = e.target.value
        setItem(itemValue)
    }
    const urlInput = (e) => {
        // e.preventDefault()
        const urlValue = e.target.value
        setUrl(urlValue)
    }
    const removeItem = (indexToRemove) => {
        setAddedItem(addedItem.filter((_, index) => index !== indexToRemove));
    }
    const removeUrl = (indexToRemove) => {
        setAddedUrl(addedUrl.filter((_, index) => index !== indexToRemove));
    }
      

    return (
        <>
            {style === 'category' &&
                <div className={style} onClick={changeStyle}>
                    <span className="categoryTitle" >{result}
                        { // Show input and button as long as hidden is set to false. On submit hidden will set to true. The && operator shows this section as long as it's set to true.
                            !hidden &&
                            (<form className="form" onSubmit={handleSubmit}>
                                {setHidden &&
                                    (<input
                                        placeholder="Enter a title"
                                        value={input}
                                        onChange={handleChange}
                                    />)}
                                    
                            </form>)}
                    </span>
                </div>}

            {style !== 'category' &&
                <div className="expandedCategory" onClick={stopPropagation}>
                    <h2>{result}</h2>
                    <div className="input-container">
                        <form className="productInput" action="submit" onSubmit={addItem}>
                            <input
                                placeholder="Name of product"
                                value={item}
                                onChange={itemInput}
                                required />
                            <AddButton />
                        </form>
                        <form action="submit" onSubmit={addUrl}>
                            <input className="URLList"
                                placeholder="Enter the URL"
                                value={url}
                                onChange={urlInput}
                                required
                            />
                            <AddButton />
                        </form>
                    </div>
                    <div className="item-container">
                        <ul className="list-container">
                        {addedItem.map((item, index) => (
                        <li className="items" key={index}>
                            {item}
                            <i className="remove" onClick={() => removeItem(index)}>remove</i>
                        </li>
                    ))}
                        </ul>
                        <ul className="list-container">
                        {addedUrl.map((url, index) => (
                        <li className="items" key={index}>
                            <a href={url} target="_blank" rel="noopener noreferrer">{url}</a>
                            <i className="remove" onClick={() => removeUrl(index)}>remove</i>
                        </li>
                    ))}
                        </ul>
                    </div>
                    <div className="xIcon">
                        <p className="removeCategory" onClick={() => removeCategory(id)}>Remove Category</p>
                        <i onClick={changeStyle}>Close</i>
                    </div>
                </div>  
            }    
        </>
    )
}

export default Category