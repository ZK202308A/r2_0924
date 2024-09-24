
function BasicLayout({children}: {children: React.ReactNode}) {
    return (
        <>
            <header className="bg-white shadow-md">
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    {/* 로고 */}
                    <a href="/" className="text-2xl font-bold text-blue-500">MyLogo</a>

                    {/* 네비게이션 */}
                    <nav className="hidden md:flex space-x-6">
                        <a href="/" className="text-gray-700 hover:text-blue-500">Home</a>
                        <a href="/about" className="text-gray-700 hover:text-blue-500">About</a>
                        <a href="/services" className="text-gray-700 hover:text-blue-500">Services</a>
                        <a href="/contact" className="text-gray-700 hover:text-blue-500">Contact</a>
                    </nav>

                    {/* CTA 버튼 */}
                    <div className="hidden md:block">
                        <a href="/signup"
                           className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">
                            Sign Up
                        </a>
                    </div>

                    {/* 모바일 메뉴 버튼 */}
                    <div className="md:hidden">
                        <button className="text-gray-700 focus:outline-none">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </header>
            <div className='flex w-full'>
                <main>{children}</main>
                <aside>
                    <p>Sidebar</p>
                </aside>
            </div>


        </>
    );
}

export default BasicLayout;