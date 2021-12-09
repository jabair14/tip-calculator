
document.getElementById("total").onchange = function(){
    let total = Number(document.getElementById('total').value)
    

    const fifteenPercent = document.getElementById('fifteen')
    const eighteenPercent = document.getElementById('eighteen')
    const twentyPercent = document.getElementById('twenty')
    const twentytwoPercent = document.getElementById('twentytwo')

    // Basic Functionality 

    document.getElementById('fifteen').onclick = function(){
       // console.log(total)
        //localStorage.setItem('total', total)
        //localStorage.getItem(total)
        //console.log(totalCheck)
        // amountDue = total*1.15
        // let amountDueNumber = document.getElementById('amountDue')
        // amountDueNumber.innerHTML = total

        
        // if (typeof(total) === 'number'){
        //let amountDueH2= document.getElementById("h2Total")
        //let tipH2= document.getElementById("h2Tip")
        let amountDue = total*1.15
        let amountDueNumber = document.getElementById('amountDue')
        let tipDue = total*.15
        let tipDueNumber = document.getElementById('tipDue')
        tipDueNumber.innerHTML = tipDue.toFixed(2)
        amountDueNumber.innerHTML = amountDue.toFixed(2)
        //let amountDueText = document.createTextNode(amountDue.toFixed(2));
        //let tipText = document.createTextNode(tipDue.toFixed(2));
        //amountDueH2.appendChild(amountDueText);
        //tipH2.appendChild(tipText);




        // }
        // else if  (typeof(total) !== 'number') {
        //     alert('total must be a number')
        // }
    }

    document.getElementById('eighteen').onclick = function(){
        let amountDue = total*1.18
        let amountDueNumber = document.getElementById('amountDue')
        let tipDue = total*.18
        let tipDueNumber = document.getElementById('tipDue')
        tipDueNumber.innerHTML = tipDue.toFixed(2)
        amountDueNumber.innerHTML = amountDue.toFixed(2)
    }

    document.getElementById('twenty').onclick = function(){
        let amountDue = total*1.2
        let amountDueNumber = document.getElementById('amountDue')
        let tipDue = total*.2
        let tipDueNumber = document.getElementById('tipDue')
        tipDueNumber.innerHTML = tipDue.toFixed(2)
        amountDueNumber.innerHTML = amountDue.toFixed(2)
    }

    document.getElementById('twentytwo').onclick = function(){
        let amountDue = total*1.22
        let amountDueNumber = document.getElementById('amountDue')
        let tipDue = total*.22
        let tipDueNumber = document.getElementById('tipDue')
        tipDueNumber.innerHTML = tipDue.toFixed(2)
        amountDueNumber.innerHTML = amountDue.toFixed(2)
    }

    document.getElementById('custom').onchange = function(){
        let customTip = Number(document.getElementById('custom').value)/100+1
        let customTipForTip = customTip-1
        let amountDue = total*customTip
        let amountDueNumber = document.getElementById('amountDue')
        let tipDue = total* customTipForTip
        let tipDueNumber = document.getElementById('tipDue')
        tipDueNumber.innerHTML = tipDue.toFixed(2)
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

    const updateButton = document.getElementById('update-last')
    
    updateButton.addEventListener('click', function(){

        savedBills.pop()
        savedBills.push(amountDue.innerHTML)
        localStorage.setItem('save', savedBills)
        let list = document.getElementById('bills-list');
        list.removeChild(list.lastElementChild)
        var node = document.createElement("li");
        var textnode = document.createTextNode(amountDue.innerHTML);
        node.appendChild(textnode);
        document.getElementById("bills-list").appendChild(node)
    })
    
    const deleteButton = document.getElementById('delete-from-list')

    deleteButton.addEventListener('click', function(){

        savedBills.pop()
        localStorage.setItem('save',savedBills)
        let list = document.getElementById('bills-list');
        list.removeChild(list.lastElementChild)

    })
    // document.getElementById('add-to-list').onClick = function(){
    //     const str = JSON.stringify(savedBills)
    //     localStorage.setItem('bills', str);
    //     savedBills.push(amountDue)
    //     console.log(savedBills)
         
    // }

  
}



