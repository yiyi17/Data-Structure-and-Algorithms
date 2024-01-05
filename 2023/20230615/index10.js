
// 分类关注点
// 提炼函数
// 修改变量名 
// 以查询取代临时变量（178）:移出局部变量，局部变量要考虑的变少了

// 内联变量（123）:计算观众积分

// 将函数赋值给临时变量：format

// format 重命名 usd

// 拆分循环、移动语句

// 提炼函数、内联变量

function statement(invoice) {
  let totalAmount = 0
  let result = `Statement for ${invoice.customer}\n`
  for(let perf of invoice.performances) {
    result +=` ${playFor(perf).name}: ${usd(amountFor(perf))} ${perf.audience} seats\n`
    totalAmount +=  amountFor(perf)
  }
  
  result += `Amount owned is ${usd(totalAmount)}\n`
  result += `You earned ${totalVolumeCredites(invoice)} credits \n`
  
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

console.log('statement(invoice, plays)', statement(invoice))

function totalVolumeCredites(invoice) {
  let volumeCredites = 0
  for (const perf of invoice.performances) {
    volumeCredites += volumeCreditsFor(perf)

  }
  return volumeCredites
}

function usd(aNumber) {
  return new Intl.NumberFormat('en-US', {
    style: "currency",
    currency: 'USD',
    minimumFractionDigits: 2
  }).format(aNumber / 100);
}

function volumeCreditsFor(perf) {
  let volumeCredites = 0
  volumeCredites = Math.max(perf.audience -30, 0)
  if( "comedy" === playFor(perf).type) volumeCredites += Math.floor(perf.audience / 5)
  return volumeCredites
}

function playFor(aPerformance) {
  return plays[aPerformance.playID]
}

function amountFor(aPerformance) {
  let result = 0;
  switch (playFor(aPerformance).type) {
    case "tragedy":
      result = 4000;
      if (aPerformance.audience > 30) {
        result += 1000 * (aPerformance.audience - 30);
      }
      break;
    case "comedy":
      result = 3000;
      if (aPerformance.audience > 20) {
        result += 1000 + 50 * (aPerformance.audience - 20);
      }
      result += 300 * aPerformance.audience;
      break;
    default:
      throw new Error(`Unknown type: ${playFor(aPerformance).type}`);
  }
  return result;
}


