// var btn = document.getElementById('ppp')
// btn.addEventListener('click', () => {
function change() {
    var abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', '1', 'j', 'k', 'l', 'm', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    var ABC = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'N', 'M', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    var symble = ['@', '#', '$', '%', '&', '*',]
    var abcNumber = Math.round(Math.random() * 24)
    var ABCNumber = Math.round(Math.random() * 24)
    var number = Math.round(Math.random() * 9)
    var symbleNumber = Math.round(Math.random() * 5)
    var password = [abc[abcNumber], number, ABC[ABCNumber], abc[abcNumber], symble[symbleNumber], number, ABC[ABCNumber]]
    // password.join('')
    password = password.join('')
    document.write(`${password}<br>`)
    // document.write('<br>',abc[abcNumber], number, ABC[ABCNumber], abc[abcNumber], symble[symbleNumber], number, ABC[ABCNumber])
    // console.log(password);



    //// ye fuction nh chal rha   
}
setInterval(change,1000)

