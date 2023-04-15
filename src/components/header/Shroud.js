import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { addDays } from "date-fns";
import { useState } from "react";
import { DateRangePicker } from "react-date-range";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import PickButton from "./PickButton";

function Shroud(){
	const [dateState, setDates] = useState([
		{
		  startDate: new Date(),
		  endDate: addDays(new Date(), 7),
		  key: 'selection'
		}
	]);

	return(
		<div className="shroud">
			<div id="experience">
				<h4>Stays</h4>
				<h4>Experiences</h4>
				<h4>Online Experiences</h4>
			</div>
			<div id="picker">
				<div className="pick">
					<PickButton title='Where' sub='Search destination' check={true}/>
				</div>
				<div className="pick active">
					<PickButton title='Check in' sub='Add dates'/>
				</div>
				<div className="pick">
					<PickButton title='Check out' sub='Add dates'/>
				</div>
				<div className="pick">
					<PickButton title='Who' sub='Add guests'/>
					<button>
						<FontAwesomeIcon icon={faSearch}/>
						<p>Search</p>
					</button>
				</div>
			</div>
			<DateRangePicker onChange={item => setDates([item.selection])} showSelectionPreview={true} minDate={addDays(new Date(),0)} showDateDisplay={false} showMonthAndYearPickers={false} rangeColors={['#000']} moveRangeOnFirstSelection={false} months={2} ranges={dateState} direction="horizontal"/>
		</div>
	);
}

export default Shroud;