import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css'
import { DateRangePicker } from 'react-date-range';

const DatePicker = ({range, handleChange}) => {
    return(
        <div className="accordion w-75 mx-auto mt-5" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button justify-content-end d-flex" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                <div>{range.startDate.toDateString()} - {range.endDate.toDateString()}</div>
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body text-center">
              <DateRangePicker
                onChange={handleChange}
                showSelectionPreview={true}
                moveRangeOnFirstSelection={false}
                months={1}
                ranges={[range]}
                direction="horizontal"
              />
            </div>
          </div>
        </div>
      </div>
    )
}

export default DatePicker;