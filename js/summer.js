
//For Coupon Apply button Active/Inactive
document.getElementById('coupon-text').addEventListener('keyup', function (event){
    const couponText = event.target.value;
    const couponButton = document.getElementById('btn-coupon');
    if(couponText == 'SELL200'){
        couponButton.removeAttribute('disabled');
    }
    else{
        couponButton.setAttribute('disabled', true);
    }
    return couponText;
   })


// Calculate Cart Item and Price
let total = 0;
function btnHandleClick(target){

    const itemName = target.childNodes[3].childNodes[3].innerText;
    const p = document.createElement('p');
    p.innerText = itemName;

    const selectedItems = document.getElementById('selected-items');
    const count = selectedItems.childElementCount;

    selectedItems.appendChild(p);

    p.innerText = `${count+1}.  ${itemName}`;
    p.classList.add('my-4')

    const price = target.childNodes[3].childNodes[5].innerText.split(" ")[0];
    total = parseInt(total) + parseInt(price);
    document.getElementById('total-price').innerText = total;
    document.getElementById('grand-total').innerText = total;

    //Calculate Discount
    document.getElementById('btn-coupon').addEventListener('click', function (){
        const couponText = document.getElementById('coupon-text');
        const applyCoupon = couponText.value;
        couponText.value = '';
        if (applyCoupon === 'SELL200'){
            const discountPercent = 20;
            if(total >=200){
                const totalDiscount = (total * discountPercent) / 100;
                document.getElementById('discount-total').innerText = totalDiscount;
                document.getElementById('grand-total').innerText = total - totalDiscount;
            }
            else{
                alert('buy above 200tk');
            }  
        }
    })
    return total;
}


