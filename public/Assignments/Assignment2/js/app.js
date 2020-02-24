
var item1Total = 0;
var item2Total = 0;

function updateCartTotal()
{
    total = item1Total + item2Total;
    $("#cart-total").html(`Total: $${total}`);
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

$("#purchase").on("click",function()
{
    alert("Sorry! All items out of stock!");
    $("#item-1-quantity").val(0);
    $("#item-2-quantity").val(0);
    $("#item-1-cart").attr("hidden","");
    $("#item-2-cart").attr("hidden","");
});
