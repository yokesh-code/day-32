function CartList({cartItem,removeFromCart}) {
    return (
        <>
         <div className='col-6'>
          <li className="list-group-item d-flex justify-content-between align-items-start">
                      <div className="ms-2 me-auto">
                        <div className="text-start">{cartItem.name}</div>
                      </div>
                      <div className="mx-5">{cartItem.id}</div>
                      <div className="mx-5">${cartItem.price}</div>
                      <button className="badge  md-2 bg-danger rounded-pill" onClick={()=>{removeFromCart(cartItem)}}>Return</button>
                    </li>
                    </div>
  
        </>
    );
  }
  export default CartList;