// Show the uses of try/catch when processing a payment during the checkout process, handling possible errors like payment failure or network issues.

let balance = 3000;

function processPayment(amount) {
  return new Promise((resolve, reject) => {

      if (amount <= balance) {
        balance -= amount; 
        resolve(`Payment of ₹${amount} successful. Remaining balance: ₹${balance}`);
      } else {
        reject(new Error("Payment failed: Insufficient balance."));
      }
  });
}

async function pay(amount) {
  console.log(`Processing payment of ₹${amount}...`);

  try {
    const data = await processPayment(amount);
    console.log(data);
    console.log("Payment Succeeded!");
  } catch (e) {
    console.log("Payment failed:", e.message);
  }
}

pay(2000)

pay(1000)

pay(500)
