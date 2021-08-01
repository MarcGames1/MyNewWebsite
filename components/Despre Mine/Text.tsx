 import { Container } from 'react-bootstrap'
import styles from './Text.module.css'
 
 const Text = () =>{

    return(<Container className={styles.blackTransparent}>
        <h1 className='text-center'>Despre Mine</h1>
        <p>
        Sunt Alexandru Marcu, iar parcursul meu profesional este unul cel puțin interesant – cel puțin așa îl definesc  eu. 
        </p>
        <p>De la jobul de contabil la un club high-class din Galați, orașul natal, ambiția și dorința de a evolua m-au adus la un proiect personal: o afacere cu închirierea de biciclete și mașini pentru serviciile de livrari și transport din Brașov. </p>
        <p>Însă lucrurile nu se opresc aici. Cred în căutarea, dar mai ales în descoperirea vocației, iar asta m-a făcut să învăț programare pe cont propriu. Și așa mi-am descoperit vocația. A urmat primul proiect și primul client mulțumit. </p>
        <p>Aștept să ne cunoaștem, pentru a materializa ideile tale, la cel mai înalt standard de calitate.</p>

    </Container>)

}
export default Text