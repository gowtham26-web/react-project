const tableheading = [
    {
        colName: "Avatar",
        icon: "👤",
    },

    {
        colName: "Name",
        icon: "📛",
    },
    {
        colName: "Status",
        icon: "✅",
    }
]

const tabledata = [
    {
        avatar: "https://i.pinimg.com/736x/93/e8/d0/93e8d0313894ff752ef1c6970116bad6.jpg",
        name: "Alice",
        status: "Active"
    },
    {
        avatar: "https://i.pinimg.com/736x/93/e8/d0/93e8d0313894ff752ef1c6970116bad6.jpg",
        name: "Bob",
        status: "Inactive"
    }
]




function Table() {
    return (
        <div className="container mx-auto p-6">
            <h2 className="text-2xl font-bold mb-4 flex justify-left">📊 User Data</h2>
            <table className="min-w-full border border-collapse">
                <thead>
                    <tr>
                        {tableheading.map((heading) => (
                            <th key={heading.colName} className="border border-gray-600 px-4 py-2 bg-gray-200">
                                {heading.icon} {heading.colName}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {tabledata.map((user, index) => (
                        <tr key={index}>
                            <td className="border border-gray-300 px-4 py-2">
                                <img
                                    width={50}
                                    height={50}
                                    src={user.avatar}
                                    alt="user avatar"
                                />
                            </td>
                            <td className="border border-gray-300 px-4 py-2">{user.name}</td>
                            <td className={`border border-gray-300 px-4 py-2 ${user.status == "Active" ? `text-green-600`:`text-red-600`}`}>
                                {user.status}

                            </td>
                        </tr>

                    )
                    )}
                </tbody>
            </table>
        </div>
    )
}
export default Table