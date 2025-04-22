let comparedAgainst = '686974207468652062756c6c277320657965'

function HexDecode(hex){
    let hex1 = Buffer.from(hex,'hex')
    let hex2 =  Buffer.from(comparedAgainst,'hex')
    let XORvalue =[]

    for(let i = 0 ;  i < hex1.length ; i++){
        let resultByte = hex1[i] ^ hex2[i]
        XORvalue.push(resultByte.toString(16).padStart(2,'0'))
    }
    return XORvalue.join('')
}

let answer = '746865206b696420646f6e277420706c6179'
console.log(HexDecode('1c0111001f010100061a024b53535009181c'));
console.log('compare' , '746865206b696420646f6e277420706c6179' === answer)
// link to challenge https://cryptopals.com/sets/1/challenges/2