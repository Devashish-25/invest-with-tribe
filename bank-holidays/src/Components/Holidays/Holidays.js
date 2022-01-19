import Card from "./Card"

const formatTitle = (title) => {
    let arr = title.split("-");
    arr = arr.map(s => {
        return s.charAt(0).toUpperCase() + s.slice(1);
    });
    return arr.join(' ')
}

const Holidays = ({ data, startDate, endDate }) => {
    return (
        <div className="w-75 mx-auto mt-3">
            <ul className="nav nav-tabs nav-fill" id="myTab" role="tablist">
                {Object.keys(data).map((key, index) => {
                    return <li key={index} className="nav-item" role="presentation">
                                <button className={index === 0 ? "nav-link active" : "nav-link"} id={`${key}-tab`} data-bs-toggle="tab" data-bs-target={`#${key}`} type="button" role="tab" aria-controls={`${key}`} aria-selected={index === 0 ? 'true' : 'false'}>
                                    {formatTitle(key)}
                                </button>
                            </li>
                })}
            </ul>
            <div className="tab-content border">
                {Object.keys(data).map((key, index) => {
                    return <div key={index} className={index === 0 ? "tab-pane active mx-5 mt-4" : "tab-pane mx-5 mt-4"} id={`${key}`} role="tabpanel" aria-labelledby={`${key}-tab`}>
                                {data[key].events.map((e, i) => {
                                    return (new Date(e.date) >= startDate && new Date(e.date) <= endDate) ? <Card key={i} data={e} /> : null
                                })}
                           </div>
                })}
            </div>
        </div>
    )
}

export default Holidays;