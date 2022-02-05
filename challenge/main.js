const searchInput = document.querySelector("#search-input");

searchInput.addEventListener("keydown", function(event) 
{
    if(event.code == "Enter") {
        search();
    }
});
function search(){
    const input=searchInput.value;

    window.location.href="https://www.google.co.in/search?q="+ input +"&source=hp&ei=7Zb3YeSzL6vdmAXQx4ngAg&iflsig=AHkkrS4AAAAAYfek_QCPwT0dDH2ZZEPBezfHqVeB_HBw&ved=0ahUKEwik3vbVwtv1AhWrLqYKHdBjAiwQ4dUDCAs&oq="+ input +"&gs_lcp=Cgdnd3Mtd2l6EAwyCAguEIAEELEDMggIABCABBCxAzILCAAQgAQQsQMQgwEyEQguEIAEELEDEIMBEMcBEK8BMggIABCABBCxAzILCAAQgAQQsQMQgwEyCwgAEIAEELEDEIMBMgsIABCABBCxAxCDATIICC4QgAQQsQMyCwgAEIAEELEDEIMBOg4IABDqAhC0AhDZAhDlAjoOCC4QgAQQsQMQxwEQowI6CwguEIAEELEDEIMBOggIABCxAxCDAToICC4QsQMQgwE6BQguEIAEOgUIABCABDoRCC4QgAQQsQMQgwEQxwEQowJQoAJYogxg2k5oAXAAeACAAdoGiAH5G5IBBTUtMi4zmAEAoAEBsAEI&sclient=gws-wiz"
}