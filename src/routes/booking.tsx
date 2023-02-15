import { Outlet, A, useLocation } from 'solid-start';
import { createSignal, onMount } from 'solid-js';
import { i18nState } from "~/root";
import vehicles from '~/json/vehicles.json';
import style from '~/style/layout.module.scss';

export const [date, setDate] = createSignal('');
export const [time, setTime] = createSignal('');
export const [vehicle, setVehicle] = createSignal((vehicles as any)[0]["traduction"]);
export const [passengers, setPassengers] = createSignal('0');
export const [luggages, setLuggages] = createSignal('0');
export const [origin, setOrigin] = createSignal('');
export const [destination, setDestination] = createSignal('');
export const [methodePaiement, setMethodePaiement] = createSignal('');

export const [surname, setSurname] = createSignal('');
export const [name, setName] = createSignal('');
export const [company, setCompany] = createSignal('');
export const [phone, setPhone] = createSignal('');
export const [mail, setMail] = createSignal('');
export const [comment, setComment] = createSignal('');

export const getTableVehicule = () => {
    var tableVehicule: string[] = [];
    Object.keys(vehicles).map((key: any) => {
        tableVehicule.push((vehicles as any)[key]["traduction"]);
    });
    return tableVehicule;
}


export default function BookingLayout() {

    return (
        <>
            <div id={style.space}>

            </div>
            <div id={style.nav}>
                <A class={`${style.link} ${useLocation().pathname === '/booking/classic' ? style.linkActive : undefined}`} href="/booking/classic" noScroll={true}>
                    {i18nState.t('navlink-booking-classic')}
                </A>
                <A class={`${style.link} ${useLocation().pathname === '/booking/tailored' ? style.linkActive : undefined}`} href="/booking/tailored" noScroll={true}>
                    {i18nState.t('navlink-booking-tailored')}
                </A>
            </div>
            <Outlet />
        </>
    )
}