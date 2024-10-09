import * as React from 'react';
import classNames from 'classnames';

import { DynamicComponent } from '../../components-registry';
import { mapStylesToClassNames as mapStyles } from '../../../utils/map-styles-to-class-names';

export default function FormBlock(props) {
    const formRef = React.createRef<HTMLFormElement>();
    const { elementId, className, fields = [], submitLabel, styles = {} } = props;

    if (fields.length === 0) {
        return null;
    }

    async function handleSubmit(event) {
        event.preventDefault();

        const data = new FormData(formRef.current);
        const value = Object.fromEntries(data.entries());
        
        try {
            // Modificação 2: Envio dos dados do formulário para o Formspree
            const response = await fetch('https://formspree.io/f/mkgnwyoe', { 
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(value) // Transformação dos dados para o formato JSON
            });

            // Modificação 3: Verificação de resposta e mensagens de sucesso ou erro
            if (response.ok) {
                alert('Mensagem enviada com sucesso!');
                formRef.current.reset(); // Limpeza do formulário após envio bem-sucedido
            } else {
                alert('Ocorreu um erro ao enviar a mensagem.');
            }
        } catch (error) {
            console.error('Erro ao enviar o formulário:', error);
            alert('Ocorreu um erro ao enviar a mensagem.');
        }
    }

    return (
        <form
            className={classNames('sb-component', 'sb-component-block', 'sb-component-form-block', className)}
            name={elementId}
            id={elementId}
            onSubmit={handleSubmit}
            ref={formRef}
        >
            <div className="grid sm:grid-cols-2 sm:gap-x-4">
                <input type="hidden" name="form-name" value={elementId} />
                {fields.map((field, index) => {
                    return <DynamicComponent key={index} {...field} />;
                })}
            </div>
            <div className={classNames('mt-4', styles.submitLabel?.textAlign ? mapStyles({ textAlign: styles.submitLabel?.textAlign }) : null)}>
                <button type="submit" className="sb-component sb-component-block sb-component-button sb-component-button-primary">
                    {submitLabel}
                </button>
            </div>
        </form>
    );
}
