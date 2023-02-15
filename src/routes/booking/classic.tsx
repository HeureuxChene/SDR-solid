import { i18nState } from "~/root";
import { numberToTable } from "~/functions";
import Input from "~/components/Input/Input";
import { date, time, vehicle, passengers, luggages, origin, destination, methodePaiement, surname, name, company, phone, mail, comment, setDate, setTime, setVehicle, setPassengers, setLuggages, setOrigin, setDestination, setMethodePaiement, setSurname, setName, setCompany, setPhone, setMail, setComment, getTableVehicule } from '~/routes/booking';
import style from '~/style/booking.module.scss';
import Dropdown from "~/components/Dropdown/Dropdown";

export default function Classic() {

    return (
        <form id={style.formulaire} autocomplete='off'>
            <div id={style.formulaireContainer}>
                <div id={style.inputContainerDouble}>
                    <Input type='date' textLabel={i18nState.t('booking-classic-date')} required={true} for='date' valeur={date()} setValeur={setDate} />
                    <Input type='time' textLabel={i18nState.t('booking-classic-heure')} required={true} for='time' valeur={time()} setValeur={setTime} />
                </div>
                <Dropdown valeurs={getTableVehicule()} valeur={vehicle} setValeur={setVehicle} traduction={true} />
                <div id={style.inputContainerDouble}>
                    <Dropdown valeurs={numberToTable(10)} valeur={passengers} setValeur={setPassengers} traduction={false} text={i18nState.t('booking-classic-passengers-minus') as string} />
                    <Dropdown valeurs={numberToTable(20)} valeur={luggages} setValeur={setLuggages} traduction={false} text={i18nState.t('booking-classic-luggages-minus') as string} />
                </div>
            </div>
        </form>
    )
}