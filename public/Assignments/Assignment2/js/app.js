
var item1Total = 0;
var item2Total = 0;

function updateCartTotal()
{
    total = item1Total + item2Total;
    $("#cart-total").html(`<Strong>Total: $${total}</Strong>`);
};

$("#item-1-add-btn").on("click",function()
{
    let itemQuantity = $("#item-1-quantity").val();
    let itemPrice = 100;

    item1Total = itemPrice * itemQuantity;

    $("#item-1-cart").removeAttr("hidden");
    $("#item-1-cart-quantity").html(`Quantity: ${itemQuantity}`);
    $("#item-1-cart-total").html(`Total: $${item1Total}`);
    
    updateCartTotal();
});
$("#item-2-add-btn").on("click",function()
{
    let itemQuantity = $("#item-2-quantity").val();
    let itemPrice = 12;

    item2Total = itemPrice * itemQuantity;

    $("#item-2-cart").removeAttr("hidden");
    $("#item-2-cart-quantity").html(`Quantity: ${itemQuantity}`);
    $("#item-2-cart-total").html(`Total: $${item2Total}`);

    updateCartTotal();
});
