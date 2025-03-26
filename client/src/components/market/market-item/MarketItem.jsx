export default function MarketItem({
    item,
    imageUrl,
    price,
    availability,
    type,
    _id
    
}) 
   
{
    return (
        <div className="item">
            <img src={imageUrl} alt="example1" />
            <h3 className="model">{item}</h3>
            <div className="item-info">
                <p className="price">Price: {price}</p>
                <p className="availability">{availability}</p>
                <p className="type">Type: {type}</p>
            </div>
            <a className="details-btn" href="#">
                Uncover More
            </a>
        </div>
    );
}
