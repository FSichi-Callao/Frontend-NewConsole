
export const TablePermissions = ({ title, data, setData }) => {

    const handleCheck = (id) => {
        const dataUpdated = data.map(
            op => op.id === id
                ? { ...op, state: !op.state }
                : op
        )
        handleSetData(dataUpdated);
    }

    const handleSetData = (data) => {
        setData(data);
    }

    return (
        <div style={{ overflowX: 'hidden' }} className='mt-3'>
            <table className="table table-striped text-center">
                <thead style={{ backgroundColor: 'white', color: '#0D257C' }}>
                    <tr>
                        <th scope="col head-table">{title}</th>
                        <th scope="col head-table">Ver</th>
                    </tr>
                </thead>
                <tbody className="bg-gray-300">
                    {data.map((item) => (
                        <tr id={item.id}>
                            <th className="text-gray-700 py-3">{item.option}</th>
                            <th style={{ fontSize: '20px' }}>
                                <div className="form-check d-flex justify-content-center mt-1">
                                    {
                                        (item.state)
                                            ? <input className='form-check-input mt-2' type="checkbox" onChange={() => { handleCheck(item.id) }} defaultChecked={true} />
                                            : <input className='form-check-input mt-2' type="checkbox" onChange={() => { handleCheck(item.id) }} />
                                    }
                                </div>
                            </th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}