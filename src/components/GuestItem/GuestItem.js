function GuestItem (props) {

    

    return(
        <tr key={props.guest.id}>
            <td>{props.guest.name}</td>
            <td>{String(props.guest.kidsMeal)}</td>
            <td><button>Remove</button></td>
        </tr>
    )
}

export default GuestItem;