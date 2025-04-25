import React from 'react';

const Test = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">How it works</h1>
      
      <div className="space-y-8">
        {/* Step 1 */}
        <div className="flex items-start">
          <div className="flex-shrink-0 mr-6 relative">
            <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-xl font-bold border-r-2 border-gray-300 pr-2">
              1
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Create Account</h2>
            <p className="mb-2">All you need is:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>GSTIN (for GST sellers) or Enrolment ID / UIN (for non-GST sellers)</li>
              <li>Bank Account</li>
            </ul>
          </div>
        </div>
        
        {/* Step 2 */}
        <div className="flex items-start">
          <div className="flex-shrink-0 mr-6 relative">
            <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-xl font-bold border-r-2 border-gray-300 pr-2">
              2
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">List Products</h2>
            <p>List the products you want to sell in your supplier panel</p>
          </div>
        </div>
        
        {/* Step 3 */}
        <div className="flex items-start">
          <div className="flex-shrink-0 mr-6 relative">
            <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-xl font-bold border-r-2 border-gray-300 pr-2">
              3
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Get Orders</h2>
            <p>Start getting orders from crores of Indians actively shopping on our platform.</p>
          </div>
        </div>
        
        {/* Step 4 */}
        <div className="flex items-start">
          <div className="flex-shrink-0 mr-6 relative">
            <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-xl font-bold border-r-2 border-gray-300 pr-2">
              4
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Lowest Cost Shipping</h2>
            <p>Products are shipped to customers at lowest costs</p>
          </div>
        </div>
        
        {/* Step 5 */}
        <div className="flex items-start">
          <div className="flex-shrink-0 mr-6 relative">
            <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-xl font-bold border-r-2 border-gray-300 pr-2">
              5
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Receive Payments</h2>
            <p>Payments are deposited directly to your bank account following a 7-day payment cycle from order delivery.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;