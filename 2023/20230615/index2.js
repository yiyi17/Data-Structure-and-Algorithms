
// 分类关注点
// 提炼函数
// 修改变量名



function statement(invoice, plays) {
  let totalAmount = 0
  let volumeCredites = 0
  let result = `Statement for ${invoice.customer}\n`
  const format = new Intl.NumberFormat('en-US', {
    style: "currency",
    currency: 'USD',
    minimumFractionDigits: 2
  }).format;
  for(let perf of invoice.performances) {
    const play = plays[perf.playID]
    let thisAmount = amountFor(play, perf);
    volumeCredites += Math.max(perf.audience -30, 0)

    if( "comedy" === play.type) volumeCredites += Math.floor(perf.audience / 5)

    result +=` ${play.name}: ${format(thisAmount / 100)} ${perf.audience} seats\n`
    totalAmount += thisAmount
  }
  result += `Amount owned is ${format(totalAmount / 100)}\n`
  result += `You earned ${volumeCredites} credits \n`
  
  return result
}


const invoice = 
  {
    "customer": "BigCo",
    "performances":[
      {
        "playID": "Hamlet",
        "audience": 55
      },
      {
        "playID": "As you like it",
        "audience": 35
      },
      {
        "playID": "Othello",
        "audience": 40
      }
    ]
  }

const plays = {
  "Hamlet": {
    "name": "Hamlet",
    "type": "tragedy"
  },
  "As you like it": {
    "name": "As you like it",
    "type": "comedy"
  },
  "Othello": {
    "name": "Othello",
    "type": "tragedy"
  }
}

console.log('statement(invoice, plays)', statement(invoice, plays))

function amountFor(play, perf) {
  let result = 0;
  switch (play.type) {
    case "tragedy":
      result = 4000;
      if (perf.audience > 30) {
        result += 1000 * (perf.audience - 30);
      }
      break;
    case "comedy":
      result = 3000;
      if (perf.audience > 20) {
        result += 1000 + 50 * (perf.audience - 20);
      }
      result += 300 * perf.audience;
      break;
    default:
      throw new Error(`Unknown type: ${play.type}`);
  }
  return result;
}
