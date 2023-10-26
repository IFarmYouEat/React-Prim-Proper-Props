import axios from 'axios';

function GuestItem (props) {

    const removeGuest = () => {
        console.log('Removing', props.guest.name);
        axios.delete(`/guests/${props.guest.id}`).then((response) => {
            props.getGuests();
        }).catch((error) => {
            console.log('Error in removeGuest', error);
            alert(`Could not remove ${props.guest.name}`);
        })
    }


    return(
        <tr key={props.guest.id}>
            <td>{props.guest.name}</td>
            <td>{String(props.guest.kidsMeal)}</td>
            <td><button onClick={removeGuest}>Remove</button></td>
        </tr>
    )
}

export default GuestItem;