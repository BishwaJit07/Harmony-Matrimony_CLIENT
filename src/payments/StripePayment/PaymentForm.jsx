import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import './stripeStyle.css'

const PaymentForm = () => {
  const stripe = useStripe()
  const elements = useElements()
  const [cardError, setCardError] = useState('')
  const [clientSecret, setClientSecret] = useState('')
  const [processing, setProcessing] = useState(false)
  const [transactionId, setTransactionId] = useState()

  // TODO: Take this data dynamically
  const price = 50
  const user = {
    name: 'John Smith',
    email: 'john@email.com'
  }

  useEffect( () => {
    fetch('http://localhost:5000/create-payment-intent', {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({price: price}) // set price dynamically
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setClientSecret(data.clientSecret)
      })
  } , [price])

  const handleSubmit = async (event) => {
    event.preventDefault()

    if(!stripe || !elements){
      return
    }

    const card = elements.getElement(CardElement)
    if(card === null) {
      return
    }

    const {paymentMethod, error} = await stripe.createPaymentMethod({
      type: 'card',
      card
    })

    if(error){
      setCardError(error.message)
      console.log("[error]", error)
    }
    else{
      setCardError('')
      console.log('payment method', paymentMethod)
    }

    setProcessing(true)

    const { paymentIntent, error: confirmError} = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: user.name,
            email: user.email
          },
        },
      },
    )

    if(confirmError){
      console.log(confirmError)
    }

    console.log("payment intent", paymentIntent)
    setProcessing(false)

    if(paymentIntent.status === "succeeded"){
      setTransactionId(paymentIntent.id)
      const payment = {
        email: user.email,
        transactionId: paymentIntent.id,
        price,
        date: new Date(),
        status: "pending"
      }

      fetch('http://localhost:5000/save-payments', {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(payment)
      })
        .then(res => res.json())
        .then(data => console.log(data))
    }
    
    
  }
  
  return (
    <div className='w-full'>
      <form className='mx-auto my-4 m-0 flex flex-col  class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 ' onSubmit={handleSubmit}>
        <h5 className="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
          Stripe Payment
        </h5>
        <img src="https://i.ibb.co/82q3yYg/card.png" alt="" />
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button type="submit" disabled={!stripe || !clientSecret || processing}>
          Pay
        </button>
      {transactionId && <p className='text-green-500'>Your Transaction Id Is{transactionId}</p>}
      {cardError && <p className='text-red-500'>{cardError}</p>}
      </form>
    </div>
  );
};

export default PaymentForm;