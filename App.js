import logo from './logo.svg';
import './App.css';

import React from 'react';


function App() {
  const pricePlans = [
    {
      title: 'Free',
      price: '$0/month',
      features: ['Single User', '50 GB Storage', 'Unlimited Public Projects','Community Access','unlimited Private Projects','Dedicated Phone Support','free Subdomain','Monthly status Reports'],
    },
    {
      title: 'Plus',
      price: '$9/month',
      features: ['5 User', '50 GB Storage', 'Unlimited Public Projects','Community Access','unlimited Private Projects','Dedicated Phone Support','free Subdomain','Monthly status Reports'],
    },
    {
      title: 'Pro',
      price: '$40/month',
      features: ['Unlimited User', '50 GB Storage', 'Unlimited Public Projects','Community Access','unlimited Private Projects','Dedicated Phone Support','free Subdomain','Monthly status Reports'],
    },
  ];

  return (
    <div className="App">
      <div className="price-plan-panel">
        {pricePlans.map((plan, index) => (
          <div className="price-plan-card" key={index}>
            <h2>{plan.title}</h2>
            <p className="price">{plan.price}</p>
            <ul>
              {plan.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <button className="btn btn-primary">Select</button>
          </div>
        ))}
      </div>
    </div>
  );
}




export default App;
