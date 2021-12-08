
document.getElementById("total").onchange = function(){
    let total = Number(document.getElementById('total').value)
    console.log(total)

    const fifteenPercent = document.getElementById('fifteen')
    const eighteenPercent = document.getElementById('eighteen')
    const twentyPercent = document.getElementById('twenty')
    const twentytwoPercent = document.getElementById('twentytwo')

    // let amountDue = total 

    document.getElementById('fifteen').onclick = function(){
        let amountDue = total*1.15
        console.log(amountDue)
        document.getElementsById('fifteen')
        document.createElement('h3')
        h3.innerHTML = amountDue
    }

    // amountDue = document.createElement('h3')
}



// let total = document.getElementById("total").value;
// console.log(total)