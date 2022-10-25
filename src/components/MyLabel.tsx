import './mylabel.css';

interface Props {
    /**
     * este es el mensaje mostrar en la etiqueta
     */
    label: string;
    /**
     * Este es el tamañao de la etiqeueta
     */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * si quiere todo capitalizado
     */
    allCaps?: boolean;
    /**
     * Colores basicos del boton
     */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
     * 
     */
    fontColor?: string;

}

export const MyLabel = ({
    label =  'No Label',
    size = 'normal',
    allCaps = false,
    color = 'primary',
    fontColor
}: Props ) => {
  return (
    <span className={`${ size } text-${color}`}
     style={{ color: fontColor }} >
        { allCaps ? label.toUpperCase() : label}
    </span>
  )
}
