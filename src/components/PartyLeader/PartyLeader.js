function PartyLeader (props) {
    return(
        <div>
            <h2>Party Leader</h2>
            {props.leader && <h3>{props.leader.name}</h3>}
         </div>
    )
}

export default PartyLeader;