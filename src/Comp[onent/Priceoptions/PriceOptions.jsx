import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
    const gymOptions = [
        { 
          id: 1, 
          name: 'Basic Membership', 
          price: 30, 
          features: ['Access to gym equipment', 'Locker room access', '1 fitness class per week', 'Free Wi-Fi', 'Open access during staffed hours', 'Access to showers'] 
        },
        { 
          id: 2, 
          name: 'Standard Membership', 
          price: 50, 
          features: ['Access to gym equipment', 'Locker room access', 'Unlimited fitness classes', 'Free guest pass once a month', 'Sauna access', 'Towel service', 'Extended opening hours'] 
        },
        { 
          id: 3, 
          name: 'Premium Membership', 
          price: 70, 
          features: ['All Standard features', 'Personal trainer consultation', 'Access to VIP lounge', 'Priority equipment booking', 'Complimentary health check-ups', '24/7 access', 'Free entry to special events'] 
        },
        { 
          id: 4, 
          name: 'Personal Training Package', 
          price: 100, 
          features: ['5 personal training sessions', 'Custom workout plan', 'Nutrition advice', 'Body composition analysis', 'Access to private training rooms', 'Flexible scheduling', 'Free post-workout smoothie'] 
        },
        { 
          id: 5, 
          name: 'Annual Membership', 
          price: 500, 
          features: ['All Premium features', 'One year of gym access', 'Discount on personal training', 'Free gym merchandise', '2 free massage sessions', 'Priority access to new equipment', 'Exclusive members-only events'] 
        }
      ];
      
    return (
        <div className="mx-auto p-10">
            <h2 className="text-4xl">Best price in the town</h2>
           <div className="grid md:grid-cols-3 gap-7 mx-auto text-yellow-300">
           {
                gymOptions.map(option => <PriceOption 
                option={option}>
                </PriceOption>)
             }
           </div>
        </div>
    );
};

export default PriceOptions;