import React from 'react';
import quote from '../../../assets/icons/quote.svg'
import people1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people2.png'
import people3 from '../../../assets/images/people3.png'
const Testimonial = () => {
    const reviews = [
        {
            _id: 1, 
            name: 'Winson Herry',
            img: people1,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California'
        },
        {
            _id: 2, 
            name: 'Winson Herry',
            img: people2,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California'
        },
        {
            _id: 3, 
            name: 'Winson Herry',
            img: people3,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California'
        },
    ]

    return (
        <section className='my-16'>
            <div className='flex justify-between'>
                <div>
                    <h3 className="text-xl text-primary font-bold">Testimonial</h3>
                    <h4  className="text-4xl">What Our Patients Says</h4>
                </div>
                <div>
                <img className='w-24 lg:w-48' src={quote} alt="" />
                </div>
            </div>
            <div>

            </div>
        </section>
    );
};

export default Testimonial;