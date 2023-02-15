import { i18nState } from "~/root";
import { handleSubmit } from "~/functions";
import Input from "~/components/Input/Input";
import { surname, name, company, phone, mail, comment, setSurname, setName, setCompany, setPhone, setMail, setComment } from "~/routes/booking";
import style from '~/style/booking.module.scss';

export default function Tailored() {

    return (
        <form id={style.formulaire} autocomplete='off' onSubmit={e => handleSubmit(e)}>
            <div id={style.formulaireContainer}>
                <div id={style.inputContainerDouble}>
                    <Input type='text' textLabel={i18nState.t('booking-tailored-surname')} required={true} for='surname' valeur={surname()} setValeur={setSurname} textError={i18nState.t('booking-tailored-surname-error') as string} />
                    <Input type='text' textLabel={i18nState.t('booking-tailored-name')} required={true} for='name' valeur={name()} setValeur={setName} textError={i18nState.t('booking-tailored-name-error') as string} />
                </div>
                <Input type='text' textLabel={i18nState.t('booking-tailored-company')} for='company' valeur={company()} setValeur={setCompany} />
                <Input type='text' textLabel={i18nState.t('booking-tailored-phone')} required={true} for='phone' valeur={phone()} setValeur={setPhone} />
                <Input type='text' textLabel={i18nState.t('booking-tailored-mail')} required={true} for='mail' valeur={mail()} setValeur={setMail} textError={i18nState.t('booking-tailored-mail-error') as string} />
                <Input type='textarea' textLabel={i18nState.t('booking-tailored-message')} for='comment' valeur={comment()} setValeur={setComment} />
            </div>
            <div id={style.formulaireSubmitArea}>
                <p>{i18nState.t('booking-mandatory-fields')}</p>
                <button class='button' type='submit'>
                    {i18nState.t('booking-tailored-button-send')}
                </button>
            </div>
        </form>
    )
}