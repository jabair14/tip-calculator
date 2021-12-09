
document.getElementById("total").onchange = function(){
    let total = Number(document.getElementById('total').value)
    

    const fifteenPercent = document.getElementById('fifteen')
    const eighteenPercent = document.getElementById('eighteen')
    const twentyPercent = document.getElementById('twenty')
    const twentytwoPercent = document.getElementById('twentytwo')

    // Basic Functionality 

    document.getElementById('fifteen').onclick = function(){
        let amountDue = total*1.15
        let amountDueNumber = document.getElementById('amountDue')
        amountDueNumber.innerHTML = amountDue.toFixed(2)
    }

    document.getElementById('eighteen').onclick = function(){
        let amountDue = total*1.18
        let amountDueNumber = document.getElementById('amountDue')
        amountDueNumber.innerHTML = amountDue.toFixed(2)
    }

    document.getElementById('twenty').onclick = function(){
        let amountDue = total*1.2
        let amountDueNumber = document.getElementById('amountDue')
        amountDueNumber.innerHTML = amountDue.toFixed(2)
    }

    document.getElementById('twentytwo').onclick = function(){
        let amountDue = total*1.22
        let amountDueNumber = document.getElementById('amountDue')
        amountDueNumber.innerHTML = amountDue.toFixed(2)
    }

    document.getElementById('custom').onchange = function(){
        let customTip = Number(document.getElementById('custom').value)/100+1
        let amountDue = total*customTip
        let amountDueNumber = document.getElementById('amountDue')
        amountDueNumber.innerHTML = amountDue.toFixed(2)
    }

    // List items 
    // myStorage = window.localStorage
    // const savedBills = []
    // document.addEventListener('ul')
    // localStorage.setItem('billsList', 'somethingelse')
    // console.log(savedBills)

    let savedBills = []

    

    const saveButton = document.getElementById('add-to-list')

    saveButton.addEventListener('click', function(){
        
        savedBills.push(amountDue.innerHTML)
        localStorage.setItem('save', savedBills)

        var node = document.createElement("li");
        var textnode = document.createTextNode(amountDue.innerHTML);
        node.appendChild(textnode);
        document.getElementById("bills-list").appendChild(node);
    })
    
    // document.getElementById('add-to-list').onClick = function(){
    //     const str = JSON.stringify(savedBills)
    //     localStorage.setItem('bills', str);
    //     savedBills.push(amountDue)
    //     console.log(savedBills)
         
    // }

  
}



