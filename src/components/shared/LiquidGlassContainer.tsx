import styles from './LiquidGlassContainer.module.css'

interface ILiquidGlassContainerProps {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    murkiness?: 'clear' | 'medium' | 'high' ;
}

function LiquidGlassContainer({ children, style, murkiness = 'clear' }: ILiquidGlassContainerProps){

    return (
        <div style={style} className={`${styles.liquid_glass_container} ${styles[murkiness]}`}>
            {children}
        </div>
    )
}

export default LiquidGlassContainer;