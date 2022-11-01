export const TableHeaderAlarms = ({ headers }) => {
    return (
        <>
            {headers.map((item) => (
                <th scope="col" className="text-sm font-medium text-gray-100 px-0 py-4 text-center">{item}</th>
            ))}
        </>
    )
}

export const TableBodyAlarms = ({ data }) => {
    return (
        <tr className="bg-white border-b">
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap" colSpan={7}>
                No se encontraron resultados.
            </td>
        </tr>
    )
}

export const TableHeaderCurrencies = ({ headers }) => {
    return (
        <>
            {headers.map((item) => (
                <th scope="col" className="text-sm font-medium text-gray-100 px-0 py-4 text-center">{item}</th>
            ))}
        </>
    )
}

export const TableBodyCurrencies = ({ data }) => {
    return (
        <>
            {data.map((item) => (
                <tr className="bg-white border-b" id={item.id}>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {item.currency}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {item.name}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {item.code}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {item.state}
                    </td>
                </tr>
            ))}
        </>
    )
}

export const TableHeaderOperations = ({ headers }) => {
    return (
        <>
            {headers.map((item) => (
                <th scope="col" className="text-sm font-medium text-gray-100 px-0 py-4 text-center">{item}</th>
            ))}
        </>
    )
}

export const TableBodyOperations = ({ data }) => {
    return (
        <>
            {data.map((item) => (
                <tr className="bg-white border-b" id={item.id}>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {item.name}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {item.currency}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {item.state}
                    </td>
                </tr>
            ))}
        </>
    )
}

export const TableHeaderTypeAccountsList = ({ headers }) => {
    return (
        <>
            {headers.map((item) => (
                <th scope="col" className="text-sm font-medium text-gray-100 px-0 py-4 text-center">{item}</th>
            ))}
        </>
    )
}

export const TableBodyTypeAccountsList = ({ data }) => {
    return (
        <>
            {data.map((item) => (
                <tr className="bg-white border-b" id={item.id}>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {item.description}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {item.userType}
                    </td>
                </tr>
            ))}
        </>
    )
}