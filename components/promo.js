import Link from "next/link";

export default function Promo() {
    return (
        <>
            <div className="max-w-md mx-auto bg-white dark:bg-black border rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4 px-4 pt-4">
                <div className="md:flex">
                    <div className="md:flex-shrink-0">
                        <img
                            alt="Course Image"
                            className="h-48 w-full object-cover md:w-48"
                            height="200"
                            src="https://images.unsplash.com/photo-1495055154266-57bbdeada43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGFpfGVufDB8fDB8fHww"
                            style={{
                                aspectRatio: "200/200",
                                objectFit: "cover",
                            }}
                            width="200"
                        />
                    </div>
                    <div className="p-8">
                        <div className="block mt-1 text-lg leading-tight font-medium">
                            <h1>Introduction to AI</h1>
                        </div>
                        <div className="mt-2 text-gray-500">
                            <p className="text-sm">
                                Dive into the world of artificial intelligence with this comprehensive course. Learn about machine
                                learning, deep learning, and AI applications.
                            </p>
                        </div>
                        <div className="flex items-center justify-between mt-6">
                            <Link href={"/courses"} className="text-indigo-600 hover:text-indigo-500">Learn More</Link>
                            <div className="text-sm text-gray-500 flex space-x-2 items-center">
                                <p className="line-through">$120</p>
                                <p className="text-xl font-semibold text-yellow-500">$60</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-md mx-auto bg-white dark:bg-black border rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4 px-4 pt-4">
                <div className="md:flex">
                    <div className="md:flex-shrink-0">
                        <img
                            alt="Course Image"
                            className="h-48 w-full object-cover md:w-48"
                            height="200"
                            src="https://plus.unsplash.com/premium_photo-1661764393655-1dbffee8c0ce?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            style={{
                                aspectRatio: "200/200",
                                objectFit: "cover",
                            }}
                            width="200"
                        />
                    </div>
                    <div className="p-8">
                        <div className="block mt-1 text-lg leading-tight font-medium">
                            <h1>Cyber Security Course </h1>
                        </div>
                        <div className="mt-2 text-gray-500">
                            <p className="text-sm">
                                We explore the Darknet and mindset of the cyber criminal. Covering malware, exploit kits, phishing, zero-day vulnerabilities and much more.
                            </p>
                        </div>
                        <div className="flex items-center justify-between mt-6">
                            <Link href={"/courses"} className="text-indigo-600 hover:text-indigo-500">Learn More</Link>
                            <div className="text-sm text-gray-500 flex space-x-2 items-center">
                                <p className="line-through">$400</p>
                                <p className="text-xl font-semibold text-yellow-500">$200</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

