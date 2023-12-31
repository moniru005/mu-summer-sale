
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
    const grandTotal = document.getElementById('grand-total').innerText = total;

    //For Coupon Apply button enable/disable
    if(total >= 200){
        document.getElementById('btn-coupon').disabled = false;
    }
    else{
        document.getElementById('btn-coupon').disabled = true;
    }

    //Purchase Button enable/disable
    if(grandTotal > 0){
        document.getElementById('btn-purchase').disabled = false;
    }
    else{
        document.getElementById('btn-purchase').disabled = true;
    }

    //Calculate Discount
    document.getElementById('btn-coupon').addEventListener('click', function (){
        const couponText = document.getElementById('coupon-text');
        const applyCoupon = couponText.value;
        couponText.value = '';
        if (applyCoupon === 'SELL200'){
            const discountPercent = 20;
            if(total >= 200){
                const totalDiscount = (total * discountPercent) / 100;
                document.getElementById('discount-total').innerText = totalDiscount;
                document.getElementById('grand-total').innerText = total - totalDiscount;
            }
            else{
                alert('You need to buy above 200tk for get 20% discount');
            }  
        }
    })
    return total;
}
