import styles from './FormsControls.module.scss'

const Element = (Element) => ({input, meta, ...props}) => {
    debugger;
    const hasError = meta.error && meta.touched;
    
    return (
        <div className={`${styles.formControl} ${hasError && styles.error}`}>
            <Element {...input} {...props} />
            { hasError && <div>{meta.error}</div>}
        </div>
    )
}

export const Textarea = Element('textarea')
export const Input = Element('input')