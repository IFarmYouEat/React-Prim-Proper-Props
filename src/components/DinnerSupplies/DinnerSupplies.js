import SilverWare from '../SilverWare/SilverWare.js';

function DinnerSupplies (props) {

    const count = props.guestList.length * 2;

    return (
        <div>
            <h2>Dinner Supplies</h2>
            <SilverWare name = "Spoons" count = {count}/>
            <SilverWare name = "Forks" count = {count}/>
            <SilverWare name = "Knives" count = {count}/>
        </div>
    )
}

export default DinnerSupplies;