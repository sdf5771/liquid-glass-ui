import styles from './LiquidGlassContainer.module.css'

function LiquidGlassContainer({ children, style }: { children?: React.ReactNode, style?: React.CSSProperties }){

    return (
        <div style={style} className={styles.liquid_glass_container}>
            {children}
        </div>
    )
}

export default LiquidGlassContainer;