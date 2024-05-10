//Image (avec props le type, est-ce que ce sera une image arrondi etc....)

/**
 * 
 * @param {url} string 
 *  
 
 */

export default function  Image({url, type}){
    return (
        <img src={url} alt="image" className={type} />
    )



}