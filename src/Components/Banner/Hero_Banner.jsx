// import React from 'react';

// const Hero_Banner = () => {
//     return (
//         <div className="bg-blue-500 text-white py-10">
//             <div className="container mx-auto px-4">
//                 <h1 className="text-4xl font-bold mb-4">নারী অধিকার ও সমতা</h1>
//                 <p className="text-2xl mb-6">স্বাস্থ্যে | শিক্ষায় | সমর্থনে</p>
//                 <div className="space-y-4">
//                     <p><strong>স্বাস্থ্য:</strong> নারীদের জন্য স্বাস্থ্য সচেতনতা ও সহায়তা প্রদান</p>
//                     <p><strong>অধিকার:</strong> নারীর অধিকার এবং সুরক্ষা নিশ্চিতকরণ</p>
//                     <p><strong>শিক্ষা:</strong> শিক্ষার সুযোগ এবং সুবিধা বৃদ্ধি</p>
//                     <p><strong>সমর্থন:</strong> নারীদের জন্য কমিউনিটি সাপোর্ট এবং সহযোগিতা</p>
//                     <p><strong>প্যাড ব্যাংক:</strong> নারীদের জন্য প্যাড ব্যাংকের সুবিধা</p>
//                     <p><strong>ভাতা:</strong> নারীদের জন্য ভাতা প্রদানের সুযোগ</p>
//                     <p><strong>বেকারত্ব:</strong> নারীর কর্মসংস্থান সৃষ্টিতে সহায়তা</p>
//                     <p><strong>কনফারেন্স:</strong> নারী অধিকার এবং সমতা নিয়ে কনফারেন্স ও সেমিনার আয়োজন</p>
//                 </div>
//                 <div className="mt-6">
//                     <p>যোগাযোগ করুন:</p>
//                     <p><strong>ফোন:</strong> +880123456789</p>
//                     <p><strong>ইমেইল:</strong> info@genderequity.org</p>
//                     <p><strong>ওয়েবসাইট:</strong> www.genderequity.org</p>
//                 </div>
//                 <div className="mt-6">
//                     <p className="font-bold">নারীর উন্নয়ন, দেশের উন্নয়ন।</p>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Hero_Banner;

import banner from '../../assets/images/banner.jpg'
import React from 'react';

const Hero_Banner = () => {
    return (
        <div className="relative bg-blue-500 text-white">
            <img
                src={banner} // এখানে আপনার ইমেজের লিঙ্ক দিন
                alt="Gender Equality"
                className="w-full h-[88vh] object-cover opacity-50"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <h1 className="text-4xl font-bold mb-4">নারী অধিকার ও সমতা</h1>
                <p className="text-2xl">"সমতা ও ন্যায়ের জন্য মিলিত হই"</p>
            </div>
        </div>
    );
}

export default Hero_Banner;

