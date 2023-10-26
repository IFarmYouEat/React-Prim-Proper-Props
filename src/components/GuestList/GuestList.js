import GuestItem from '../GuestItem/GuestItem.js';

function GuestList (props) {

    return (
        <div>
            <h2>Guest List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Kid's Meal</th>
                    </tr>
                </thead>
                <tbody>
                {props.guestList.map(guest => (
                    <GuestItem guest={guest} getGuests={props.getGuests} />
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default GuestList;