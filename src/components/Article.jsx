function Article(){
    return(
        <article className="container mx-auto p-6">
            <h2 className="text-2xl font-bold flex justify-left">📰 Latest News</h2>
            <div className="flex shadow-lg bg-white p-4 rounded-lg">
                <img className="rounded-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyusEd9m-keWiufxrCp0x6P99SPcfwBPSR7g&s" alt="" />
                <div className="ml-4">
                    <h3 className="text-xl font-semibold">🚀 Vite is Revolutionizing Frontend</h3>
                    <p className="text-gray-600 mt-2">Vite is next-gen frontend tool that delivers fast development</p>
                </div>
            </div>
        </article>
    )
}

export default Article