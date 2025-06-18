import styles from './Home.module.css'
import { LiquidGlassContainer } from '../../components/shared';

function Home() {
    return (
        <main className={styles.main}>
            
            <section className={`${styles.section} ${styles.bg1}`}>
                <div className={styles.section_content_container}>
                    
                </div>
            </section>
            <section className={`${styles.section} ${styles.bg2}`}>

            </section>
            <section className={`${styles.section} ${styles.bg3}`}>

            </section>
            <LiquidGlassContainer 
                style={
                    {
                        width: '300px', 
                        height: '100px', 
                        position: 'fixed', 
                        top: '100px', 
                        left: '50%', 
                        transform: 'translateX(-50%)', 
                        borderRadius: '32px',
                        padding: '10px 30px',
                        zIndex: 1000
                    }
                }
            >
                <h1
                    style={{
                        fontSize: '30px',
                        fontWeight: 'bold',
                        color: '#fff',
                        textShadow: '0 0 10px #00000066',
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                    }}
                >Hello World</h1>
            </LiquidGlassContainer>

            <LiquidGlassContainer 
                style={
                    {
                        width: '300px', 
                        height: '100px', 
                        position: 'fixed', 
                        top: '300px', 
                        left: '50%', 
                        transform: 'translateX(-50%)', 
                        borderRadius: '60px',
                        zIndex: 1000,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }
                }
            >
                <h1
                    style={{
                        fontSize: '30px',
                        fontWeight: 'bold',
                        color: '#fff',
                        textShadow: '0 0 10px #00000066',
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                    }}
                >Hello</h1>
            </LiquidGlassContainer>

            <LiquidGlassContainer 
                style={
                    {
                        width: '120px', 
                        height: '120px', 
                        position: 'fixed', 
                        top: '550px', 
                        left: '50%', 
                        transform: 'translateX(-50%)', 
                        borderRadius: '50%',
                        zIndex: 1000,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }
                }
            >
                <h1
                    style={{
                        fontSize: '30px',
                        fontWeight: 'bold',
                        color: '#fff',
                        textShadow: '0 0 10px #00000066',
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                    }}
                >H</h1>
            </LiquidGlassContainer>
        </main>
    )
}

export default Home;