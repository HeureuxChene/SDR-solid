import { createSignal } from "solid-js";
import style from './Input.module.scss';
import { Setter } from "solid-js";

type Props = {
    type: string;
    textLabel: string;
    textError?: string;
    required?: boolean;
    for?: string;
    valeur: any;
    setValeur: Setter<string>;
    valeurError?: boolean;
    setValeurError?: Setter<boolean>;
    errorPatern?: RegExp;
    firstSubmit?: boolean;
    submitStatus?: string;
    placeholder?: string;
    valeurs?: string[];
};

export default function Input(props: Props) {

    const [focus, setFocus] = createSignal(props.valeur === '' ? false : true);

    switch (props.type) {
        case 'text': {
            return (
                <div class={style.container}>
                    <label class={`${style.label} ${style.labelText} ${focus() ? style.labelFocus : undefined}`} for={props.for}>
                        {props.textLabel} {props.required ? '*' : undefined}
                    </label>
                    <input required={props.required ? props.required : false} type={props.type} id={props.for} name={props.for} disabled={props.submitStatus === 'valid' ? true : false} placeholder={props.placeholder ? props.placeholder : ''} onChange={e => { props.setValeur(e.target.value); !props.firstSubmit && (props.errorPatern.test(e.target.value) ? props.setValeurError(false) : props.setValeurError(true)) }} onFocus={() => setFocus(true)} onBlur={() => props.valeur === '' ? setFocus(false) : undefined} value={props.valeur} class={`${style.input} ${props.valeurError && props.submitStatus === 'default' ? style.inputError : focus() && style.inputFocus}`} />
                    {
                        props.required && <div class={`${style.error} ${props.valeurError && props.submitStatus === 'default' ? style.errorVisible : undefined}`}>{props.textError}</div>
                    }
                </div>
            )
        }
        case 'textarea': {
            return (
                <div class={style.container}>
                    <label class={`${style.label} ${style.labelText} ${focus() ? style.labelFocus : undefined}`} for={props.for}>
                        {props.textLabel} {props.required ? '*' : ''}
                    </label>
                    <textarea required={props.required} id={props.for} name={props.for} disabled={props.submitStatus === 'valid' ? true : false} rows='5' placeholder={props.placeholder ? props.placeholder : ''} onChange={e => props.setValeur(e.target.value)} onFocus={() => setFocus(true)} onBlur={() => props.valeur === '' ? setFocus(false) : undefined} value={props.valeur} class={`${style.input} ${focus() && style.inputFocus} `} style={{ resize: 'vertical', height: 'auto' }} />
                    {
                        props.required && <div class={`${style.error} ${props.valeurError && props.submitStatus === 'default' ? style.errorVisible : undefined}`}>{props.textError}</div>
                    }
                </div>
            )
        }
        case 'time': {
            return (
                <div class={style.container}>
                    <label class={`${style.label} ${focus() ? style.labelFocus : undefined}`} for={props.for}>
                        {props.textLabel} {props.required ? '*' : ''}
                    </label>
                    <input required={props.required} type={props.type} id={props.for} name={props.for} disabled={props.submitStatus === 'valid' ? true : false} placeholder={props.placeholder ? props.placeholder : ''} onChange={e => props.setValeur(e.target.value)} onFocus={() => setFocus(true)} onBlur={() => props.valeur === '' ? setFocus(false) : undefined} value={props.valeur} class={`${style.input} ${focus() && style.inputFocus} `} />
                    {
                        props.required && <div class={`${style.error} ${props.valeurError && props.submitStatus === 'default' ? style.errorVisible : undefined}`}>{props.textError}</div>
                    }
                </div>
            )
        }
        case 'date': {
            const today = new Date();
            const todayYear = today.getFullYear();
            var todayMonth = today.getMonth() + 1;
            const todayDay = today.getDate();
            var tommorow = todayDay + 1;
            const lastDayOfTheMonth = new Date(todayYear, todayMonth, 0).getDate();
            if (todayDay === lastDayOfTheMonth) {
                todayMonth = todayMonth + 1;
                tommorow = 1;
            }
            const minDate: string = todayYear + '-' + String(todayMonth).padStart(2, '0') + '-' + String(tommorow).padStart(2, '0');
            return (
                <div class={style.container}>
                    <label class={`${style.label} ${focus() ? style.labelFocus : undefined}`} for={props.for}>
                        {props.textLabel} {props.required ? '*' : ''}
                    </label>
                    <input required={props.required} type={props.type} min={minDate} id={props.for} name={props.for} disabled={props.submitStatus === 'valid' ? true : false} placeholder={props.placeholder ? props.placeholder : ''} onChange={e => props.setValeur(e.target.value)} onFocus={() => setFocus(true)} onBlur={() => props.valeur === '' ? setFocus(false) : undefined} value={props.valeur} class={`${style.input} ${focus() && style.inputFocus} `} />
                    {
                        props.required && <div class={`${style.error} ${props.valeurError && props.submitStatus === 'default' ? style.errorVisible : undefined}`}>{props.textError}</div>
                    }
                </div>
            )
        }
    }
};